import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
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

        <div className='flex items-center justify-center'>
          <a href='/ods1' className='mr-1 sm:mr-4 p-2 rounded-lg hover:bg-gray-100 focus:bg-gray-100'>
            <img
              src="icons/arrow-left.svg"
              alt="Voltar para a página anterior"
              className='w-8 sm:w-10 md:w-12 lg:w-12'
            />
          </a>
          <h1
            className='font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl'
          >
            Cadastrar um projeto
          </h1>
        </div>

        <div>
          <form action="#"
            className="text-lg sm:text-xl md:text-2xl"
          >
            <div className='text-start my-8'>
              <label htmlFor="titulo">Título</label><br />
              <input type="text" name="titulo" id="titulo"
                className='bg-gray-300 p-2 rounded-xl'
              />
            </div>
            <div className='text-start my-8'>
              <label htmlFor="descricao">Descrição</label><br />
              <textarea
                name="descricao"
                id="descricao"
                cols={23} rows={5}
                className="bg-gray-300 p-2 rounded-xl"
                >
                </textarea>
            </div>
            <div className='text-start my-8'>
              <label htmlFor="contato">Contato</label><br />
              <input type="email" name="contato" id="contato"
                className='bg-gray-300 p-2 rounded-xl'
              />
            </div>
            <div className='text-start my-8'>
              <label htmlFor="valor">Valor desejado (inteiro)</label><br />
              <input type="number" name="valor" id="valor"
                className='bg-gray-300 p-2 rounded-xl'
              />
            </div>

          <input type="submit" value="Cadastrar projeto"
            className='bg-gray-300 p-4 rounded-xl cursor-pointer hover:bg-gray-400 focus:bg-gray-400'
          />
          </form>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <Image src="/hopee-logo.svg" alt="Hopee Logo" width={80} height={40} />
      </footer>
    </div>
  )
}

export default Home
