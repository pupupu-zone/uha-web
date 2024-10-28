/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './core/routes/__root'
import { Route as IndexImport } from './core/routes/index'

// Create Virtual Routes

const IdRouteLazyImport = createFileRoute('/id')()
const IdVerifyEmailLazyImport = createFileRoute('/id/verify-email')()
const IdSetNewPasswordLazyImport = createFileRoute('/id/set-new-password')()
const IdResetPasswordLazyImport = createFileRoute('/id/reset-password')()
const IdRegisterLazyImport = createFileRoute('/id/register')()
const IdLogoutLazyImport = createFileRoute('/id/logout')()
const IdLoginLazyImport = createFileRoute('/id/login')()
const Id2faLazyImport = createFileRoute('/id/2fa')()

// Create/Update Routes

const IdRouteLazyRoute = IdRouteLazyImport.update({
  id: '/id',
  path: '/id',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./core/routes/id/route.lazy').then((d) => d.Route))

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const IdVerifyEmailLazyRoute = IdVerifyEmailLazyImport.update({
  id: '/verify-email',
  path: '/verify-email',
  getParentRoute: () => IdRouteLazyRoute,
} as any).lazy(() =>
  import('./core/routes/id/verify-email.lazy').then((d) => d.Route),
)

const IdSetNewPasswordLazyRoute = IdSetNewPasswordLazyImport.update({
  id: '/set-new-password',
  path: '/set-new-password',
  getParentRoute: () => IdRouteLazyRoute,
} as any).lazy(() =>
  import('./core/routes/id/set-new-password.lazy').then((d) => d.Route),
)

const IdResetPasswordLazyRoute = IdResetPasswordLazyImport.update({
  id: '/reset-password',
  path: '/reset-password',
  getParentRoute: () => IdRouteLazyRoute,
} as any).lazy(() =>
  import('./core/routes/id/reset-password.lazy').then((d) => d.Route),
)

const IdRegisterLazyRoute = IdRegisterLazyImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => IdRouteLazyRoute,
} as any).lazy(() =>
  import('./core/routes/id/register.lazy').then((d) => d.Route),
)

const IdLogoutLazyRoute = IdLogoutLazyImport.update({
  id: '/logout',
  path: '/logout',
  getParentRoute: () => IdRouteLazyRoute,
} as any).lazy(() =>
  import('./core/routes/id/logout.lazy').then((d) => d.Route),
)

const IdLoginLazyRoute = IdLoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => IdRouteLazyRoute,
} as any).lazy(() => import('./core/routes/id/login.lazy').then((d) => d.Route))

const Id2faLazyRoute = Id2faLazyImport.update({
  id: '/2fa',
  path: '/2fa',
  getParentRoute: () => IdRouteLazyRoute,
} as any).lazy(() => import('./core/routes/id/2fa.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/id': {
      id: '/id'
      path: '/id'
      fullPath: '/id'
      preLoaderRoute: typeof IdRouteLazyImport
      parentRoute: typeof rootRoute
    }
    '/id/2fa': {
      id: '/id/2fa'
      path: '/2fa'
      fullPath: '/id/2fa'
      preLoaderRoute: typeof Id2faLazyImport
      parentRoute: typeof IdRouteLazyImport
    }
    '/id/login': {
      id: '/id/login'
      path: '/login'
      fullPath: '/id/login'
      preLoaderRoute: typeof IdLoginLazyImport
      parentRoute: typeof IdRouteLazyImport
    }
    '/id/logout': {
      id: '/id/logout'
      path: '/logout'
      fullPath: '/id/logout'
      preLoaderRoute: typeof IdLogoutLazyImport
      parentRoute: typeof IdRouteLazyImport
    }
    '/id/register': {
      id: '/id/register'
      path: '/register'
      fullPath: '/id/register'
      preLoaderRoute: typeof IdRegisterLazyImport
      parentRoute: typeof IdRouteLazyImport
    }
    '/id/reset-password': {
      id: '/id/reset-password'
      path: '/reset-password'
      fullPath: '/id/reset-password'
      preLoaderRoute: typeof IdResetPasswordLazyImport
      parentRoute: typeof IdRouteLazyImport
    }
    '/id/set-new-password': {
      id: '/id/set-new-password'
      path: '/set-new-password'
      fullPath: '/id/set-new-password'
      preLoaderRoute: typeof IdSetNewPasswordLazyImport
      parentRoute: typeof IdRouteLazyImport
    }
    '/id/verify-email': {
      id: '/id/verify-email'
      path: '/verify-email'
      fullPath: '/id/verify-email'
      preLoaderRoute: typeof IdVerifyEmailLazyImport
      parentRoute: typeof IdRouteLazyImport
    }
  }
}

// Create and export the route tree

