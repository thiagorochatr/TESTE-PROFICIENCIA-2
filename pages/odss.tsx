// ACCESSIBILITY - 10
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

const odsObjects = [
  {
    number: 1,
    name: "Erradicação da pobreza",
    color: "bg-red-600",
    href: "#",
    icon: "icons/ods1.svg",
  }, {
    number: 2,
    name: "Fome zero e agricultura sustentável",
    color: "bg-yellow-400",
    href: "#",
    icon: "icons/ods2.svg",
  }, {
    number: 3,
    name: "Saúde e bem-estar",
    color: "bg-green-500",
    href: "/ods3",
    icon: "icons/ods3.svg",
  }, {
    number: 4,
    name: "Educação de qualidade",
    color: "bg-red-600",
    href: "/ods4",
    icon: "icons/ods4.svg",
  }, {
    number: 5,
    name: "Igualdade de gênero",
    color: "bg-orange-600",
    href: "#",
    icon: "icons/ods5.svg",
  }, {
    number: 6,
    name: "Água potável e saneamento",
    color: "bg-blue-400",
    href: "#",
    icon: "icons/ods6.svg",
  }, {
    number: 7,
    name: "Energia limpa e acessível",
    color: "bg-yellow-400",
    href: "#",
    icon: "icons/ods7.svg",
  }, {
    number: 8,
    name: "Trabalho decente e crescimento econômico",
    color: "bg-pink-600",
    href: "#",
    icon: "icons/ods8.svg",
  }, {
    number: 9,
    name: "Indústria, inovação e infraestrutura",
    color: "bg-orange-600",
    href: "#",
    icon: "icons/ods9.svg",
  }, {
    number: 10,
    name: "Redução das desigualdades",
    color: "bg-pink-600",
    href: "#",
    icon: "icons/ods10.svg",
  }, {
    number: 11,
    name: "Cidades e comunidades sustentáveis",
    color: "bg-yellow-400",
    href: "#",
    icon: "icons/ods11.svg",
  }, {
    number: 12,
    name: "Consumo e produção responsáveis",
    color: "bg-orange-600",
    href: "#",
    icon: "icons/ods12.svg",
  }, {
    number: 13,
    name: "Ação contra a mudança global do clima",
    color: "bg-green-500",
    href: "#",
    icon: "icons/ods13.svg",
  }, {
    number: 14,
    name: "Vida na água",
    color: "bg-blue-400",
    href: "#",
    icon: "icons/ods14.svg",
  }, {
    number: 15,
    name: "Vida terrestre",
    color: "bg-green-500",
    href: "/ods15",
    icon: "icons/ods15.svg",
  }, {
    number: 16,
    name: "Paz, injustiça e instituições eficazes",
    color: "bg-blue-400",
    href: "#",
    icon: "icons/ods16.svg",
  }, {
    number: 17,
    name: "Parcerias e meios de implementação",
    color: "bg-blue-400",
    href: "#",
    icon: "icons/ods17.svg",
  }
];

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-4">
      <Head>
        <title>Escolha o ODS</title>
        <link rel="icon" href="/hopee-icon.svg" />
      </Head>

      <a href='#content'
        className='absolute w-44 h-14 inset-0 text-transparent focus:text-black focus:border focus:p-1 hover:underline'
      >
        Saltar para o conteúdo principal da página
      </a>
      <main className="mb-16 w-full sm:px-24 flex flex-1 flex-col justify-center text-center sm:items-center">
        <header className='mb-2 md:mb-4 flex items-center justify-center'>
          <img src="/hopee-logo.svg" alt="Hopee Logo"
            className='w-32'
          />
        </header>

        <h1 className="mt-4 text-2xl" id='content'>
          Conheça os projetos de acordo com o ODS relacionado!
        </h1>

        <div className="mt-6 flex max-w-4xl flex-wrap justify-around sm:w-full px-4 items-center ">
          {odsObjects.map((item) => (
            <Link href={item.href}>
              <a
                key={item.number}
                className={`${item.color} mr-4 mt-6 w-96 h-44 rounded-xl border p-6 text-center hover:text-gray-900 focus:text-gray-900`}
              >
                <div className='flex items-center justify-center'>
                  <h2 className="text-2xl font-bold">ODS #{item.number}</h2>
                  <img
                    src={item.icon}
                    alt={`ODS #${item.number} icon.`}
                    className="w-8 ml-4"  
                  />
                </div>
                <p className="mt-4 text-2xl">{item.name}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <Image src="/hopee-logo.svg" alt="Hopee Logo" width={80} height={40} />
      </footer>
    </div>
  )
}

export default Home
