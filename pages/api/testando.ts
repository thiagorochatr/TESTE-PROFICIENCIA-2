// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  date: string
}

function testando(
  req: NextApiRequest,
  res: NextApiResponse<Data>
  ) {
  const dynamicDate = new Date();

  res.json({
    date: dynamicDate.toUTCString()
  });
}

export default testando;