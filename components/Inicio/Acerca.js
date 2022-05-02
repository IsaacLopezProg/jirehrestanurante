// INTERNAL
import React from 'react';
// import Image from 'next/image';

import useConnection from '../../hooks/useConnect';

// EXTERNAL
import { Icon, Image } from 'semantic-ui-react';

export default function About() {

    // DESTRUCTURACION DE VALORES Y LLAMADO A LA API
    const { data, isLoading, isError } = useConnection('/about');

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
                    About us
                </h3>
                <div className="text-center flex justify-center">
                    <img height={80} width={450} src="/img/divider/divider.png" alt="gente" />
                </div>
            </div>


            <div className=" flex justify-center">

                <div className="md:flex md:row max-w-max mt-8 bg-amber-800 md:bg-white ">
                    <div className="FOTO md:basis-1/4 mt-8 bg-amber-800 mx-4 rounded-2xl flex justify-center">
                        <div className="mx-12 mb-8 pt-8 rounded-lg bg-amber-800">
                            {/* <div className="mx-12 mb-8 pt-8 rounded-lg bg-amber-800" style={{ height: '326.25px', width: '282.75px' }}> */}
                            <img className="h-72 w-56 rounded-2xl" src={data.Photo_left.url} alt="hombre" />
                            {/* <Image src={data.Photo_left.url} rounded size='large' /> */}
                        </div>
                    </div>
                    <div className="TEXTO mt-8 md:basis-2/4  mx-8 flex justify-center items-center bg-amber-800 rounded-2xl">
                        <div className=" text-center max-w-2xl justify-center ">
                            <h4 className=" font-bold text-xl md:text-3xl mt-8 text-white font-sans">
                                History
                            </h4>
                            <p className="text-sm md:text-xl  font-light text-white mt-4 mx-2">
                                {data.History_description}
                            </p>
                            <h4 className=" font-bold text-xl md:text-3xl mt-8 text-white font-sans">Vision</h4>
                            <p className="text-sm md:text-xl font-light text-white mt-4 text-center mx-2">
                                {data.Vision_description}
                            </p>
                        </div>
                    </div>
                    <div className="FOTO md:basis-1/4 mt-8 bg-amber-800 mx-4 flex justify-center rounded-2xl">
                        <div className="mx-12 pt-8 md:mb-8 md:pb-0 pb-4 rounded-lg">
                            <img className="h-72 w-56 rounded-2xl" src={data.Photo_rigth.url} alt="hombre" />
                            {/* <Image src={data.Photo_rigth.url} rounded size='small' /> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
