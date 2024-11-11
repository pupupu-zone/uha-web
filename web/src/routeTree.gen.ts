/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './core/routes/__root'
import { Route as IdRouteImport } from './core/routes/_id/route'
import { Route as AuthGuardRouteImport } from './core/routes/_auth-guard/route'
import { Route as IndexImport } from './core/routes/index'
import { Route as IdLoginImport } from './core/routes/_id/login'
import { Route as IdResetPasswordRouteImport } from './core/routes/_id/reset-password/route'
import { Route as IdRegisterRouteImport } from './core/routes/_id/register/route'

// Create Virtual Routes

const AuthGuardSubscriptionsLazyImport = createFileRoute(
  '/_auth-guard/subscriptions',
)()
const AuthGuardProfileLazyImport = createFileRoute('/_auth-guard/profile')()
const AuthGuardLogoutLazyImport = createFileRoute('/_auth-guard/logout')()
const AuthGuardLibraryLazyImport = createFileRoute('/_auth-guard/library')()
const AuthGuardAnalyticsLazyImport = createFileRoute('/_auth-guard/analytics')()
const IdResetPasswordVerifyLazyImport = createFileRoute(
  '/_id/reset-password/verify',
)()
const IdResetPasswordInitLazyImport = createFileRoute(
  '/_id/reset-password/init',
)()
const IdRegisterVerifyLazyImport = createFileRoute('/_id/register/verify')()
const IdRegisterInitLazyImport = createFileRoute('/_id/register/init')()

// Create/Update Routes

const IdRouteRoute = IdRouteImport.update({
  id: '/_id',
  getParentRoute: () => rootRoute,
} as any)

const AuthGuardRouteRoute = AuthGuardRouteImport.update({
  id: '/_auth-guard',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthGuardSubscriptionsLazyRoute = AuthGuardSubscriptionsLazyImport.update(
  {
    id: '/subscriptions',
    path: '/subscriptions',
    getParentRoute: () => AuthGuardRouteRoute,
  } as any,
).lazy(() =>
  import('./core/routes/_auth-guard/subscriptions.lazy').then((d) => d.Route),
)

const AuthGuardProfileLazyRoute = AuthGuardProfileLazyImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => AuthGuardRouteRoute,
} as any).lazy(() =>
  import('./core/routes/_auth-guard/profile.lazy').then((d) => d.Route),
)

const AuthGuardLogoutLazyRoute = AuthGuardLogoutLazyImport.update({
  id: '/logout',
  path: '/logout',
  getParentRoute: () => AuthGuardRouteRoute,
} as any).lazy(() =>
  import('./core/routes/_auth-guard/logout.lazy').then((d) => d.Route),
)

const AuthGuardLibraryLazyRoute = AuthGuardLibraryLazyImport.update({
  id: '/library',
  path: '/library',
  getParentRoute: () => AuthGuardRouteRoute,
} as any).lazy(() =>
  import('./core/routes/_auth-guard/library.lazy').then((d) => d.Route),
)

const AuthGuardAnalyticsLazyRoute = AuthGuardAnalyticsLazyImport.update({
  id: '/analytics',
  path: '/analytics',
  getParentRoute: () => AuthGuardRouteRoute,
} as any).lazy(() =>
  import('./core/routes/_auth-guard/analytics.lazy').then((d) => d.Route),
)

const IdLoginRoute = IdLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => IdRouteRoute,
} as any)

const IdResetPasswordRouteRoute = IdResetPasswordRouteImport.update({
  id: '/reset-password',
  path: '/reset-password',
  getParentRoute: () => IdRouteRoute,
} as any)

const IdRegisterRouteRoute = IdRegisterRouteImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => IdRouteRoute,
} as any)

const IdResetPasswordVerifyLazyRoute = IdResetPasswordVerifyLazyImport.update({
  id: '/verify',
  path: '/verify',
  getParentRoute: () => IdResetPasswordRouteRoute,
} as any).lazy(() =>
  import('./core/routes/_id/reset-password/verify.lazy').then((d) => d.Route),
)

const IdResetPasswordInitLazyRoute = IdResetPasswordInitLazyImport.update({
  id: '/init',
  path: '/init',
  getParentRoute: () => IdResetPasswordRouteRoute,
} as any).lazy(() =>
  import('./core/routes/_id/reset-password/init.lazy').then((d) => d.Route),
)

