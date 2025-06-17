import { Stethoscope } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { getInitials } from "@/lib/utils";

interface TopDoctorsProps {
  doctors: {
    id: string;
    name: string;
    avatarImageUrl: string | null;
    specialty: string;
    appointments: number;
  }[];
}

export default function TopDoctors({ doctors }: TopDoctorsProps) {
  return (
    <Card className="mx-auto w-full">
      <CardContent>
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Stethoscope className="text-muted-foreground" />
            <CardTitle className="text-base">Médicos</CardTitle>
          </div>
        </div>

        {!doctors.length && (
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="mb-2 text-sm font-medium text-gray-900">
              Nenhum médico encontrado
            </h3>
            <p className="text-xs text-gray-500">
              Cadastre médicos para visualizar os dados
            </p>
          </div>
        )}

        {!!doctors.length && (
          <div className="space-y-6">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="flex items-start gap-3">
                <Avatar className="h-10 w-10 shrink-0">
                  <AvatarFallback className="bg-gray-100 text-lg font-medium text-gray-600">
                    {getInitials(doctor.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex flex-row flex-wrap justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-medium">
                        {doctor.name}
                      </h3>
                      <p className="text-muted-foreground w-[1024]:text-sm truncate text-xs">
                        {doctor.specialty}
                      </p>
                    </div>
                    <span className="text-muted-foreground text-xs font-medium xl:text-sm">
                      {doctor.appointments} agendamento
                      {doctor.appointments !== 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
