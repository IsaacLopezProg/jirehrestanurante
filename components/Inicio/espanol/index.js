import React from 'react';

import Slider from './Slider';
import Servicios from './Servicios';
import Acerca from './Acerca';
import Menu from './Menu';
import Ubicacion from './Ubicacion';
import Galeria from './Galeria';
import Contacto from './Contacto';
import Cheff from './Cheff';

export default function index() {
    return (
        <>
            <Slider />
            <Servicios />
            <Acerca />
            <Menu />
            <Galeria />
            <Contacto />
            <Cheff />
            <Ubicacion />
        </>
    )
}
