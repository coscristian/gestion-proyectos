import Link from 'next/link'
import React from 'react'
import Head from 'next/head'

const index = () => {
  return (
    <div>
      <Head>
        <title>Admin Usuarios | Gestión de Proyectos</title>
      </Head>
      <div>Página de Index - prueba dev</div>
      <Link href="/">
        <p>Ir al home</p>
      </Link>
    </div>
  )
}

export default index