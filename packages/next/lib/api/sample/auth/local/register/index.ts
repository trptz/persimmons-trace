/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Register a new user with the default role */
  post: {
    status: 200
    /** response */
    resBody: Types.UsersPermissionsUser
    reqBody: Types.NewUsersPermissionsUser
  }
}
