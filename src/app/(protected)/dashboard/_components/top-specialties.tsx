import {
  Activity,
  Baby,
  Bone,
  Brain,
  Eye,
  Hand,
  Heart,
  Hospital,
  Stethoscope,
} from "lucide-react";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface TopSpecialtiesProps {
  topSpecialties: {
    specialty: string;
    appointments: number;
  }[];
}

const getSpecialtyIcon = (specialty: string) => {
  const specialtyLower = specialty.toLowerCase();

  if (specialtyLower.includes("cardiolog")) return Heart;
  if (
    specialtyLower.includes("ginecolog") ||
    specialtyLower.includes("obstetri")
  )
    return Baby;
  if (specialtyLower.includes("pediatr")) return Activity;
  if (specialtyLower.includes("dermatolog")) return Hand;
  if (
    specialtyLower.includes("ortoped") ||
    specialtyLower.includes("traumatolog")
  )
    return Bone;
  if (specialtyLower.includes("oftalmolog")) return Eye;
  if (specialtyLower.includes("neurolog")) return Brain;

  return Stethoscope;
};

export default function TopSpecialties({
  topSpecialties,
}: TopSpecialtiesProps) {
  const maxAppointments = Math.max(
    ...topSpecialties.map((i) => i.appointments),
  );
  return (
    <Card className="mx-auto w-full">
      <CardContent>
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Hospital className="text-muted-foreground" />
            <CardTitle className="text-base">Especialidades</CardTitle>
          </div>
        </div>

        <div className="space-y-6">
          {topSpecialties.map((specialty) => {
            const Icon = getSpecialtyIcon(specialty.specialty);
            // Porcentagem de ocupação da especialidade baseando-se no maior número de agendamentos
            const progressValue =
              (specialty.appointments / maxAppointments) * 100;

            return (
              <div key={specialty.specialty} className="flex items-start gap-3">
                <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                  <Icon className="text-primary h-5 w-5" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center">
                  <div className="mb-1 flex flex-col gap-1 xl:flex-row xl:items-center xl:justify-between">
                    <h3 className="truncate text-sm font-medium">
                      {specialty.specialty}
                    </h3>
                    <span className="text-muted-foreground text-xs font-medium xl:text-sm">
                      {specialty.appointments} agendamento
                      {specialty.appointments !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <Progress value={progressValue} className="w-full" />
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
