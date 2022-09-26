import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Pie } from "react-chartjs-2";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

// interface chartDataTypes {

// }

interface apiDataTypes {
  name: string,
  price_usd: number,
}

const Home: NextPage = () => {

  const [repositories, setRepositories] = useState<apiDataTypes[]>([]);
  

  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  const nomes = repositories.map(item => { return item.name });

  const valoresEmUsd = repositories.map(item => { return item.price_usd });

  useEffect(() => {
    fetch("https://api.coinlore.net/api/tickers/?start=0&limit=9")
    .then(response => response.json())
    .then(object => object.data)
    .then(array => setRepositories(array))
  }, []);
  
  useEffect(() => {
    setChartData({
      // labels: nomes,
      datasets: [
        // {
        //   label: "Whom'st let the dogs out",
        //   data: valoresEmUsd,
        //   borderColor: "rgb(53, 162, 235)",
        //   backgroundColor: "rgba(53, 162, 235, 0.4)",
        // },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        },
        title: {
          display: true,
          text: "Whom'st let the dogs out",
        },
      },
    });

  }, [repositories]);

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


        {/* TESTE DE API EXTERNA!!!!!! */}

                    <Pie data={chartData}/>


                    <div className='mb-8 text-white bg-gray-700'>
                      {repositories.map(item => {
                        return <p>{item.name}: ${item.price_usd}</p>
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
