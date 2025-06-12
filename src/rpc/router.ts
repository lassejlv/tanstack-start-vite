import { z } from 'zod/v4'
import { base } from '.'
import { ORPCError } from '@orpc/server'
import { eq } from 'drizzle-orm'
import { userTable } from '@/db/schema'

const schema = z.object({
  name: z.string(),
})

const newUserSchema = z.object({
  email: z.email(),
  password: z.string().min(8).max(64),
})

export const router = {
  hello: base.input(schema).handler(async ({ input, context }) => {
    const { request } = context
    console.log(request.method, request.url)

    return { message: `Hello, ${input.name}!` }
  }),
  users: base.handler(async ({ context }) => {
    try {
      const { db } = context
      const users = await db.query.userTable.findMany()
      return users
    } catch (error) {
      throw new ORPCError('BAD_REQUEST', { message: (error as Error).message || 'Failed to fetch users' })
    }
  }),
  createUser: base.input(newUserSchema).handler(async ({ input, context }) => {
    try {
      const { db } = context
      const { email, password } = input

      const exist = await db.query.userTable.findFirst({ where: eq(userTable.email, email) })
      if (exist) throw new Error('User already exists')

      const passwordHash = await Bun.password.hash(password)
      const newUser = await db.insert(userTable).values({ email, passwordHash }).returning()
      return newUser[0]
    } catch (error) {
      throw new ORPCError('BAD_REQUEST', { message: (error as Error).message || 'Failed to create user' })
    }
  }),
}
