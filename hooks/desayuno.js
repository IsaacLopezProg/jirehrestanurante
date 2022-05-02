import React, { useState } from 'react';
import useConnection from './useConnection.js'

export function desayuno() {

    const [desayuno, setDesayuno] = useState(undefined)
    const { data, isLoading, isError } = useConnection('/breakfast-homes');
    setDesayuno(data);

    return desayuno;
}


// function prueba() {

// }
