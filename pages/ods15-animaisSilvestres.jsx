// ACCESSIBILITY - 10
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,

  RadialLinearScale,
  PointElement, 
  LineElement,
  Filler,
} from 'chart.js';
import { Radar } from "react-chartjs-2";

ChartJS.register(
  Title,
  Tooltip,
  Legend,

  PointElement, 
  LineElement,
  RadialLinearScale,
  Filler,
);

const projetos = [
  {
    title: "Último suspiro",
    description: "Cuidamos de animais idosos dos zoológicos",
    contact: "9999999999",
    value: 5000,
    Number: 1,
    href: "#"
  },
  {
    title: "Abrigo Feliz",
    description: "Nós resgatamos animais vindos de contrabando ilegal",
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

  const nomes = repositories.map(item => { return item.name });

  const tempoDeVida = repositories.map(item => { return item.lifespan });

  useEffect(() => {
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
    .then(response => response.json())
    .then(array => setRepositories(array))
  }, []);

  useEffect(() => {
    setChartData({
      labels: nomes,
      datasets: [
        {
          label: "Tempo de vida médio",
          data: tempoDeVida,
          backgroundColor: [
            'rgba(54, 162, 235, 0.5)',

          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1,
        },
      ],
    });
  },[repositories]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Animais silvestres</title>
        <link rel="icon" href="/hopee-icon.svg" />
      </Head>

      <a href='#content'
        className='absolute w-44 h-14 inset-0 text-transparent focus:text-black focus:border focus:p-1 hover:underline'
      >
        Saltar para o conteúdo principal da página
      </a>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <header className='mb-8 md:mb-12 flex items-center justify-center'>
          <img src="/hopee-logo.svg" alt="Hopee Logo"
            className='w-32'
          />
        </header>

        <div className='mb-8 flex items-center justify-center'>
          <Link href='/ods15'>
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
            ODS #15 - Vida terrestre
          </h1>
        </div>

        <h2
          className='mb-1 md:mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl'
          id='content'
        >
          Animais silvestres
        </h2>

        <div className="my-3 md:my-8 w-96 sm:w-full">
        <Radar
          data={chartData}
          aria-label="Gráfico da vida média de alguns animais" role="img"
        />
        </div>

        <div className='mb-4 text-lg sm:text-xl md:text-2xl'>
          {repositories.map(item => {
            return <p>{item.name}: {item.lifespan} anos</p>
          })}
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
