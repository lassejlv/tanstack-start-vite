import { createORPCClient } from '@orpc/client'
import { RPCLink } from '@orpc/client/fetch'
import { RouterClient } from '@orpc/server'
import { createTanstackQueryUtils } from '@orpc/tanstack-query'
import { router } from './router'

const link = new RPCLink({
  url: `${import.meta.env.VITE_APP_URL}/api/rpc`,
})

export const client: RouterClient<typeof router> = createORPCClient(link)
export const tanstackClient = createTanstackQueryUtils(client)
