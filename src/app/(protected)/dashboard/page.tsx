import dayjs from "dayjs";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { getDashboard } from "@/app/data/get-dashboard";
import {
  PageContainer,
  PageContent,
  PageHeader,
  PageHeaderActions,
  PageHeaderContent,
  PageHeaderDescription,
  PageHeaderTitle,
} from "@/components/ui/page-container";
import { auth } from "@/lib/auth";

import AppointmentsChart from "./_components/appointments-chart";
import DatePicker from "./_components/date-picker";
import StatsCards from "./_components/stats-cards";
import TopDoctors from "./_components/top-doctors";

interface DashboardPageProps {
  searchParams: Promise<{
    from: string;
    to: string;
  }>;
}

export default async function DashboardPage({
  searchParams,
}: DashboardPageProps) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/authentication");
  }

  if (!session.user.clinic) {
    redirect("/clinic-form");
  }

  const { from, to } = await searchParams;

  if (!from || !to) {
    redirect(
      `/dashboard?from=${dayjs().format("YYYY-MM-DD")}&to=${dayjs().add(1, "month").format("YYYY-MM-DD")}`,
    );
  }

  const {
    totalRevenue,
    totalAppointments,
    totalPatients,
    totalDoctors,
    topDoctors,
    dailyAppointmentsData,
  } = await getDashboard({
    from,
    to,
    session: {
      user: {
        clinic: {
          id: session.user.clinic.id,
        },
      },
    },
  });

  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageHeaderTitle>Dashboard</PageHeaderTitle>
          <PageHeaderDescription>
            Gerencie os dados do seu consultório.
          </PageHeaderDescription>
        </PageHeaderContent>
        <PageHeaderActions>
          <DatePicker />
        </PageHeaderActions>
      </PageHeader>
      <PageContent>
        <StatsCards
          totalRevenue={Number(totalRevenue.total) ?? null}
          totalAppointments={totalAppointments.total}
          totalPatients={totalPatients.total}
          totalDoctors={totalDoctors.total}
        />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2.25fr_1fr]">
          <AppointmentsChart dailyAppointmentsData={dailyAppointmentsData} />
          <TopDoctors doctors={topDoctors} />
        </div>
      </PageContent>
    </PageContainer>
  );
}
