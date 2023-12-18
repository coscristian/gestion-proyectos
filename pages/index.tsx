import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Head from 'next/head'

const Home = function Home() {
  return (
    <div className='bg-green-500'>
      <Head>
        <title>Home | Gestión de proyectos</title>
      </Head>
      <Link href="/admin/usuarios">
        <p className='cursor-pointer'>Ir a administración de usuarios</p>
        <i className='fast fa-home'></i>
      </Link>
      
    </div>
    
  )
}

export default Home;
