import { PlusIcon } from "lucide-react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
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

export default async function DoctorsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log(session);

  if (!session?.user) {
    redirect("/authentication");
  }

  if (!session.user?.clinic) {
    redirect("/clinic-form");
  }

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
          <Button>
            <PlusIcon className="h-4 w-4" />
            Adicionar médico
          </Button>
        </PageHeaderActions>
      </PageHeader>
      <PageContent>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Médicos</h2>
        </div>
      </PageContent>
    </PageContainer>
  );
}
