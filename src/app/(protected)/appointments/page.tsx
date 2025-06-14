import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { DataTable } from "@/components/ui/data-table";
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
import { appointmentsTable, doctorsTable, patientsTable } from "@/db/schema";
import { auth } from "@/lib/auth";

import AddAppointmentButton from "./_components/add-appointment-button";
import { appointmentsTableColumns } from "./_components/table-columns";

const AppointmentsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    redirect("/authentication");
  }
  if (!session.user.clinic) {
    redirect("/clinic-form");
  }

  const [patients, doctors, appointments] = await Promise.all([
    db.query.patientsTable.findMany({
      where: eq(patientsTable.clinicId, session.user.clinic.id),
    }),
    db.query.doctorsTable.findMany({
      where: eq(doctorsTable.clinicId, session.user.clinic.id),
    }),
    db.query.appointmentsTable.findMany({
      where: eq(appointmentsTable.clinicId, session.user.clinic.id),
      with: {
        patient: true,
        doctor: true,
      },
    }),
  ]);

  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageHeaderTitle>Agendamentos</PageHeaderTitle>
          <PageHeaderDescription>
            Gerencie os agendamentos da sua clínica
          </PageHeaderDescription>
        </PageHeaderContent>
        <PageHeaderActions>
          <AddAppointmentButton patients={patients} doctors={doctors} />
        </PageHeaderActions>
      </PageHeader>
      <PageContent>
        <DataTable
          data={appointments.map((appointment) => ({
            ...appointment,
            patient: {
              ...appointment.patient,
              gender:
                appointment.patient.gender === "other"
                  ? "male"
                  : appointment.patient.gender,
            },
            doctor: {
              id: appointment.doctor.id,
              name: appointment.doctor.name,
              specialty: appointment.doctor.specialty,
            },
          }))}
          columns={appointmentsTableColumns}
        />
      </PageContent>
    </PageContainer>
  );
};

export default AppointmentsPage;
