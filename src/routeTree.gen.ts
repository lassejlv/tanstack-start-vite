/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createServerRootRoute } from '@tanstack/react-start/server'

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { ServerRoute as HelloServerRouteImport } from './routes/hello'
import { ServerRoute as ApiRpcSplatServerRouteImport } from './routes/api/rpc.$'

const rootServerRouteImport = createServerRootRoute()

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const HelloServerRoute = HelloServerRouteImport.update({
  id: '/hello',
  path: '/hello',
  getParentRoute: () => rootServerRouteImport,
} as any)
const ApiRpcSplatServerRoute = ApiRpcSplatServerRouteImport.update({
  id: '/api/rpc/$',
  path: '/api/rpc/$',
  getParentRoute: () => rootServerRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/'
  id: '__root__' | '/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
}
export interface FileServerRoutesByFullPath {
  '/hello': typeof HelloServerRoute
  '/api/rpc/$': typeof ApiRpcSplatServerRoute
}
export interface FileServerRoutesByTo {
  '/hello': typeof HelloServerRoute
  '/api/rpc/$': typeof ApiRpcSplatServerRoute
}
export interface FileServerRoutesById {
  __root__: typeof rootServerRouteImport
  '/hello': typeof HelloServerRoute
  '/api/rpc/$': typeof ApiRpcSplatServerRoute
}
export interface FileServerRouteTypes {
  fileServerRoutesByFullPath: FileServerRoutesByFullPath
  fullPaths: '/hello' | '/api/rpc/$'
  fileServerRoutesByTo: FileServerRoutesByTo
  to: '/hello' | '/api/rpc/$'
  id: '__root__' | '/hello' | '/api/rpc/$'
  fileServerRoutesById: FileServerRoutesById
}
export interface RootServerRouteChildren {
  HelloServerRoute: typeof HelloServerRoute
  ApiRpcSplatServerRoute: typeof ApiRpcSplatServerRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}
declare module '@tanstack/react-start/server' {
  interface ServerFileRoutesByPath {
    '/hello': {
      id: '/hello'
      path: '/hello'
      fullPath: '/hello'
      preLoaderRoute: typeof HelloServerRouteImport
      parentRoute: typeof rootServerRouteImport
    }
    '/api/rpc/$': {
      id: '/api/rpc/$'
      path: '/api/rpc/$'
      fullPath: '/api/rpc/$'
      preLoaderRoute: typeof ApiRpcSplatServerRouteImport
      parentRoute: typeof rootServerRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
const rootServerRouteChildren: RootServerRouteChildren = {
  HelloServerRoute: HelloServerRoute,
  ApiRpcSplatServerRoute: ApiRpcSplatServerRoute,
}
export const serverRouteTree = rootServerRouteImport
  ._addFileChildren(rootServerRouteChildren)
  ._addFileTypes<FileServerRouteTypes>()
