import React from 'react';

import Slider from './Slider';
import Servicios from './Servicios';
import About from './About';
import Menu from './Menu';
import Ubicacion from './Ubicacion';
import Galeria from './Galeria';
import Contacto from './Contacto';

export default function index() {
    return (
        <>
            <Slider />
            <Servicios />
            <About />
            <Menu />
            <Galeria />
            <Contacto />
            <Ubicacion />
        </>
    )
}
