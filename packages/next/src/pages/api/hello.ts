// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const STATUS_CODE ={
  OK: 200
}as const

type Data = {
  name: string
}

export default function handler(
  // eslint-disable-next-line unicorn/prevent-abbreviations
  req: NextApiRequest,
  // eslint-disable-next-line unicorn/prevent-abbreviations
  res: NextApiResponse<Data>
) {
  res.status(STATUS_CODE.OK).json({ name: 'John Doe' })
}
