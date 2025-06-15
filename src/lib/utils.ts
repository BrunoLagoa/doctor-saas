import "dayjs/locale/pt-br";

import { type ClassValue, clsx } from "clsx";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { twMerge } from "tailwind-merge";

import { doctorsTable } from "@/db/schema";

dayjs.extend(utc);
dayjs.locale("pt-br");

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(
  name: string | undefined,
  maxInitials: number = 2,
): string {
  if (!name || typeof name !== "string") {
    return "";
  }

  return name
    .trim()
    .split(" ")
    .filter((word) => word.length > 0)
    .slice(0, maxInitials)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

export function getAvailability(doctor: typeof doctorsTable.$inferSelect) {
  const from = dayjs()
    .utc()
    .day(doctor.availableFromWeekDay)
    .set("hour", Number(doctor.availableFromTime.split(":")[0]))
    .set("minute", Number(doctor.availableFromTime.split(":")[1]))
    .set("second", Number(doctor.availableFromTime.split(":")[2] || 0))
    .local();
  const to = dayjs()
    .utc()
    .day(doctor.availableToWeekDay)
    .set("hour", Number(doctor.availableToTime.split(":")[0]))
    .set("minute", Number(doctor.availableToTime.split(":")[1]))
    .set("second", Number(doctor.availableToTime.split(":")[2] || 0))
    .local();
  return { from, to };
}

export function currencyFormatterInCents(amount: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount / 100);
}

export function generateTimeSlots() {
  const slots = [];
  for (let hour = 5; hour <= 23; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const timeString = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}:00`;
      slots.push(timeString);
    }
  }
  return slots;
}

export function getGenderLabel(gender: "male" | "female" | "other"): string {
  switch (gender) {
    case "male":
      return "Masculino";
    case "female":
      return "Feminino";
    case "other":
      return "Outro";
    default:
      return "Não informado";
  }
}
