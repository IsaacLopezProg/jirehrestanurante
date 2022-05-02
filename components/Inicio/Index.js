// import React, { useState, useEffect } from 'react';

import Slider from './Slider';
import Servicios from './Servicios';
import Acerca from './Acerca';
import Menu from './Menu';
import Ubicacion from './Ubicacion';
import Galeria from './Galeria';
import Contacto from './Contacto';
import Cheff from './Cheff';
// import Testimonios from './Testimonios';

// export default function index({ idioma }) {

export default function index() {

    return (
        <>
            {/* <Slider idioma={idioma} /> */}

            <Slider />
            <Servicios />
            <Acerca />
            <Menu />
            <Galeria />
            <Contacto />
            <Cheff />
            {/* <Testimonios idioma={idioma} /> */}
            <Ubicacion />
        </>
    )
}