const IdRegisterVerifyLazyRoute = IdRegisterVerifyLazyImport.update({
  id: '/verify',
  path: '/verify',
  getParentRoute: () => IdRegisterRouteRoute,
} as any).lazy(() =>
  import('./core/routes/_id/register/verify.lazy').then((d) => d.Route),
)

const IdRegisterInitLazyRoute = IdRegisterInitLazyImport.update({
  id: '/init',
  path: '/init',
  getParentRoute: () => IdRegisterRouteRoute,
} as any).lazy(() =>
  import('./core/routes/_id/register/init.lazy').then((d) => d.Route),
)

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
    '/_auth-guard': {
      id: '/_auth-guard'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthGuardRouteImport
      parentRoute: typeof rootRoute
    }
    '/_id': {
      id: '/_id'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof IdRouteImport
      parentRoute: typeof rootRoute
    }
    '/_id/register': {
      id: '/_id/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof IdRegisterRouteImport
      parentRoute: typeof IdRouteImport
    }
    '/_id/reset-password': {
      id: '/_id/reset-password'
      path: '/reset-password'
      fullPath: '/reset-password'
      preLoaderRoute: typeof IdResetPasswordRouteImport
      parentRoute: typeof IdRouteImport
    }
    '/_id/login': {
      id: '/_id/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof IdLoginImport
      parentRoute: typeof IdRouteImport
    }
    '/_auth-guard/analytics': {
      id: '/_auth-guard/analytics'
      path: '/analytics'
      fullPath: '/analytics'
      preLoaderRoute: typeof AuthGuardAnalyticsLazyImport
      parentRoute: typeof AuthGuardRouteImport
    }
    '/_auth-guard/library': {
      id: '/_auth-guard/library'
      path: '/library'
      fullPath: '/library'
      preLoaderRoute: typeof AuthGuardLibraryLazyImport
      parentRoute: typeof AuthGuardRouteImport
    }
    '/_auth-guard/logout': {
      id: '/_auth-guard/logout'
      path: '/logout'
      fullPath: '/logout'
      preLoaderRoute: typeof AuthGuardLogoutLazyImport
      parentRoute: typeof AuthGuardRouteImport
    }
    '/_auth-guard/profile': {
      id: '/_auth-guard/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof AuthGuardProfileLazyImport
      parentRoute: typeof AuthGuardRouteImport
    }
    '/_auth-guard/subscriptions': {
      id: '/_auth-guard/subscriptions'
      path: '/subscriptions'
      fullPath: '/subscriptions'
      preLoaderRoute: typeof AuthGuardSubscriptionsLazyImport
      parentRoute: typeof AuthGuardRouteImport
    }
    '/_id/register/init': {
      id: '/_id/register/init'
      path: '/init'
      fullPath: '/register/init'
      preLoaderRoute: typeof IdRegisterInitLazyImport
      parentRoute: typeof IdRegisterRouteImport
    }
    '/_id/register/verify': {
      id: '/_id/register/verify'
      path: '/verify'
      fullPath: '/register/verify'
      preLoaderRoute: typeof IdRegisterVerifyLazyImport
      parentRoute: typeof IdRegisterRouteImport
    }
    '/_id/reset-password/init': {
      id: '/_id/reset-password/init'
      path: '/init'
      fullPath: '/reset-password/init'
      preLoaderRoute: typeof IdResetPasswordInitLazyImport
      parentRoute: typeof IdResetPasswordRouteImport
    }
    '/_id/reset-password/verify': {
      id: '/_id/reset-password/verify'
      path: '/verify'
      fullPath: '/reset-password/verify'
      preLoaderRoute: typeof IdResetPasswordVerifyLazyImport
      parentRoute: typeof IdResetPasswordRouteImport
    }
  }
}

// Create and export the route tree

interface AuthGuardRouteRouteChildren {
  AuthGuardAnalyticsLazyRoute: typeof AuthGuardAnalyticsLazyRoute
  AuthGuardLibraryLazyRoute: typeof AuthGuardLibraryLazyRoute
  AuthGuardLogoutLazyRoute: typeof AuthGuardLogoutLazyRoute
  AuthGuardProfileLazyRoute: typeof AuthGuardProfileLazyRoute
  AuthGuardSubscriptionsLazyRoute: typeof AuthGuardSubscriptionsLazyRoute
}

