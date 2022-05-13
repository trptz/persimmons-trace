import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './articles'
import type { Methods as Methods1 } from './articles/_id@string'
import type { Methods as Methods2 } from './articles/count'
import type { Methods as Methods3 } from './auth/_provider@string/callback'
import type { Methods as Methods4 } from './auth/email-confirmation'
import type { Methods as Methods5 } from './auth/forgot-password'
import type { Methods as Methods6 } from './auth/local'
import type { Methods as Methods7 } from './auth/local/register'
import type { Methods as Methods8 } from './auth/reset-password'
import type { Methods as Methods9 } from './auth/send-email-confirmation'
import type { Methods as Methods10 } from './categories'
import type { Methods as Methods11 } from './categories/_id@string'
import type { Methods as Methods12 } from './categories/_slug@string'
import type { Methods as Methods13 } from './categories/count'
import type { Methods as Methods14 } from './connect/_any'
import type { Methods as Methods15 } from './email'
import type { Methods as Methods16 } from './email/settings'
import type { Methods as Methods17 } from './email/test'
import type { Methods as Methods18 } from './global'
import type { Methods as Methods19 } from './homepage'
import type { Methods as Methods20 } from './upload'
import type { Methods as Methods21 } from './upload/files'
import type { Methods as Methods22 } from './upload/files/_id@string'
import type { Methods as Methods23 } from './upload/files/count'
import type { Methods as Methods24 } from './upload/search/_id@string'
import type { Methods as Methods25 } from './users'
import type { Methods as Methods26 } from './users/_id@string'
import type { Methods as Methods27 } from './users/me'
import type { Methods as Methods28 } from './users-permissions/roles'
import type { Methods as Methods29 } from './users-permissions/roles/_id@string'
import type { Methods as Methods30 } from './users-permissions/roles/_role@string'
import type { Methods as Methods31 } from './users-permissions/search/_id@string'
import type { Methods as Methods32 } from './writers'
import type { Methods as Methods33 } from './writers/_id@string'
import type { Methods as Methods34 } from './writers/count'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1337' : baseURL).replace(/\/$/, '')
  const PATH0 = '/articles'
  const PATH1 = '/articles/count'
  const PATH2 = '/auth'
  const PATH3 = '/callback'
  const PATH4 = '/auth/email-confirmation'
  const PATH5 = '/auth/forgot-password'
  const PATH6 = '/auth/local'
  const PATH7 = '/auth/local/register'
  const PATH8 = '/auth/reset-password'
  const PATH9 = '/auth/send-email-confirmation'
  const PATH10 = '/categories'
  const PATH11 = '/categories/count'
  const PATH12 = '/connect'
  const PATH13 = '/email'
  const PATH14 = '/email/settings'
  const PATH15 = '/email/test'
  const PATH16 = '/global'
  const PATH17 = '/homepage'
  const PATH18 = '/upload'
  const PATH19 = '/upload/files'
  const PATH20 = '/upload/files/count'
  const PATH21 = '/upload/search'
  const PATH22 = '/users'
  const PATH23 = '/users/me'
  const PATH24 = '/users-permissions/roles'
  const PATH25 = '/users-permissions/search'
  const PATH26 = '/writers'
  const PATH27 = '/writers/count'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    articles: {
      _id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          /**
           * @returns response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * Update a record
           * @returns response
           */
          put: (option: { body: Methods1['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * Update a record
           * @returns response
           */
          $put: (option: { body: Methods1['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * Delete a record
           * @returns deletes a single record based on the ID supplied
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Delete a record
           * @returns deletes a single record based on the ID supplied
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      count: {
        /**
         * @returns response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json(),
        /**
         * @returns response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH1}`
      },
      get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch(prefix, PATH0, GET, option).send(),
      $get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch(prefix, PATH0, GET, option).send().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    auth: {
      _provider: (val1: string) => {
        const prefix1 = `${PATH2}/${val1}`

        return {
          callback: {
            /**
             * Successfull redirection after approving a provider
             * @returns response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json(),
            /**
             * Successfull redirection after approving a provider
             * @returns response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH3}`
          }
        }
      },
      email_confirmation: {
        /**
         * Validate a user account
         * @returns response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH4, GET, option).json(),
        /**
         * Validate a user account
         * @returns response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH4}`
      },
      forgot_password: {
        /**
         * Send the reset password email link
         * @returns response
         */
        post: (option: { body: Methods5['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, PATH5, POST, option).json(),
        /**
         * Send the reset password email link
         * @returns response
         */
        $post: (option: { body: Methods5['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH5}`
      },
      local: {
        register: {
          /**
           * Register a new user with the default role
           * @returns response
           */
          post: (option: { body: Methods7['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, PATH7, POST, option).json(),
          /**
           * Register a new user with the default role
           * @returns response
           */
          $post: (option: { body: Methods7['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, PATH7, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH7}`
        },
        /**
         * Login a user using the identifiers email and password
         * @returns response
         */
        post: (option: { body: Methods6['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH6, POST, option).json(),
        /**
         * Login a user using the identifiers email and password
         * @returns response
         */
        $post: (option: { body: Methods6['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH6, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH6}`
      },
      reset_password: {
        /**
         * Reset user password with a code (resetToken)
         * @returns response
         */
        post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, PATH8, POST, option).json(),
        /**
         * Reset user password with a code (resetToken)
         * @returns response
         */
        $post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, PATH8, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH8}`
      },
      send_email_confirmation: {
        /**
         * Send a confirmation email to user
         * @returns response
         */
        post: (option: { body: Methods9['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, PATH9, POST, option).json(),
        /**
         * Send a confirmation email to user
         * @returns response
         */
        $post: (option: { body: Methods9['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, PATH9, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH9}`
      }
    },
    categories: {
      _id: (val1: string) => {
        const prefix1 = `${PATH10}/${val1}`

        return {
          /**
           * Update a record
           * @returns response
           */
          put: (option: { body: Methods11['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods11['put']['resBody'], BasicHeaders, Methods11['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * Update a record
           * @returns response
           */
          $put: (option: { body: Methods11['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods11['put']['resBody'], BasicHeaders, Methods11['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * Delete a record
           * @returns deletes a single record based on the ID supplied
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods11['delete']['resBody'], BasicHeaders, Methods11['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Delete a record
           * @returns deletes a single record based on the ID supplied
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods11['delete']['resBody'], BasicHeaders, Methods11['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      _slug: (val1: string) => {
        const prefix1 = `${PATH10}/${val1}`

        return {
          /**
           * @returns response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      count: {
        /**
         * @returns response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, PATH11, GET, option).json(),
        /**
         * @returns response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, PATH11, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH11}`
      },
      get: (option?: { query?: Methods10['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch(prefix, PATH10, GET, option).send(),
      $get: (option?: { query?: Methods10['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch(prefix, PATH10, GET, option).send().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods10['get']['query'] } | undefined) =>
        `${prefix}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    connect: {
      _any: (val1: number | string) => {
        const prefix1 = `${PATH12}/${val1}`

        return {
          /**
           * Connect a provider
           * @returns response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Connect a provider
           * @returns response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    email: {
      settings: {
        /**
         * Get the email settings
         * @returns response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, PATH14, GET, option).json(),
        /**
         * Get the email settings
         * @returns response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, PATH14, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH14}`
      },
      test: {
        /**
         * Send an test email
         * @returns response
         */
        post: (option: { body: Methods17['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods17['post']['resBody'], BasicHeaders, Methods17['post']['status']>(prefix, PATH15, POST, option).json(),
        /**
         * Send an test email
         * @returns response
         */
        $post: (option: { body: Methods17['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods17['post']['resBody'], BasicHeaders, Methods17['post']['status']>(prefix, PATH15, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH15}`
      },
      /**
       * Send an email
       * @returns response
       */
      post: (option: { body: Methods15['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods15['post']['resBody'], BasicHeaders, Methods15['post']['status']>(prefix, PATH13, POST, option).json(),
      /**
       * Send an email
       * @returns response
       */
      $post: (option: { body: Methods15['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods15['post']['resBody'], BasicHeaders, Methods15['post']['status']>(prefix, PATH13, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH13}`
    },
    global: {
      /**
       * Find all the global's records
       */
      get: (option?: { query?: Methods18['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch(prefix, PATH16, GET, option).send(),
      /**
       * Find all the global's records
       */
      $get: (option?: { query?: Methods18['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch(prefix, PATH16, GET, option).send().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods18['get']['query'] } | undefined) =>
        `${prefix}${PATH16}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    homepage: {
      /**
       * Find all the homepage's records
       */
      get: (option?: { query?: Methods19['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch(prefix, PATH17, GET, option).send(),
      /**
       * Find all the homepage's records
       */
      $get: (option?: { query?: Methods19['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch(prefix, PATH17, GET, option).send().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods19['get']['query'] } | undefined) =>
        `${prefix}${PATH17}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    upload: {
      files: {
        _id: (val2: string) => {
          const prefix2 = `${PATH19}/${val2}`

          return {
            /**
             * Retrieve a single file depending on its id
             * @returns response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods22['get']['resBody'], BasicHeaders, Methods22['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * Retrieve a single file depending on its id
             * @returns response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods22['get']['resBody'], BasicHeaders, Methods22['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * Delete an uploaded file
             * @returns response
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods22['delete']['resBody'], BasicHeaders, Methods22['delete']['status']>(prefix, prefix2, DELETE, option).json(),
            /**
             * Delete an uploaded file
             * @returns response
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods22['delete']['resBody'], BasicHeaders, Methods22['delete']['status']>(prefix, prefix2, DELETE, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        count: {
          /**
           * Retrieve the total number of uploaded files
           * @returns response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods23['get']['resBody'], BasicHeaders, Methods23['get']['status']>(prefix, PATH20, GET, option).json(),
          /**
           * Retrieve the total number of uploaded files
           * @returns response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods23['get']['resBody'], BasicHeaders, Methods23['get']['status']>(prefix, PATH20, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH20}`
        },
        /**
         * Retrieve all file documents
         * @returns response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods21['get']['resBody'], BasicHeaders, Methods21['get']['status']>(prefix, PATH19, GET, option).json(),
        /**
         * Retrieve all file documents
         * @returns response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods21['get']['resBody'], BasicHeaders, Methods21['get']['status']>(prefix, PATH19, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH19}`
      },
      search: {
        _id: (val2: string) => {
          const prefix2 = `${PATH21}/${val2}`

          return {
            /**
             * Search for an uploaded file
             * @returns response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods24['get']['resBody'], BasicHeaders, Methods24['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * Search for an uploaded file
             * @returns response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods24['get']['resBody'], BasicHeaders, Methods24['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        }
      },
      /**
       * Upload a file
       * @returns response
       */
      post: (option: { body: Methods20['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods20['post']['resBody'], BasicHeaders, Methods20['post']['status']>(prefix, PATH18, POST, option).json(),
      /**
       * Upload a file
       * @returns response
       */
      $post: (option: { body: Methods20['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods20['post']['resBody'], BasicHeaders, Methods20['post']['status']>(prefix, PATH18, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH18}`
    },
    users: {
      _id: (val1: string) => {
        const prefix1 = `${PATH22}/${val1}`

        return {
          /**
           * Retrieve a single user depending on his id
           * @returns response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods26['get']['resBody'], BasicHeaders, Methods26['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Retrieve a single user depending on his id
           * @returns response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods26['get']['resBody'], BasicHeaders, Methods26['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * Update an existing user
           * @returns response
           */
          put: (option: { body: Methods26['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods26['put']['resBody'], BasicHeaders, Methods26['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * Update an existing user
           * @returns response
           */
          $put: (option: { body: Methods26['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods26['put']['resBody'], BasicHeaders, Methods26['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * Delete an existing user
           * @returns response
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods26['delete']['resBody'], BasicHeaders, Methods26['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Delete an existing user
           * @returns response
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods26['delete']['resBody'], BasicHeaders, Methods26['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      me: {
        /**
         * Retrieve the logged in user information
         * @returns response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods27['get']['resBody'], BasicHeaders, Methods27['get']['status']>(prefix, PATH23, GET, option).json(),
        /**
         * Retrieve the logged in user information
         * @returns response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods27['get']['resBody'], BasicHeaders, Methods27['get']['status']>(prefix, PATH23, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH23}`
      },
      /**
       * Retrieve all user documents
       */
      get: (option?: { query?: Methods25['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch(prefix, PATH22, GET, option).send(),
      /**
       * Retrieve all user documents
       */
      $get: (option?: { query?: Methods25['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch(prefix, PATH22, GET, option).send().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods25['get']['query'] } | undefined) =>
        `${prefix}${PATH22}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    users_permissions: {
      roles: {
        _id: (val2: string) => {
          const prefix2 = `${PATH24}/${val2}`

          return {
            /**
             * Retrieve a role depending on its id
             * @returns response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods29['get']['resBody'], BasicHeaders, Methods29['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * Retrieve a role depending on its id
             * @returns response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods29['get']['resBody'], BasicHeaders, Methods29['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        _role: (val2: string) => {
          const prefix2 = `${PATH24}/${val2}`

          return {
            /**
             * Update a role
             * @returns response
             */
            put: (option: { body: Methods30['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods30['put']['resBody'], BasicHeaders, Methods30['put']['status']>(prefix, prefix2, PUT, option).json(),
            /**
             * Update a role
             * @returns response
             */
            $put: (option: { body: Methods30['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods30['put']['resBody'], BasicHeaders, Methods30['put']['status']>(prefix, prefix2, PUT, option).json().then(r => r.body),
            /**
             * Delete a role
             * @returns response
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods30['delete']['resBody'], BasicHeaders, Methods30['delete']['status']>(prefix, prefix2, DELETE, option).json(),
            /**
             * Delete a role
             * @returns response
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods30['delete']['resBody'], BasicHeaders, Methods30['delete']['status']>(prefix, prefix2, DELETE, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        /**
         * Retrieve all role documents
         */
        get: (option?: { query?: Methods28['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch(prefix, PATH24, GET, option).send(),
        /**
         * Retrieve all role documents
         */
        $get: (option?: { query?: Methods28['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch(prefix, PATH24, GET, option).send().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods28['get']['query'] } | undefined) =>
          `${prefix}${PATH24}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      search: {
        _id: (val2: string) => {
          const prefix2 = `${PATH25}/${val2}`

          return {
            /**
             * Search for users
             */
            get: (option?: { query?: Methods31['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch(prefix, prefix2, GET, option).send(),
            /**
             * Search for users
             */
            $get: (option?: { query?: Methods31['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch(prefix, prefix2, GET, option).send().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods31['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      }
    },
    writers: {
      _id: (val1: string) => {
        const prefix1 = `${PATH26}/${val1}`

        return {
          /**
           * @returns response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods33['get']['resBody'], BasicHeaders, Methods33['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods33['get']['resBody'], BasicHeaders, Methods33['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * Update a record
           * @returns response
           */
          put: (option: { body: Methods33['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods33['put']['resBody'], BasicHeaders, Methods33['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * Update a record
           * @returns response
           */
          $put: (option: { body: Methods33['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods33['put']['resBody'], BasicHeaders, Methods33['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * Delete a record
           * @returns deletes a single record based on the ID supplied
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods33['delete']['resBody'], BasicHeaders, Methods33['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Delete a record
           * @returns deletes a single record based on the ID supplied
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods33['delete']['resBody'], BasicHeaders, Methods33['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      count: {
        /**
         * @returns response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods34['get']['resBody'], BasicHeaders, Methods34['get']['status']>(prefix, PATH27, GET, option).json(),
        /**
         * @returns response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods34['get']['resBody'], BasicHeaders, Methods34['get']['status']>(prefix, PATH27, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH27}`
      },
      get: (option?: { query?: Methods32['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch(prefix, PATH26, GET, option).send(),
      $get: (option?: { query?: Methods32['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch(prefix, PATH26, GET, option).send().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods32['get']['query'] } | undefined) =>
        `${prefix}${PATH26}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
