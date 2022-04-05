import React, { useEffect, useState } from 'react';
import Headers from '../layout/Headers';
import Inicio from '../components/Inicio/Index';

export default function index() {

  const [idioma, setIdioma] = useState('');

  useEffect(() => {

    if (navigator.language) {
      const lang = (navigator.language).slice(0, 2);
      setIdioma(lang);
    }

  }, [])


  return (
    <>
      <Headers >
        <Inicio idioma={idioma} />
      </Headers>


    </>
  )
}
