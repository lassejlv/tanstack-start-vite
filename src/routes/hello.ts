import { createServerFileRoute } from '@tanstack/react-start/server'

export const ServerRoute = createServerFileRoute('/hello').methods({
  GET: async ({ request }) => {
    return Response.json({
      message: 'Hello, world!',
      url: request.url,
      headers: Object.fromEntries(request.headers.entries()),
      method: request.method,
      time: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'unknown',
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      forwarded: request.headers.get('x-forwarded-for') || 'unknown',
      realIp: request.headers.get('x-real-ip') || 'unknown',
      connection: request.headers.get('connection') || 'unknown',
      accept: request.headers.get('accept') || 'unknown',
      acceptLanguage: request.headers.get('accept-language') || 'unknown',
      acceptEncoding: request.headers.get('accept-encoding') || 'unknown',
      contentType: request.headers.get('content-type') || 'unknown',
      contentLength: request.headers.get('content-length') || 'unknown',
      host: request.headers.get('host') || 'unknown',
      origin: request.headers.get('origin') || 'unknown',
      referer: request.headers.get('referer') || 'unknown',
      authorization: request.headers.get('authorization') || 'unknown',
      cookie: request.headers.get('cookie') || 'unknown',
    })
  },
})
