
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>ODS #15 - Vida terrestre</title>
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
            ODS #15 - Vida terrestre
          </h1>
        </div>
        <h2
          className=' mb-4 md:mb-8 text-lg sm:text-xl md:text-2xl lg:text-3xl'
          id='content'
        >
          Selecione o tema:
        </h2>
        <Link href="/ods15-animaisSilvestres">
          <a className='bg-green-500 p-4 rounded-lg text-2xl hover:bg-gray-400 focus:bg-gray-400'>
            Animais silvestres
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
