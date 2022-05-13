/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Update a record */
  put: {
    status: 200
    /** response */
    resBody: Types.Category
    reqBody: Types.NewCategory
  }

  /** Delete a record */
  delete: {
    status: 200
    /** deletes a single record based on the ID supplied */
    resBody: number
  }
}
