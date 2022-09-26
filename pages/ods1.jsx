import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,

  CategoryScale,
  LinearScale,
  PointElement, 
  LineElement,
} from 'chart.js';
import { Pie, Line } from "react-chartjs-2";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,

  CategoryScale,
  LinearScale,
  PointElement, 
  LineElement,
);

const Home = () => {

  const [repositories, setRepositories] = useState([]);
  
  const [chart1Data, setChart1Data] = useState({
    datasets: [],
  });

  const [chart2Data, setChart2Data] = useState({
    datasets: [],
  });

  const [chart2Options, setChart2Options] = useState({});

  const nomes = repositories.map(item => { return item.name });

  const valoresEmUsd = repositories.map(item => { return item.price_usd });

  const variacao24h = repositories.map(item =>{ return item.percent_change_24h});

  const variacao7d = repositories.map(item =>{ return item.percent_change_7d});

  useEffect(() => {
    fetch("https://api.coinlore.net/api/tickers/?start=0&limit=9")
    .then(response => response.json())
    .then(object => object.data)
    .then(array => setRepositories(array))
  }, []);

  useEffect(() => {
    setChart1Data({
      labels: nomes,
      datasets: [
        {
          label: "Valor em Dólar das criptomoedas",
          data: valoresEmUsd,
          backgroundColor: [
            'rgba(255, 206, 86, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(79, 79, 79, 0.5)',
            'rgba(138, 43, 226, 0.5)',
            'rgba(255, 69, 0, 0.5)',
            'rgb(0, 255, 0, 0.5)',
            'rgba(255,20,147, 0.5)',
            'rgba(139,69,19, 0.5)'
          ],
          borderColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(79, 79, 79, 1)',
            'rgba(138, 43, 226, 1)',
            'rgba(255, 69, 0, 1)',
            'rgb(0, 255, 0, 1)',
            'rgba(255,20,147, 1)',
            'rgba(139,69,19, 1)'
          ],
          borderWidth: .5,
        },
      ],
    });

    setChart2Data({
      labels: nomes,
      datasets: [
        {
          label: "24 horas",
          data: variacao24h,
          backgroundColor: [
            'rgba(54, 162, 235, 0.5)',
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',

          ],
          borderWidth: .5,
        },
        {
          label: "7 dias",
          data: variacao7d,
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: .5,
        },
      ],
    });

    setChart2Options({
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: "Taxas de variação",
        },
      },
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
          <Link href='/odss'>
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
            ODS #1 - Erradicação da pobreza
          </h1>
        </div>


        {/* TESTE DE API EXTERNA!!!!!!*/}
                    <div className='my-3 md:my-8 w-72 md:w-96'>
                      <Pie data={chart1Data} />
                    </div>

                    <div className='mb-4 text-lg sm:text-xl md:text-2xl'>
                      {repositories.map(item => {
                        return <p>{item.name}: ${item.price_usd}</p>
                      })}
                    </div>

                    <div className="my-3 md:my-8 w-96 sm:w-full">
                      <Line data={chart2Data} options={chart2Options} />
                    </div>

                    <div className='mb-4 text-lg sm:text-xl md:text-2xl'>
                      <p>[Nome]: [24 horas]/[7 dias]</p>
                      {repositories.map(item => {
                        return <p>{item.name}: {item.percent_change_24h}/{item.percent_change_7d}</p>
                      })}
                    </div>



        <Link href="/cadastrarProjeto">
          <a className='bg-gray-300 p-4 rounded-lg text-2xl hover:bg-gray-400 focus:bg-gray-400'>
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
