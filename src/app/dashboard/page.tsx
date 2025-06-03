import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

import { db } from "@/db";
import { usersToClinicsTable } from "@/db/schema";
import { auth } from "@/lib/auth";

import SignOutButton from "./components/sign-out-button";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/authentication");
  }

  const clinics = await db.query.usersToClinicsTable.findMany({
    where: eq(usersToClinicsTable.userId, session.user.id),
  });

  if (!clinics.length) {
    redirect("/clinic-form");
  }

  return (
    <>
      <div>Dashboard</div>
      <h1>{session?.user.name}</h1>
      <p>{session?.user.email}</p>
      <Image
        src={session?.user.image as string}
        alt="User"
        width={32}
        height={32}
      />

      <SignOutButton />
    </>
  );
}
