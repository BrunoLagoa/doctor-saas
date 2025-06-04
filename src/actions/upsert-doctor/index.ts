"use server";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import z from "zod";

import { db } from "@/db";
import { doctorsTable } from "@/db/schema";
import { auth } from "@/lib/auth";
import { actionClient } from "@/lib/safe-action";

dayjs.extend(utc);

const upsertDoctorSchema = z
  .object({
    id: z.string().optional(),
    name: z.string().trim().min(1, { message: "Nome é obrigatório" }),
    specialty: z
      .string()
      .trim()
      .min(1, { message: "Especialidade é obrigatória" }),
    appointmentPriceInCents: z
      .number()
      .min(1, { message: "Preço da consulta é obrigatório" }),
    availableFromWeekDay: z.number().min(0).max(6),
    availableToWeekDay: z.number().min(0).max(6),
    availableFromTime: z
      .string()
      .min(1, { message: "Hora de início é obrigatória" }),
    availableToTime: z
      .string()
      .min(1, { message: "Hora de término é obrigatória" }),
  })
  .refine(
    (data) => {
      return data.availableFromTime < data.availableToTime;
    },
    {
      message: "O horário inicial deve ser menor que o horário final",
      path: ["availableFromTime"],
    },
  )
  .refine(
    (data) => {
      return data.availableFromWeekDay <= data.availableToWeekDay;
    },
    {
      message: "O dia inicial deve ser menor ou igual ao dia final",
      path: ["availableFromWeekDay"],
    },
  );

export type UpsertDoctorData = z.infer<typeof upsertDoctorSchema>;

export const upsertDoctor = actionClient
  .inputSchema(upsertDoctorSchema)
  .action(async ({ parsedInput }) => {
    const availableFromTime = parsedInput.availableFromTime;
    const availableToTime = parsedInput.availableToTime;

    const availableFromTimeUTC = dayjs()
      .set("hour", Number(availableFromTime.split(":")[0]))
      .set("minute", Number(availableFromTime.split(":")[1]))
      .set("second", Number(availableToTime.split(":")[2]))
      .utc();
    const availableToTimeUTC = dayjs()
      .set("hour", Number(availableToTime.split(":")[0]))
      .set("minute", Number(availableToTime.split(":")[1]))
      .set("second", Number(availableToTime.split(":")[2]))
      .utc();

    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return {
        error: "Usuário não autenticado",
      };
    }

    if (!session?.user.clinic?.id) {
      return {
        error: "Clínica não encontrada",
      };
    }

    await db
      .insert(doctorsTable)
      .values({
        ...parsedInput,
        clinicId: session.user.clinic.id,
        availableFromTime: availableFromTimeUTC.format("HH:mm:ss"),
        availableToTime: availableToTimeUTC.format("HH:mm:ss"),
      })
      .onConflictDoUpdate({
        target: [doctorsTable.id],
        set: {
          ...parsedInput,
          availableFromTime: availableFromTimeUTC.format("HH:mm:ss"),
          availableToTime: availableToTimeUTC.format("HH:mm:ss"),
        },
      });
    revalidatePath("/doctors");
  });
