import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const odsObjects = [
  {
    number: 1,
    name: "Erradicação da pobreza",
    color: "red-500",
    href: "#",
  },
  {
    number: 2,
    name: "Fome zero e agricultura sustentável",
    color: "yellow-300",
    href: "#",
  },
  {
    number: 3,
    name: "Saúde e bem-estar",
    color: "green-600",
    href: "#",
  },
  {
    number: 4,
    name: "Educação de qualidade",
    color: "red-600",
    href: "#",
  },
  {
    number: 5,
    name: "Igualdade de gênero",
    color: "orange-600",
    href: "#",
  },
  {
    number: 6,
    name: "Água potável e saneamento",
    color: "blue-300",
    href: "#",
  },
  {
    number: 7,
    name: "Energia limpa e acessível",
    color: "yellow-400",
    href: "#",
  },
  {
    number: 8,
    name: "Trabalho decente e crescimento econômico",
    color: "pink-800",
    href: "#",
  },
  {
    number: 9,
    name: "Indústria, inovação e infraestrutura",
    color: "orange-500",
    href: "#",
  },
  {
    number: 10,
    name: "Redução das desigualdades",
    color: "pink-600",
    href: "#",
  },
  {
    number: 11,
    name: "Cidades e comunidades sustentáveis",
    color: "yellow-500",
    href: "#",
  },
  {
    number: 12,
    name: "Consumo e produção responsáveis",
    color: "yellow-700",
    href: "#",
  },
  {
    number: 13,
    name: "Ação contra a mudança global do clima",
    color: "green-700",
    href: "#",
  },
  {
    number: 14,
    name: "Vida na água",
    color: "blue-400",
    href: "#",
  },
  {
    number: 15,
    name: "Vida terrestre",
    color: "green-500",
    href: "#",
  },
  {
    number: 16,
    name: "Paz, injustiça e instituições eficazes",
    color: "blue-600",
    href: "#",
  },
  {
    number: 17,
    name: "Parcerias e meios de implementação",
    color: "blue-800",
    href: "#",
  }
];

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Página 2{' '}
          <a className="text-yellow-500" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {odsObjects.map((item) => (
            <a
              href="#"
              className={`bg-${item.color} mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600`}
            >
              <h3 className="text-2xl font-bold">ODS #{item.number}</h3>
              <p className="mt-4 text-xl">{item.name}</p>
              <p className="mt-4 text-md">{item.color}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
