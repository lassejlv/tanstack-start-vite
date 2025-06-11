import { tanstackClient } from '@/rpc/client'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data, isFetching, refetch } = useQuery(tanstackClient.hello.queryOptions({ input: { name: 'World' } }))

  return (
    <div>
      <h1>TanStack Start Starter</h1>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{data && data.message}</p>
          <button onClick={() => refetch()}>Refetch</button>
        </>
      )}
    </div>
  )
}
