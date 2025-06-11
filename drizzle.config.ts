export default {
  schema: 'src/db/schema.ts',
  out: 'migrations',
  dialect: 'postgresql',
  casing: 'snake_case',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
} satisfies import('drizzle-kit').Config
