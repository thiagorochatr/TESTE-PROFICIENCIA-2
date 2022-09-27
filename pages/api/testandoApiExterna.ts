// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  nome: string[],
  carboidratos: number
}

async function testando(req: NextApiRequest, res: NextApiResponse<Data>) {

  const testeAPI = await fetch("https://www.fruityvice.com/api/fruit/all");
  const testeAPIJson = await testeAPI.json();
  const arrayMenor = testeAPIJson.slice(0,6);
  const nomes = arrayMenor.map(item => { return item.name });
  const carboidrato = arrayMenor.map(item => { return item.nutritions.carbohydrates });

  res.json({
    nome: nomes,
    carboidratos: carboidrato
  });
}

export default testando;