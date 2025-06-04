import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import SignOutButton from "./_components/sign-out-button";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/authentication");
  }

  if (!session.user.clinic) {
    redirect("/clinic-form");
  }

  return (
    <>
      <div>Dashboard</div>
      <h1>{session?.user.name}</h1>
      <p>{session?.user.email}</p>
      {session?.user.image && (
        <Image src={session?.user.image} alt="User" width={32} height={32} />
      )}

      <SignOutButton />
    </>
  );
}
