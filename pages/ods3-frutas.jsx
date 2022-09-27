import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement, 
  LineElement,
  LineController,
  BarController,
  Legend,
  Tooltip,
  Title,
} from 'chart.js';
import { Chart } from "react-chartjs-2";


ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement, 
  LineElement,
  LineController,
  BarController,
  Tooltip,
  Legend,
  Title,
);

const projetos = [
  {
    title: "Averigua Aí!",
    description: "Fazemos inspeções em distribuidoras para ver a qualidade das frutas vendidas",
    contact: "9999999999",
    value: 5000,
    Number: 1,
    href: "#"
  },
  {
    title: "Refeição de ouro",
    description: "Transformamos frutas quase estragando em comida para pessoas necessitadas",
    contact: "9999999999",
    value: 5000,
    Number: 2,
    href: "#"
  }
]

const Home = () => {

  const [repositories, setRepositories] = useState([]);
  
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const nomes = repositories.nome;
  const carboidrato = repositories.carboidratos;
  const proteina = repositories.proteinas;
  const caloria = repositories.calorias;
  const acucar = repositories.acucars;

  useEffect(() => {
    fetch("http://localhost:3000/api/testandoApiExterna")
    .then(response => response.json())
    .then(array => setRepositories(array))
  }, []);

  useEffect(() => {
    setChartData({
      labels: nomes,
      datasets: [
        {
          type: 'line',
          label: 'Proteína',
          data: proteina,

          borderColor: 'rgb(50,205,50)',
          borderWidth: 2,
          fill: true,
          
          backgroundColor: 'rgba(50,205,50, 0.4)',
        },
        {
          type: 'line',
          label: 'Açúcar',
          data: acucar,

          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
          fill: false,
        },
        {
          type: 'bar',
          label: 'Carboidrato',
          data: carboidrato,

          backgroundColor: "rgba(137, 207, 240, 0.6)",
          borderColor: "rgb(137, 207, 240)",
          borderWidth: 1,
        },
        {
          type: 'bar',
          label: 'Caloria',
          data: caloria,

          backgroundColor: 'rgba(255, 255, 51, 0.8)',
          borderColor: 'rgb(255,255,51)',
          borderWidth: 1,
        },
      ],
    });
  },[repositories]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/hopee-icon.svg" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <header className='mb-8 md:mb-12 flex items-center justify-center'>
          <img src="/hopee-logo.svg" alt="Hopee Logo"
            className='w-32'
          />
        </header>

        <div className='mb-8 flex items-center justify-center'>
          <Link href='/ods3'>
            <a className='mr-1 sm:mr-4 p-2 rounded-lg hover:bg-gray-100 focus:bg-gray-100'>
              <img
                src="icons/arrow-left.svg"
                alt="Voltar para a página anterior"
                className='w-8 sm:w-10 md:w-12 lg:w-12'
              />
            </a>
          </Link>
          <h1
            className='text-lg sm:text-2xl md:text-3xl lg:text-4xl'
          >
            ODS #3 - Saúde e bem-estar
          </h1>
        </div>

        <h2
          className='mb-1 md:mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl'
        >
          Frutas
        </h2>

        <div className="my-3 md:my-8 w-96 sm:w-full">
        <Chart type='bar' data={chartData}/>
        </div>
        
        <h2
          className='my-4 md:my-8 text-lg sm:text-xl md:text-2xl lg:text-3xl'
        >
          Projetos
        </h2>

        <div className="flex max-w-4xl flex-wrap justify-around sm:w-full px-4 items-center ">
          {projetos.map((item) => (
            <Link href={item.href}>
              <a
                key={item.number}
                className="bg-gray-300 mr-4 mt-6 w-96 h-44 rounded-xl border p-6 text-center hover:bg-gray-400 focus:bg-gray-400"
              >
                <div className='flex items-center justify-center'>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
                <p className="mt-4 text-2xl">{item.description}</p>
              </a>
            </Link>
          ))}
        </div>

        <Link href="/cadastrarProjeto">
          <a className='bg-gray-300 mt-16 mb-4 p-4 rounded-lg text-2xl hover:bg-gray-400 focus:bg-gray-400'>
            Cadastrar projeto
          </a>
        </Link>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <Image src="/hopee-logo.svg" alt="Hopee Logo" width={80} height={40} />
      </footer>
    </div>
  )
}

export default Home
