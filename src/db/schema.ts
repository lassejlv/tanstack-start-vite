import { pgTable, text } from 'drizzle-orm/pg-core'
import { baseTable } from './base-table'

export const userTable = pgTable('users', () => ({
  ...baseTable,
  email: text().unique().notNull(),
  passwordHash: text().notNull(),
}))

export type SelectUser = typeof userTable.$inferSelect
export type InsertUser = typeof userTable.$inferInsert
