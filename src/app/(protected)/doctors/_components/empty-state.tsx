import { Stethoscope, UserPlus } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import AddDoctorButton from "./add-doctor-button";

export default function EmptyState() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center p-8">
      <Card className="w-full max-w-md border-2 border-dashed border-gray-200 bg-gray-50/50">
        <CardContent className="flex flex-col items-center justify-center p-8 text-center">
          <div className="mb-6 rounded-full bg-blue-100 p-4">
            <Stethoscope className="h-12 w-12 text-blue-600" />
          </div>

          <h3 className="mb-2 text-xl font-semibold text-gray-900">
            Nenhum médico cadastrado
          </h3>

          <p className="mb-6 max-w-sm text-gray-600">
            Comece adicionando o primeiro médico da sua clínica. Você poderá
            gerenciar informações, especialidades e horários de atendimento.
          </p>

          <AddDoctorButton />

          <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
            <UserPlus className="h-4 w-4" />
            <span>Adicione médicos para começar</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
