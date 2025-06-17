import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { auth } from "@/lib/auth";

import AuthenticationLayout from "./components/authentication-layout";
import LoginForm from "./components/login-form";
import SignUpForm from "./components/sign-up-form";

export default async function AuthenticationPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <AuthenticationLayout>
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-2 bg-gray-100/50">
          <TabsTrigger
            value="login"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            Entrar
          </TabsTrigger>
          <TabsTrigger
            value="register"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            Criar conta
          </TabsTrigger>
        </TabsList>

        <TabsContent value="login" className="space-y-4">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">
              Faça seu login
            </h2>
            <p className="text-gray-600">
              Entre com suas credenciais para acessar o sistema
            </p>
          </div>
          <LoginForm />
        </TabsContent>

        <TabsContent value="register" className="space-y-4">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">
              Crie sua conta
            </h2>
            <p className="text-gray-600">
              Comece a transformar sua clínica hoje mesmo
            </p>
          </div>
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </AuthenticationLayout>
  );
}
