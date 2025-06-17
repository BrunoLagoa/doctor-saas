"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Calendar,
  ChevronRight,
  Heart,
  Shield,
  Stethoscope,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
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
      icon: Calendar,
      title: "Gestão de Agendamentos",
      description:
        "Organize consultas de forma eficiente com sistema inteligente de horários.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Users,
      title: "Controle de Pacientes",
      description:
        "Cadastre e gerencie informações completas dos seus pacientes.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Stethoscope,
      title: "Gestão de Médicos",
      description:
        "Controle especialidades, horários e disponibilidade dos profissionais.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Activity,
      title: "Dashboard Analítico",
      description:
        "Acompanhe métricas e performance da sua clínica em tempo real.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Dados protegidos com criptografia e autenticação segura.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Zap,
      title: "Rápido e Intuitivo",
      description:
        "Interface moderna e responsiva para uma experiência excepcional.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Ana Silva",
      specialty: "Cardiologista",
      text: "O sistema revolucionou a gestão da minha clínica. Muito mais organizado!",
      initials: "AS",
    },
    {
      name: "Dr. Carlos Santos",
      specialty: "Pediatra",
      text: "Interface intuitiva e funcionalidades que realmente fazem a diferença.",
      initials: "CS",
    },
    {
      name: "Dra. Maria Costa",
      specialty: "Dermatologista",
      text: "Agendamentos nunca foram tão simples. Recomendo para todos os colegas!",
      initials: "MC",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <motion.header
        className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="rounded-lg bg-gradient-to-r from-blue-600 to-green-600 p-2">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h1 className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-2xl font-bold text-transparent">
                Doctor SaaS
              </h1>
            </motion.div>

            <div className="flex items-center gap-4">
              <Link href="/authentication">
                <Button variant="ghost" className="hover:bg-blue-50">
                  Entrar
                </Button>
              </Link>
              <Link href="/authentication">
                <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                  Começar Agora
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
                🚀 Gestão Médica Inteligente
              </Badge>
            </motion.div>

            <motion.h1
              className="mb-6 text-5xl leading-tight font-bold md:text-7xl"
              variants={fadeInUp}
            >
              Transforme sua{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                clínica
              </span>{" "}
              em um centro de{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                excelência
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto mb-8 max-w-2xl text-xl text-gray-600"
              variants={fadeInUp}
            >
              Sistema completo de gestão para clínicas e consultórios médicos.
              Agende consultas, gerencie pacientes e acompanhe o crescimento do
              seu negócio.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
              variants={fadeInUp}
            >
              <Link href="/authentication">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-green-600 px-8 py-4 text-lg hover:from-blue-700 hover:to-green-700"
                >
                  Teste Grátis por 30 dias
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              {/* <Button
                size="lg"
                variant="outline"
                className="border-gray-300 px-8 py-4 text-lg hover:bg-gray-50"
              >
                Ver Demonstração
              </Button> */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-4xl font-bold">
              Tudo que você precisa para{" "}
              <span className="text-blue-600">gerenciar sua clínica</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Funcionalidades completas e integradas para otimizar sua rotina
              médica
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="group h-full border-0 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <CardHeader className="pb-4 text-center">
                    <div
                      className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${feature.color} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl transition-colors group-hover:text-blue-600">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-4xl font-bold">
              O que nossos <span className="text-green-600">médicos</span> dizem
            </h2>
            <p className="text-xl text-gray-600">
              Junte-se a centenas de profissionais que confiam no Doctor SaaS
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-0 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="p-6">
                    <p className="mb-6 leading-relaxed text-gray-600 italic">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-green-500 font-semibold text-white">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">
                          {testimonial.specialty}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-4xl font-bold text-white">
              Pronto para revolucionar sua clínica?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
              Comece hoje mesmo e veja como nossa plataforma pode transformar a
              gestão do seu consultório médico.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/authentication">
                <Button
                  size="lg"
                  className="bg-white px-8 py-4 text-lg font-semibold text-blue-600 hover:bg-gray-100"
                >
                  Começar Teste Grátis
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="text-secondary bg-transparent px-8 py-4 text-lg hover:bg-white/10"
              >
                Falar com Especialista
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-6 py-12 text-gray-300">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 flex items-center gap-2 md:mb-0">
              <div className="rounded-lg bg-gradient-to-r from-blue-600 to-green-600 p-2">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Doctor SaaS</span>
            </div>
            <p className="text-center md:text-right">
              © 2024 Doctor SaaS. Transformando a gestão médica.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
