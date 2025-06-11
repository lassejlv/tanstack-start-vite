import { pgTable, text } from 'drizzle-orm/pg-core'
import { baseTable } from './base-table'

export const users = pgTable('users', () => ({
  ...baseTable,
  email: text().unique().notNull(),
  passwordHash: text().notNull(),
}))

export type SelectUser = typeof users.$inferSelect
export type InsertUser = typeof users.$inferInsert
