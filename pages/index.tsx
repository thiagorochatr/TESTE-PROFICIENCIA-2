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
          className=''
        />

        <div>
          <h2
            className='text-4xl mb-12'
          >
            Login
          </h2>

          <form action="odss"
            className="text-2xl"
          >
            <div className='text-start my-8'>
              <h3 className='mb-2'>
                Usuário
              </h3>
              <input type="text" name="user" id="user"
                className='bg-gray-300 p-2 rounded-xl'
              />
            </div>
            <div className='text-start my-8'>
              <h3 className='mb-2'>
                Senha
              </h3>
              <input type="password" name="password" id="password"
                className='bg-gray-300 p-2 rounded-xl'
              />
            </div>

          <input type="submit" value="Entrar"
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
