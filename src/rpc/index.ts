import { db } from 'db'
import { os } from '@orpc/server'

export const base = os.$context<{ request: Request; db: typeof db }>()
