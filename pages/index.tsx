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
        <img src="hopee-logo.svg" alt="Hopee Logo"
          className='mb-12'
        />

        <div>
          <h1
            className='text-4xl mb-12'
          >
            Login
          </h1>

          <form action="odss"
            className="text-2xl"
          >
            <div className='text-start my-8'>
              <label htmlFor="user">Usuário</label><br />
              <input type="text" name="user" id="user"
                className='bg-gray-300 p-2 rounded-xl'
              />
            </div>
            <div className='text-start my-8'>
              <label htmlFor="password">Senha</label><br />
              <input type="password" name="password" id="password"
                className='bg-gray-300 p-2 rounded-xl'
              />
            </div>

          <input type="submit" value="Entrar"
            className='bg-gray-300 p-4 rounded-xl cursor-pointer hover:bg-gray-400 focus:bg-gray-400'
          />
          </form>
          <div className='text-2xl'>
            <p
              className='mt-8 mb-2'
            >
              Ainda não possui conta?
            </p>
            <a 
              className='underline p-2 rounded-lg hover:bg-gray-100 focus:bg-gray-100'
              href="#">
                Cadastre-se agora!
            </a>
          </div>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <Image src="/hopee-logo.svg" alt="Hopee Logo" width={80} height={40} />
      </footer>
    </div>
  )
}

export default Home
