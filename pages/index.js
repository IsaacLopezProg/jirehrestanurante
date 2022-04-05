import React, { useEffect, useState } from 'react';
import Headers from '../layout/Headers';
import Inicio from '../components/Inicio/espanol';

export default function index() {

  const [idioma, setIdioma] = useState('');

  useEffect(() => {

    if (navigator.language) {
      const lang = (navigator.language).slice(0, 2);
      // console.log(lang);
      setIdioma(lang);
    }


  }, [])

  console.log(idioma);


  return (
    <>
      {
        idioma === 'es' ?
          <Headers>
            <Inicio />
          </Headers>
          :
          null

      }

    </>
  )
}