interface IdRouteLazyRouteChildren {
  Id2faLazyRoute: typeof Id2faLazyRoute
  IdLoginLazyRoute: typeof IdLoginLazyRoute
  IdLogoutLazyRoute: typeof IdLogoutLazyRoute
  IdRegisterLazyRoute: typeof IdRegisterLazyRoute
  IdResetPasswordLazyRoute: typeof IdResetPasswordLazyRoute
  IdSetNewPasswordLazyRoute: typeof IdSetNewPasswordLazyRoute
  IdVerifyEmailLazyRoute: typeof IdVerifyEmailLazyRoute
}

const IdRouteLazyRouteChildren: IdRouteLazyRouteChildren = {
  Id2faLazyRoute: Id2faLazyRoute,
  IdLoginLazyRoute: IdLoginLazyRoute,
  IdLogoutLazyRoute: IdLogoutLazyRoute,
  IdRegisterLazyRoute: IdRegisterLazyRoute,
  IdResetPasswordLazyRoute: IdResetPasswordLazyRoute,
  IdSetNewPasswordLazyRoute: IdSetNewPasswordLazyRoute,
  IdVerifyEmailLazyRoute: IdVerifyEmailLazyRoute,
}

const IdRouteLazyRouteWithChildren = IdRouteLazyRoute._addFileChildren(
  IdRouteLazyRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/id': typeof IdRouteLazyRouteWithChildren
  '/id/2fa': typeof Id2faLazyRoute
  '/id/login': typeof IdLoginLazyRoute
  '/id/logout': typeof IdLogoutLazyRoute
  '/id/register': typeof IdRegisterLazyRoute
  '/id/reset-password': typeof IdResetPasswordLazyRoute
  '/id/set-new-password': typeof IdSetNewPasswordLazyRoute
  '/id/verify-email': typeof IdVerifyEmailLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/id': typeof IdRouteLazyRouteWithChildren
  '/id/2fa': typeof Id2faLazyRoute
  '/id/login': typeof IdLoginLazyRoute
  '/id/logout': typeof IdLogoutLazyRoute
  '/id/register': typeof IdRegisterLazyRoute
  '/id/reset-password': typeof IdResetPasswordLazyRoute
  '/id/set-new-password': typeof IdSetNewPasswordLazyRoute
  '/id/verify-email': typeof IdVerifyEmailLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/id': typeof IdRouteLazyRouteWithChildren
  '/id/2fa': typeof Id2faLazyRoute
  '/id/login': typeof IdLoginLazyRoute
  '/id/logout': typeof IdLogoutLazyRoute
  '/id/register': typeof IdRegisterLazyRoute
  '/id/reset-password': typeof IdResetPasswordLazyRoute
  '/id/set-new-password': typeof IdSetNewPasswordLazyRoute
  '/id/verify-email': typeof IdVerifyEmailLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/id'
    | '/id/2fa'
    | '/id/login'
    | '/id/logout'
    | '/id/register'
    | '/id/reset-password'
    | '/id/set-new-password'
    | '/id/verify-email'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/id'
    | '/id/2fa'
    | '/id/login'
    | '/id/logout'
    | '/id/register'
    | '/id/reset-password'
    | '/id/set-new-password'
    | '/id/verify-email'
  id:
    | '__root__'
    | '/'
    | '/id'
    | '/id/2fa'
    | '/id/login'
    | '/id/logout'
    | '/id/register'
    | '/id/reset-password'
    | '/id/set-new-password'
    | '/id/verify-email'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  IdRouteLazyRoute: typeof IdRouteLazyRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  IdRouteLazyRoute: IdRouteLazyRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/id"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/id": {
      "filePath": "id/route.lazy.tsx",
      "children": [
        "/id/2fa",
        "/id/login",
        "/id/logout",
        "/id/register",
        "/id/reset-password",
        "/id/set-new-password",
        "/id/verify-email"
      ]
    },
    "/id/2fa": {
      "filePath": "id/2fa.lazy.tsx",
      "parent": "/id"
    },
    "/id/login": {
      "filePath": "id/login.lazy.tsx",
      "parent": "/id"
    },
    "/id/logout": {
      "filePath": "id/logout.lazy.tsx",
      "parent": "/id"
    },
    "/id/register": {
      "filePath": "id/register.lazy.tsx",
      "parent": "/id"
    },
    "/id/reset-password": {
      "filePath": "id/reset-password.lazy.tsx",
      "parent": "/id"
    },
    "/id/set-new-password": {
      "filePath": "id/set-new-password.lazy.tsx",
      "parent": "/id"
    },
    "/id/verify-email": {
      "filePath": "id/verify-email.lazy.tsx",
      "parent": "/id"
    }
  }
}
ROUTE_MANIFEST_END */
