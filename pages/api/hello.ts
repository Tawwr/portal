// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import _ from 'lodash'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ msg: 'hello world' })
}
