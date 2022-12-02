import { NextApiRequest, NextApiResponse } from 'next'

import { emailRX } from '~/lib/functions'
import { revue } from '~/lib/revue'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = JSON.parse(req.body)

  if (!emailRX(email)) {
    return res.status(200).json({ error: 'Invalid email' })
  }

  const data = await revue.addSubscriber({ email, doubleOptIn: true })

  return res.status(201).json({ data, error: '' })
}