const AuthGuardRouteRouteChildren: AuthGuardRouteRouteChildren = {
  AuthGuardAnalyticsLazyRoute: AuthGuardAnalyticsLazyRoute,
  AuthGuardLibraryLazyRoute: AuthGuardLibraryLazyRoute,
  AuthGuardLogoutLazyRoute: AuthGuardLogoutLazyRoute,
  AuthGuardProfileLazyRoute: AuthGuardProfileLazyRoute,
  AuthGuardSubscriptionsLazyRoute: AuthGuardSubscriptionsLazyRoute,
}

const AuthGuardRouteRouteWithChildren = AuthGuardRouteRoute._addFileChildren(
  AuthGuardRouteRouteChildren,
)

interface IdRegisterRouteRouteChildren {
  IdRegisterInitLazyRoute: typeof IdRegisterInitLazyRoute
  IdRegisterVerifyLazyRoute: typeof IdRegisterVerifyLazyRoute
}

const IdRegisterRouteRouteChildren: IdRegisterRouteRouteChildren = {
  IdRegisterInitLazyRoute: IdRegisterInitLazyRoute,
  IdRegisterVerifyLazyRoute: IdRegisterVerifyLazyRoute,
}

const IdRegisterRouteRouteWithChildren = IdRegisterRouteRoute._addFileChildren(
  IdRegisterRouteRouteChildren,
)

interface IdResetPasswordRouteRouteChildren {
  IdResetPasswordInitLazyRoute: typeof IdResetPasswordInitLazyRoute
  IdResetPasswordVerifyLazyRoute: typeof IdResetPasswordVerifyLazyRoute
}

const IdResetPasswordRouteRouteChildren: IdResetPasswordRouteRouteChildren = {
  IdResetPasswordInitLazyRoute: IdResetPasswordInitLazyRoute,
  IdResetPasswordVerifyLazyRoute: IdResetPasswordVerifyLazyRoute,
}

const IdResetPasswordRouteRouteWithChildren =
  IdResetPasswordRouteRoute._addFileChildren(IdResetPasswordRouteRouteChildren)

interface IdRouteRouteChildren {
  IdRegisterRouteRoute: typeof IdRegisterRouteRouteWithChildren
  IdResetPasswordRouteRoute: typeof IdResetPasswordRouteRouteWithChildren
  IdLoginRoute: typeof IdLoginRoute
}

const IdRouteRouteChildren: IdRouteRouteChildren = {
  IdRegisterRouteRoute: IdRegisterRouteRouteWithChildren,
  IdResetPasswordRouteRoute: IdResetPasswordRouteRouteWithChildren,
  IdLoginRoute: IdLoginRoute,
}

