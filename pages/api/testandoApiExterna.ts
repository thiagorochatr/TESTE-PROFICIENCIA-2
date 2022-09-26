// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  date: string,
  nome: string
}

async function testando(req: NextApiRequest, res: NextApiResponse<Data>) {
  const dynamicDate = new Date();

  const testeAPI = await fetch("https://api.github.com/users/thiagorochatr");
  const testeAPIJson = await testeAPI.json();
  const nomeNaApi = testeAPIJson.name;

  res.json({
    date: dynamicDate.toUTCString(),
    nome: nomeNaApi
  });
}

export default testando;