import { z } from 'zod/v4'
import { base } from '.'

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
    const { db } = context
    const users = await db.query.users.findMany()
    return users
  }),
}
