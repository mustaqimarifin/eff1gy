import type { NextApiRequest, NextApiResponse } from 'next'

import supabase from '~/lib/supabase'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = await supabase.from('pages').select()

  const total = data?.reduce((acc, row) => acc + row.view_count, 0)
  console.log('DATA', total)
  return res.status(200).json({
    total,
  })
}
