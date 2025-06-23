import React from 'react'
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';
import { Inicio } from "../components/Inicio";
import { Portafolio } from '../Components/Portafolio';
import { Servicios } from '../Components/Servicios';
import { Curriculum } from '../Components/Curriculum';
import { Contacto } from '../Components/Contacto';
import { HeaderNav } from '../layout/HeaderNav';
import { Footer } from '../layout/Footer';

export const Rutas = () => {
    return (
        <BrowserRouter>
            {/*Header y Navegacion*/}

            <HeaderNav></HeaderNav>

            {/*CONTENIDO CENTRAL*/}
            <section className='content'>
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/inicio' element={<Inicio />} />
                    <Route path='/portafolio' element={<Portafolio />} />
                    <Route path='/servicios' element={<Servicios />} />
                    <Route path='/curriculum' element={<Curriculum />} />
                    <Route path='/contacto' element={<Contacto />} />
                </Routes>
            </section>

            {/*Footer*/}
            <Footer></Footer>

        </BrowserRouter>
    )
}
