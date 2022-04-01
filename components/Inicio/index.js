import React from 'react';

import Slider from './Slider';
import Servicios from './Servicios';
import About from './About';
import Menu from './Menu';

export default function index() {
    return (
        <>
            <Slider />
            <Servicios />
            <About />
            <Menu />
        </>
    )
}
