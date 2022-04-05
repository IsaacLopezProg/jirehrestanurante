import React from 'react';

import Slider from './Slider';
import Servicios from './Servicios';
import Acerca from './Acerca';
import Menu from './Menu';
import Ubicacion from './Ubicacion';
import Galeria from './Galeria';
import Contacto from './Contacto';
import Cheff from './Cheff';

export default function index({ idioma }) {
    return (
        <>
            <Slider idioma={idioma} />
            <Servicios idioma={idioma} />
            <Acerca idioma={idioma} />
            <Menu idioma={idioma} />
            <Galeria idioma={idioma} />
            <Contacto idioma={idioma} />
            <Cheff idioma={idioma} />
            <Ubicacion idioma={idioma} />
        </>
    )
}
