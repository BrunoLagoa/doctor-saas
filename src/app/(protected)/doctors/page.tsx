import { asc, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import {
  PageContainer,
  PageContent,
  PageHeader,
  PageHeaderActions,
  PageHeaderContent,
  PageHeaderDescription,
  PageHeaderTitle,
} from "@/components/ui/page-container";
import { db } from "@/db";
import { doctorsTable } from "@/db/schema";
import { auth } from "@/lib/auth";

import AddDoctorButton from "./_components/add-doctor-button";
import DoctorCard from "./_components/doctor-card";
import EmptyState from "./_components/empty-state";

export default async function DoctorsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/authentication");
  }

  if (!session.user?.clinic) {
    redirect("/clinic-form");
  }

  if (!session.user.plan) {
    redirect("/new-subscription");
  }

  const doctors = await db.query.doctorsTable.findMany({
    where: eq(doctorsTable.clinicId, session.user.clinic.id),
    orderBy: asc(doctorsTable.createdAt),
  });

  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageHeaderTitle>Doctors</PageHeaderTitle>
          <PageHeaderDescription>
            Gerencie os médicos cadastrados no sistema.
          </PageHeaderDescription>
        </PageHeaderContent>
        <PageHeaderActions>
          <AddDoctorButton />
        </PageHeaderActions>
      </PageHeader>
      <PageContent>
        {!doctors.length && <EmptyState />}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </PageContent>
    </PageContainer>
  );
}
