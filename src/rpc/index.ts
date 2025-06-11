import { db } from 'prisma'
import { os } from '@orpc/server'

export const base = os.$context<{ request: Request; db: typeof db }>()
