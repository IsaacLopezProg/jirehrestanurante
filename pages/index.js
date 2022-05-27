// import React, { useEffect, useState } from 'react';
import Headers from '../layout/Headers';
import Inicio from '../components/Inicio/Index';
import Footer from '../layout/Footer';
import { NextSeo } from 'next-seo';

export default function index() {

  // const [idioma, setIdioma] = useState('');

  // useEffect(() => {

  //   if (navigator.language) {
  //     const lang = (navigator.language).slice(0, 2);
  //     setIdioma(lang);
  //   }

  // }, [])


  return (
    <>
      <NextSeo
        title="Jireh Tropical Restaurant"
        description="A family business dedicated to serving our community. Covering food and nutritional needs with our range of services and a wide variety of healthy meals."
        canonical="https://www.jirehtropical.com/"
      />
      <Headers >
        {/* <Inicio idioma={idioma} /> */}
        <Inicio />
      </Headers>
      <Footer />


    </>
  )
}
