import React, { useState } from 'react'

// HOOK DE NEXT PARA UTILIZAR LOS DATOS SIN USE_EFFECT, 
// SIN SERVER_SIDE_RENDER O STATIC_SIDE, 
// ESCALABLE HASTA EL NIVEL DE TODOS LOS COMPONENTES
// Docs. https://swr.vercel.app/docs/getting-started
import useSWR from 'swr';

// FUNCION QUE EJECUTA EL FECTH
const fetcher = (...args) => fetch(...args).then(res => res.json())

// HOOK PARA HACER LA LLAMADA Y DEVOLVER LOS VALORES
export default function useConnection(path) {
    // LLAMADA DE LA URL
    const url = process.env.NEXT_PUBLIC_URL;
    // PETICION
    const { data, error } = useSWR(`${url}${path}`, fetcher)

    // console.log(url)

    // DEVUELTA DE VALORES
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}

export function desayuno() {

    const [desayuno, setDesayuno] = useState(undefined)
    const { data, isLoading, isError } = useConnection('/breakfast-homes');
    setDesayuno(data);

    return desayuno;
}