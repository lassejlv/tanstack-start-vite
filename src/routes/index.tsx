import { Button } from '@/components/ui/button'
import { client, tanstackClient } from '@/rpc/client'
import { useMutation, useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [showCreateUserForm, setShowCreateUserForm] = useState(false)
  const { data, isFetching, refetch } = useQuery({
    queryKey: ['hello'],
    queryFn: async () => await client.hello({ name: 'TanStack Start Starter' }),
  })

  const { data: users, isFetching: isFetchingUsers } = useQuery({
    queryKey: ['users'],
    queryFn: async () => await client.users(),
  })

  const createUser = useMutation({
    mutationFn: async (newUser: { email: string; password: string }) => {
      return await client.createUser(newUser)
    },
  })

  return (
    <div>
      <h1>TanStack Start Starter</h1>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{data && data.message}</p>
          <Button onClick={() => refetch()}>Refetch</Button>
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

      <Button onClick={() => setShowCreateUserForm(!showCreateUserForm)}>{showCreateUserForm ? 'Hide Create User Form' : 'Show Create User Form'}</Button>
      {showCreateUserForm && (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            const email = formData.get('email') as string
            const password = formData.get('password') as string
            createUser.mutate({ email, password })
          }}
        >
          <div>
            <label>
              Email:
              <input type='email' name='email' required />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input type='password' name='password' required />
            </label>
          </div>
          <Button type='submit'>Create User</Button>
        </form>
      )}

      {createUser.isPending && <p>Creating user...</p>}
      {createUser.isError && <p>Error: {(createUser.error as Error).message}</p>}
      {createUser.isSuccess && createUser.data && (
        <>
          <pre className='mt-4'>{JSON.stringify(createUser.data, null, 2)}</pre>
          <p>User created successfully!</p>
        </>
      )}
    </div>
  )
}
