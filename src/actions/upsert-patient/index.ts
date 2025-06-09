"use server";

import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import z from "zod";

import { db } from "@/db";
import { patientsTable } from "@/db/schema";
import { auth } from "@/lib/auth";
import { actionClient } from "@/lib/safe-action";

const upsertPatientSchema = z.object({
  id: z.string().optional(),
  name: z.string().trim().min(1, { message: "Nome é obrigatório" }),
  email: z.string().email({ message: "Email deve ter um formato válido" }),
  phoneNumber: z
    .string()
    .min(1, { message: "Número de telefone é obrigatório" }),
  gender: z.enum(["male", "female"], { message: "Gênero é obrigatório" }),
});

export type UpsertPatientData = z.infer<typeof upsertPatientSchema>;

export const upsertPatient = actionClient
  .inputSchema(upsertPatientSchema)
  .action(async ({ parsedInput }) => {
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
      .insert(patientsTable)
      .values({
        ...parsedInput,
        clinicId: session.user.clinic.id,
      })
      .onConflictDoUpdate({
        target: [patientsTable.id],
        set: {
          ...parsedInput,
        },
      });

    revalidatePath("/patients");
  });
