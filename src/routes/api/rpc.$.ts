import { router } from '@/rpc/router'
import { RPCHandler } from '@orpc/server/fetch'
import { createServerFileRoute } from '@tanstack/react-start/server'
import { db } from 'db'

const handler = new RPCHandler(router)

async function handle({ request }: { request: Request }) {
  const { response } = await handler.handle(request, {
    prefix: '/api/rpc',
    context: {
      request,
      db,
    },
  })

  return response ?? new Response('Not Found', { status: 404 })
}

export const ServerRoute = createServerFileRoute('/api/rpc/$').methods({
  HEAD: handle,
  GET: handle,
  POST: handle,
  PUT: handle,
  PATCH: handle,
  DELETE: handle,
})
