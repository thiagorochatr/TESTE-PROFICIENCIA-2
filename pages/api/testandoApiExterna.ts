// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  nome: string[],
  carboidratos: number[],
  proteinas: number[],
  calorias: number[],
  acucars: number[],
}

interface Item {
  name: string,
  nutritions: {
    carbohydrates: number,
    protein: number,
    calories: number,
    sugar: number
  }
}

async function testando(req: NextApiRequest, res: NextApiResponse<Data>) {

  const testeAPI = await fetch("https://www.fruityvice.com/api/fruit/all");
  const testeAPIJson = await testeAPI.json();
  const objetoDesejado = <Item[]>testeAPIJson.slice(0,6);
  const nomes = objetoDesejado.map(item => { return item.name });
  const carboidrato = objetoDesejado.map(item => { return item.nutritions.carbohydrates });
  const proteina = objetoDesejado.map(item => { return item.nutritions.protein });
  const caloria = objetoDesejado.map(item => { return item.nutritions.calories });
  const acucar = objetoDesejado.map(item => { return item.nutritions.sugar });

  res.json({
    nome: nomes,
    carboidratos: carboidrato,
    proteinas: proteina,
    calorias: caloria,
    acucars: acucar
  });
}

export default testando;