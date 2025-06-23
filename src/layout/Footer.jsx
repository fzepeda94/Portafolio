import React from 'react'

export const Footer = () => {
    // Obtener el año actual
  const anioActual = new Date().getFullYear();

  return (
    <footer className='footer'>
        Portafolio Javier Zepeda &copy; - {anioActual}
    </footer>
  )
}
