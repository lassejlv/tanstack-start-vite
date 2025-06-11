import { tanstackClient } from '@/rpc/client'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data, isFetching, refetch } = useQuery(tanstackClient.hello.queryOptions({ input: { name: 'World' } }))

  const { data: users, isFetching: isFetchingUsers } = useQuery(tanstackClient.users.queryOptions())

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

      <h2>Users</h2>

      {isFetchingUsers ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users?.map((user) => (
            <li key={user.id}>
              {user.email} - {user.createdAt.toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
