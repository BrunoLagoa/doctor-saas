"user server";

import { db } from "@/db";
import { clinicsTable } from "@/db/schema";

export const createClinic = async (name: string) => {
  const clinic = await db.insert(clinicsTable).values({ name });
};
