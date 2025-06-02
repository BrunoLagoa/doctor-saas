# 🏥 Doctor SaaS

> **Sistema de Gestão Inteligente para Clínicas Médicas**

Uma plataforma SaaS moderna e completa para gestão de clínicas médicas, desenvolvida com Next.js 15, TypeScript e as melhores práticas de desenvolvimento.

![Next.js](https://img.shields.io/badge/Next.js-15.3.2-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-0.44.0-green?style=for-the-badge)

## ✨ Funcionalidades Principais

### 👥 **Gestão de Usuários**

- 🔐 Sistema de autenticação completo com **Better Auth**
- 📧 Verificação de email e recuperação de senha
- 👤 Perfis personalizados para diferentes tipos de usuários

### 🏥 **Gestão de Clínicas**

- 🏢 Cadastro e gerenciamento de múltiplas clínicas
- 👥 Sistema de associação usuário-clínica
- 📊 Dashboard administrativo

### 👨‍⚕️ **Gestão de Médicos**

- 📝 Cadastro completo de profissionais
- 🕐 Configuração de horários de atendimento
- 💰 Definição de preços por consulta
- 🎯 Especialidades médicas
- 📅 Disponibilidade semanal flexível

### 👩‍💼 **Gestão de Pacientes**

- 📋 Cadastro detalhado de pacientes
- 📱 Informações de contato completas
- 🧬 Dados demográficos (gênero, idade)
- 🖼️ Fotos de perfil

### 📅 **Sistema de Agendamentos**

- 🗓️ Agendamento inteligente de consultas
- ⏰ Controle de horários disponíveis
- 🔄 Relacionamentos entre médico-paciente-clínica
- 📊 Histórico completo de consultas

## 🚀 Tecnologias Utilizadas

### **Frontend & Framework**

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca de interface reativa
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS 4** - Framework CSS utilitário

### **UI & Componentes**

- **Radix UI** - Componentes acessíveis e customizáveis
- **Lucide React** - Ícones modernos e elegantes
- **Class Variance Authority** - Variantes de classes CSS
- **React Hook Form** - Gerenciamento de formulários

### **Backend & Banco de Dados**

- **Drizzle ORM** - ORM moderno para TypeScript
- **PostgreSQL** - Banco de dados relacional robusto
- **Better Auth** - Sistema de autenticação completo
- **Zod** - Validação de schemas TypeScript

### **Desenvolvimento & Qualidade**

- **ESLint** - Análise estática de código
- **Prettier** - Formatação automática de código
- **Simple Import Sort** - Organização de imports

## 📋 Pré-requisitos

- **Node.js** 18+
- **PostgreSQL** 14+
- **npm/yarn/pnpm/bun**

## ⚡ Instalação e Configuração

### 1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/doctor-saas.git
cd doctor-saas
```

### 2. **Instale as dependências**

```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

### 3. **Configure as variáveis de ambiente**

```bash
cp .env.example .env.local
```

Configure suas variáveis no arquivo `.env.local`:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/doctor_saas"

# Authentication
NEXT_PUBLIC_APP_URL="http://localhost:3000"
BETTER_AUTH_SECRET="your-secret-key"
```

### 4. **Configure o banco de dados**

```bash
# Aplicar migrations
npx drizzle-kit push

# Abrir Drizzle Studio (opcional)
npx drizzle-kit studio
```

### 5. **Execute o projeto**

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🗂️ Estrutura do Projeto

```
doctor-saas/
├── src/
│   ├── app/                    # App Router (Next.js 15)
│   │   ├── authentication/     # Páginas de autenticação
│   │   ├── clinic-form/        # Formulários de clínica
│   │   ├── layout.tsx          # Layout principal
│   │   └── page.tsx           # Página inicial
│   ├── components/            # Componentes reutilizáveis
│   │   └── ui/               # Componentes de UI base
│   ├── db/                   # Configuração do banco
│   │   ├── schema.ts         # Schema Drizzle
│   │   └── index.ts          # Conexão DB
│   ├── actions/              # Server Actions
│   └── lib/                  # Utilitários e helpers
├── public/                   # Arquivos estáticos
└── ...config files
```

## 🎯 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build e Produção
npm run build        # Build para produção
npm run start        # Inicia servidor de produção

# Qualidade de Código
npm run lint         # Executa ESLint

# Banco de Dados
npx drizzle-kit push     # Aplica mudanças no DB
npx drizzle-kit studio   # Interface visual do DB
```

## 🔄 Fluxo de Desenvolvimento

1. **Feature/Fix** → Implementar funcionalidade
2. **Documentação** → Atualizar README.md
3. **Changelog** → Documentar mudanças
4. **Commit** → `feat: add feature` ou `fix: resolve issue`
5. **Review** → Code review obrigatório

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feat/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'feat: add new feature'`)
4. Push para a branch (`git push origin feat/nova-funcionalidade`)
5. Abra um Pull Request

### 📋 **Padrões de Código**

- ✅ TypeScript (sem `@ts-ignore` sem explicação)
- ✅ Warnings tratados como erros
- ✅ Commits em inglês no formato convencional
- ✅ Documentação atualizada para novas features

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🆘 Suporte

- 📧 **Email**: suporte@doctorsaas.com
- 📚 **Documentação**: [docs.doctorsaas.com](https://docs.doctorsaas.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/seu-usuario/doctor-saas/issues)

---

<div align="center">
  <p>Feito com ❤️ para revolucionar a gestão de clínicas médicas</p>
  <p>
    <a href="#top">⬆️ Voltar ao topo</a>
  </p>
</div>
