/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SearchImport } from './routes/search'
import { Route as ProfileImport } from './routes/profile'
import { Route as LoginImport } from './routes/login'
import { Route as AuthenticationImport } from './routes/_authentication'
import { Route as PokemonsRouteImport } from './routes/pokemons/route'
import { Route as IndexImport } from './routes/index'
import { Route as TodosListIdsIndexImport } from './routes/todos-list-ids/index'
import { Route as PostTodoIndexImport } from './routes/post-todo/index'
import { Route as PokemonIdpmImport } from './routes/pokemon/$idpm'
import { Route as TodoListTodoListImport } from './routes/_todo-list/todo-list'
import { Route as AuthenticationSettingsImport } from './routes/_authentication/settings'
import { Route as AuthenticationDashboardImport } from './routes/_authentication/dashboard'

// Create/Update Routes

const SearchRoute = SearchImport.update({
  path: '/search',
  getParentRoute: () => rootRoute,
} as any)

const ProfileRoute = ProfileImport.update({
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticationRoute = AuthenticationImport.update({
  id: '/_authentication',
  getParentRoute: () => rootRoute,
} as any)

const PokemonsRouteRoute = PokemonsRouteImport.update({
  path: '/pokemons',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const TodosListIdsIndexRoute = TodosListIdsIndexImport.update({
  path: '/todos-list-ids/',
  getParentRoute: () => rootRoute,
} as any)

const PostTodoIndexRoute = PostTodoIndexImport.update({
  path: '/post-todo/',
  getParentRoute: () => rootRoute,
} as any)

const PokemonIdpmRoute = PokemonIdpmImport.update({
  path: '/pokemon/$idpm',
  getParentRoute: () => rootRoute,
} as any)

const TodoListTodoListRoute = TodoListTodoListImport.update({
  path: '/todo-list',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticationSettingsRoute = AuthenticationSettingsImport.update({
  path: '/settings',
  getParentRoute: () => AuthenticationRoute,
} as any)

const AuthenticationDashboardRoute = AuthenticationDashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => AuthenticationRoute,
} as any)

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
    '/pokemons': {
      id: '/pokemons'
      path: '/pokemons'
      fullPath: '/pokemons'
      preLoaderRoute: typeof PokemonsRouteImport
      parentRoute: typeof rootRoute
    }
    '/_authentication': {
      id: '/_authentication'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticationImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      id: '/search'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchImport
      parentRoute: typeof rootRoute
    }
    '/_authentication/dashboard': {
      id: '/_authentication/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof AuthenticationDashboardImport
      parentRoute: typeof AuthenticationImport
    }
    '/_authentication/settings': {
      id: '/_authentication/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof AuthenticationSettingsImport
      parentRoute: typeof AuthenticationImport
    }
    '/_todo-list/todo-list': {
      id: '/_todo-list/todo-list'
      path: '/todo-list'
      fullPath: '/todo-list'
      preLoaderRoute: typeof TodoListTodoListImport
      parentRoute: typeof rootRoute
    }
    '/pokemon/$idpm': {
      id: '/pokemon/$idpm'
      path: '/pokemon/$idpm'
      fullPath: '/pokemon/$idpm'
      preLoaderRoute: typeof PokemonIdpmImport
      parentRoute: typeof rootRoute
    }
    '/post-todo/': {
      id: '/post-todo/'
      path: '/post-todo'
      fullPath: '/post-todo'
      preLoaderRoute: typeof PostTodoIndexImport
      parentRoute: typeof rootRoute
    }
    '/todos-list-ids/': {
      id: '/todos-list-ids/'
      path: '/todos-list-ids'
      fullPath: '/todos-list-ids'
      preLoaderRoute: typeof TodosListIdsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  PokemonsRouteRoute,
  AuthenticationRoute: AuthenticationRoute.addChildren({
    AuthenticationDashboardRoute,
    AuthenticationSettingsRoute,
  }),
  LoginRoute,
  ProfileRoute,
  SearchRoute,
  TodoListTodoListRoute,
  PokemonIdpmRoute,
  PostTodoIndexRoute,
  TodosListIdsIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/pokemons",
        "/_authentication",
        "/login",
        "/profile",
        "/search",
        "/_todo-list/todo-list",
        "/pokemon/$idpm",
        "/post-todo/",
        "/todos-list-ids/"
      ]
    },
    "/": {
      "filePath": "index.jsx"
    },
    "/pokemons": {
      "filePath": "pokemons/route.jsx"
    },
    "/_authentication": {
      "filePath": "_authentication.jsx",
      "children": [
        "/_authentication/dashboard",
        "/_authentication/settings"
      ]
    },
    "/login": {
      "filePath": "login.jsx"
    },
    "/profile": {
      "filePath": "profile.jsx"
    },
    "/search": {
      "filePath": "search.jsx"
    },
    "/_authentication/dashboard": {
      "filePath": "_authentication/dashboard.jsx",
      "parent": "/_authentication"
    },
    "/_authentication/settings": {
      "filePath": "_authentication/settings.jsx",
      "parent": "/_authentication"
    },
    "/_todo-list/todo-list": {
      "filePath": "_todo-list/todo-list.jsx"
    },
    "/pokemon/$idpm": {
      "filePath": "pokemon/$idpm.jsx"
    },
    "/post-todo/": {
      "filePath": "post-todo/index.jsx"
    },
    "/todos-list-ids/": {
      "filePath": "todos-list-ids/index.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
