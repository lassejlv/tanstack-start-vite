FROM oven/bun:latest

WORKDIR /app

COPY package.json bun.lockb* ./

RUN bun install --frozen-lockfile

COPY . .

ARG DATABASE_URL
ARG VITE_APP_URL

RUN bun run build
RUN bun drizzle-kit push

EXPOSE 3000

CMD ["bun", "run", "start"]