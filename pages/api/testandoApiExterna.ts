// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  date: string,
  name: string
}

async function testando(req: NextApiRequest, res: NextApiResponse<Data>) {
  const dynamicDate = new Date();

  const testeAPI = await fetch("https://www.fruityvice.com/api/fruit/all");
  const testeAPIJson = await testeAPI.json();
  const arrayMenor = testeAPIJson.slice(0,6);
  const nomes = arrayMenor.map(item => { return item.name });

  res.json({
    date: dynamicDate.toUTCString(),
    name: nomes
  });
}

export default testando;