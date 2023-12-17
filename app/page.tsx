import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

const Home = function Home() {
  return (
    <div className='bg-green-500'>
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
      <Link href="/admin/usuarios">
        <p className='cursor-pointer'>Ir a administración de usuarios</p>
      </Link>
    </div>
    
  )
}

export default Home;
