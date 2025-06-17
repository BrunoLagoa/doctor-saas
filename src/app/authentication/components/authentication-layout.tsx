"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Stethoscope, Users } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";

interface AuthenticationLayoutProps {
  children: ReactNode;
}

export default function AuthenticationLayout({
  children,
}: AuthenticationLayoutProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const features = [
    {
      icon: Stethoscope,
      title: "Gestão Médica",
      description: "Sistema completo para clínicas",
    },
    {
      icon: Users,
      title: "Controle Total",
      description: "Pacientes e médicos organizados",
    },
    {
      icon: Shield,
      title: "Seguro",
      description: "Dados protegidos e criptografados",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-green-100/30 blur-3xl" />
      </div>

      <div className="relative flex min-h-screen">
        {/* Left Side - Branding */}
        <motion.div
          className="hidden lg:flex lg:w-1/2 lg:flex-col lg:justify-center lg:p-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-md">
            <motion.div
              className="mb-8 flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="rounded-xl bg-gradient-to-r from-blue-600 to-green-600 p-3 shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h1 className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-3xl font-bold text-transparent">
                Doctor SaaS
              </h1>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.h2
                className="mb-4 text-4xl font-bold text-gray-900"
                variants={fadeInUp}
              >
                Bem-vindo de volta!
              </motion.h2>

              <motion.p
                className="mb-8 text-lg text-gray-600"
                variants={fadeInUp}
              >
                Acesse sua plataforma de gestão médica e transforme a
                experiência da sua clínica.
              </motion.p>

              <motion.div className="space-y-4" variants={fadeInUp}>
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 rounded-lg border border-white/20 bg-white/50 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/70"
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="rounded-lg bg-gradient-to-r from-blue-100 to-green-100 p-2">
                      <feature.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Authentication Form */}
        <div className="flex w-full items-center justify-center p-6 lg:w-1/2 lg:p-12">
          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Mobile Logo */}
            <motion.div
              className="mb-8 flex items-center justify-center gap-3 lg:hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-lg bg-gradient-to-r from-blue-600 to-green-600 p-2">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h1 className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-2xl font-bold text-transparent">
                Doctor SaaS
              </h1>
            </motion.div>

            <Card className="border-0 bg-white/80 shadow-2xl backdrop-blur-sm">
              <CardContent className="p-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  {children}
                </motion.div>
              </CardContent>
            </Card>

            {/* Back to Home Link */}
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <Link
                href="/"
                className="text-sm text-gray-600 transition-colors duration-200 hover:text-blue-600"
              >
                ← Voltar para o início
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
