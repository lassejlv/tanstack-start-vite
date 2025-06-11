import { z } from 'zod/v4'
import { base } from '.'
import { ORPCError } from '@orpc/server'

const schema = z.object({
  name: z.string(),
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
}
