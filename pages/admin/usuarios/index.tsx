import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div>
      <div>Página de Index - prueba dev</div>
      <Link href="/">
        <p>Ir al home</p>
      </Link>
    </div>
  )
}

export default index