const IdRouteRouteWithChildren =
  IdRouteRoute._addFileChildren(IdRouteRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof IdRouteRouteWithChildren
  '/register': typeof IdRegisterRouteRouteWithChildren
  '/reset-password': typeof IdResetPasswordRouteRouteWithChildren
  '/login': typeof IdLoginRoute
  '/analytics': typeof AuthGuardAnalyticsLazyRoute
  '/library': typeof AuthGuardLibraryLazyRoute
  '/logout': typeof AuthGuardLogoutLazyRoute
  '/profile': typeof AuthGuardProfileLazyRoute
  '/subscriptions': typeof AuthGuardSubscriptionsLazyRoute
  '/register/init': typeof IdRegisterInitLazyRoute
  '/register/verify': typeof IdRegisterVerifyLazyRoute
  '/reset-password/init': typeof IdResetPasswordInitLazyRoute
  '/reset-password/verify': typeof IdResetPasswordVerifyLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof IdRouteRouteWithChildren
  '/register': typeof IdRegisterRouteRouteWithChildren
  '/reset-password': typeof IdResetPasswordRouteRouteWithChildren
  '/login': typeof IdLoginRoute
  '/analytics': typeof AuthGuardAnalyticsLazyRoute
  '/library': typeof AuthGuardLibraryLazyRoute
  '/logout': typeof AuthGuardLogoutLazyRoute
  '/profile': typeof AuthGuardProfileLazyRoute
  '/subscriptions': typeof AuthGuardSubscriptionsLazyRoute
  '/register/init': typeof IdRegisterInitLazyRoute
  '/register/verify': typeof IdRegisterVerifyLazyRoute
  '/reset-password/init': typeof IdResetPasswordInitLazyRoute
  '/reset-password/verify': typeof IdResetPasswordVerifyLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_auth-guard': typeof AuthGuardRouteRouteWithChildren
  '/_id': typeof IdRouteRouteWithChildren
  '/_id/register': typeof IdRegisterRouteRouteWithChildren
  '/_id/reset-password': typeof IdResetPasswordRouteRouteWithChildren
  '/_id/login': typeof IdLoginRoute
  '/_auth-guard/analytics': typeof AuthGuardAnalyticsLazyRoute
  '/_auth-guard/library': typeof AuthGuardLibraryLazyRoute
  '/_auth-guard/logout': typeof AuthGuardLogoutLazyRoute
  '/_auth-guard/profile': typeof AuthGuardProfileLazyRoute
  '/_auth-guard/subscriptions': typeof AuthGuardSubscriptionsLazyRoute
  '/_id/register/init': typeof IdRegisterInitLazyRoute
  '/_id/register/verify': typeof IdRegisterVerifyLazyRoute
  '/_id/reset-password/init': typeof IdResetPasswordInitLazyRoute
  '/_id/reset-password/verify': typeof IdResetPasswordVerifyLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/register'
    | '/reset-password'
    | '/login'
    | '/analytics'
    | '/library'
    | '/logout'
    | '/profile'
    | '/subscriptions'
    | '/register/init'
    | '/register/verify'
    | '/reset-password/init'
    | '/reset-password/verify'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/register'
    | '/reset-password'
    | '/login'
    | '/analytics'
    | '/library'
    | '/logout'
    | '/profile'
    | '/subscriptions'
    | '/register/init'
    | '/register/verify'
    | '/reset-password/init'
    | '/reset-password/verify'
  id:
    | '__root__'
    | '/'
    | '/_auth-guard'
    | '/_id'
    | '/_id/register'
    | '/_id/reset-password'
    | '/_id/login'
    | '/_auth-guard/analytics'
    | '/_auth-guard/library'
    | '/_auth-guard/logout'
    | '/_auth-guard/profile'
    | '/_auth-guard/subscriptions'
    | '/_id/register/init'
    | '/_id/register/verify'
    | '/_id/reset-password/init'
    | '/_id/reset-password/verify'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthGuardRouteRoute: typeof AuthGuardRouteRouteWithChildren
  IdRouteRoute: typeof IdRouteRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthGuardRouteRoute: AuthGuardRouteRouteWithChildren,
  IdRouteRoute: IdRouteRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_auth-guard",
        "/_id"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_auth-guard": {
      "filePath": "_auth-guard/route.tsx",
      "children": [
        "/_auth-guard/analytics",
        "/_auth-guard/library",
        "/_auth-guard/logout",
        "/_auth-guard/profile",
        "/_auth-guard/subscriptions"
      ]
    },
    "/_id": {
      "filePath": "_id/route.tsx",
      "children": [
        "/_id/register",
        "/_id/reset-password",
        "/_id/login"
      ]
    },
    "/_id/register": {
      "filePath": "_id/register/route.tsx",
      "parent": "/_id",
      "children": [
        "/_id/register/init",
        "/_id/register/verify"
      ]
    },
    "/_id/reset-password": {
      "filePath": "_id/reset-password/route.tsx",
      "parent": "/_id",
      "children": [
        "/_id/reset-password/init",
        "/_id/reset-password/verify"
      ]
    },
    "/_id/login": {
      "filePath": "_id/login.tsx",
      "parent": "/_id"
    },
    "/_auth-guard/analytics": {
      "filePath": "_auth-guard/analytics.lazy.tsx",
      "parent": "/_auth-guard"
    },
    "/_auth-guard/library": {
      "filePath": "_auth-guard/library.lazy.tsx",
      "parent": "/_auth-guard"
    },
    "/_auth-guard/logout": {
      "filePath": "_auth-guard/logout.lazy.tsx",
      "parent": "/_auth-guard"
    },
    "/_auth-guard/profile": {
      "filePath": "_auth-guard/profile.lazy.tsx",
      "parent": "/_auth-guard"
    },
    "/_auth-guard/subscriptions": {
      "filePath": "_auth-guard/subscriptions.lazy.tsx",
      "parent": "/_auth-guard"
    },
    "/_id/register/init": {
      "filePath": "_id/register/init.lazy.tsx",
      "parent": "/_id/register"
    },
    "/_id/register/verify": {
      "filePath": "_id/register/verify.lazy.tsx",
      "parent": "/_id/register"
    },
    "/_id/reset-password/init": {
      "filePath": "_id/reset-password/init.lazy.tsx",
      "parent": "/_id/reset-password"
    },
    "/_id/reset-password/verify": {
      "filePath": "_id/reset-password/verify.lazy.tsx",
      "parent": "/_id/reset-password"
    }
  }
}
ROUTE_MANIFEST_END */
