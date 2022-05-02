// INTERNAL
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import useConnection from '../../hooks/useConnect';

// EXTERNAL
import { Icon } from 'semantic-ui-react';




export default function Cheff() {

    // DESTRUCTURACION DE VALORES Y LLAMADO A LA API
    const { data, isLoading, isError } = useConnection('/cheff');

    // if (isLoading) return <Spinner />
    // AGREGANDO EL LOADING
    if (isLoading) return <div className="flex justify-center m-8 p-8"><Icon loading name='spinner' size="massive" color="brown" /></div>
    // MOSTRANDO EL ERROR
    if (isError) return (<h2 className="text-center text-5xl text-amber-800 flex justify-center m-8 p-8 font-yellow"> A ocurrido un error </h2>)
    //   if (isError) return <Error />

    return (
        <>

            <div className="mt-24">
                <h3 className="text-center text-6xl md:text-7xl font-yellow">
                    Cheff
                </h3>
                <div className="text-center">
                    <Image height={80} width={450} src="/img/divider/divider.png" alt="gente" />
                </div>
            </div>

            <div className="p-4 mt-16">
                <div className="flex items-center space-y-24 md:space-y-0 flex-col md:flex-row justify-evenly">
                    <div className="p-4 relative">
                        <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
                            <a href="#" className="block relative">
                                <img alt="profil" src={data.photo.url} className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800" />
                            </a>
                        </div>
                        <div className="bg-amber-800 rounded-lg shadow px-8 py-4 pt-24">
                            <div className="text-center">
                                <p className="text-xl md:text-5xl first-line:text-white">
                                    {data.Name}
                                </p>
                                <p className="text-lg md:text-3xl text-gray-200 font-light">
                                    {data.Lastname}
                                </p>
                                <p class="text-base md:text-lg  w-60 text-gray-200 mx-auto py-4 font-light">
                                    {data.Description}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}
