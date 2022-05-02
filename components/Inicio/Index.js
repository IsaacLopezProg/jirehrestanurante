import React, { useState, useEffect } from 'react';

import Slider from './Slider';
import Servicios from './Servicios';
import Acerca from './Acerca';
import Menu from './Menu';
import Ubicacion from './Ubicacion';
import Galeria from './Galeria';
import Contacto from './Contacto';
import Cheff from './Cheff';
import Testimonios from './Testimonios';

export default function index({ idioma }) {

    const [fotografia, setFotografia] = useState();

    useEffect(() => {

        const consultarAPI = async () => {
            const url = 'http://localhost:1337/photos-home';

            const respuesta = await fetch(url);
            const datos = await respuesta.json();

            setFotografia(datos);
        }

        consultarAPI();
    }, [])
    return (
        <>
            <Slider idioma={idioma} />
            <Servicios idioma={idioma} />
            <Acerca idioma={idioma} />
            <Menu idioma={idioma} />
            <Galeria idioma={idioma} fotografia={fotografia} />
            <Contacto idioma={idioma} />
            <Cheff idioma={idioma} />
            {/* <Testimonios idioma={idioma} /> */}
            <Ubicacion idioma={idioma} />
        </>
    )
}
