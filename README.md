# 🧠 LogTrack

**LogTrack** é um sistema de rastreamento e gerenciamento de logs via API, desenvolvido com Node.js, TypeScript, Express e Prisma.

O objetivo é permitir que diferentes aplicações enviem logs centralizados, que podem ser filtrados, categorizados e futuramente visualizados em um painel React.

---

## ⚙️ Tecnologias Utilizadas
- Node.js + Express
- TypeScript
- PostgreSQL + Prisma ORM
- Docker
- Jest + Supertest (testes automatizados)
- (Futuro) React para visualização dos logs

---

## 📦 Instalação e Execução

```bash
# Clonar o repositório
git clone https://github.com/seuusuario/logtrack.git
cd logtrack

# Instalar dependências
npm install

# Subir banco de dados com Docker
docker-compose up -d

# Rodar migrations
npx prisma migrate dev

# Executar o servidor
npm run dev
