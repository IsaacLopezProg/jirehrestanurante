import React from 'react';
import Image from 'next/image';

export default function Contacto() {


    const horario = [
        {
            dia: 'Lunes',
            horao: '7:00 a.m',
            horac: '6:00 p.m'
        },
        {
            dia: 'Martes',
            horao: '7:00 a.m',
            horac: '6:00 p.m'
        },
        {
            dia: 'Miercoles',
            horao: '7:00 a.m',
            horac: '6:00 p.m'
        },
        {
            dia: 'Jueves',
            horao: '7:00 a.m',
            horac: '6:00 p.m'
        },
        {
            dia: 'Viernes',
            horao: '7:00 a.m',
            horac: '6:00 p.m'
        },
        {
            dia: 'Sabado',
            horao: '7:00 a.m',
            horac: '6:00 p.m'
        },
    ]

    // const redes = [

    // ]

    let ejemplo = 'bg-black'

    return (
        <>
            <div className="mt-36">
                <h3 className="text-center text-7xl font-yellow">
                    Nuestro Contacto
                </h3>
                <div className="text-center">
                    <Image height={80} width={450} src="/img/divider/divider.png" alt="gente" />
                </div>
            </div>

            <div className="flex flex-col bg-amber-800  p-12">
                {/* HORARIO */}
                <div className="text-white text-center">
                    <h3 className="my-4  text-xl md:text-3xl font-bold">
                        Horario.
                    </h3>
                    <p className="mt-4 text-sm md:text-xl">
                        Estamos abiertos toda la semana de lunes a sabado en horario corrido. Domingos no laboramos.
                    </p>
                </div>
                <div className="PADRE md:flex md:flex-row ">
                    {
                        horario.map(h => (
                            <div className="HORARIO mt-8">
                                <div className="p-8 text-center bg-white text-amber-800 hover:text-white hover:bg-amber-600 m-4">
                                    <h4 className="font-bold  my-4 text-lg  md:text-2xl">{h.dia}</h4>
                                    <p className=" font-bold text-sm md:text-xl mt-4">{h.horao} - {h.horac} </p>
                                </div>
                            </div>
                        ))
                    }
                    <div></div>

                </div>
                {/* REDES */}
                <div className="flex flex-col bg-amber-800">
                    <div className="text-white text-center">
                        <h3 className="my-4 text-xl md:text-3xl font-bold">
                            Informacion y Redes.
                        </h3>
                        <p className="mt-4 text-sm md:text-xl">
                            Contactate con nosotros atravez de las diferentes plataformas de cominicacion.
                        </p>
                    </div>
                    <div className="PADRE md:flex md:flex-row justify-center ">
                        <div className="CORREO mt-8">
                            <div className="p-8 text-center bg-white text-amber-800 hover:bg-amber-600 m-4 hover:text-white">
                                <h4 className="font-bold  my-4 text-2xl ">Correo</h4>
                                <a href="mailto:jirehtropicalrestaurant@gmail.com" type="button" class="hidden text-white bg-red-600 hover:text-red-600 hover:bg-white font-medium rounded-lg text-xl px-5 py-2.5 text-center md:inline-flex items-center  mr-2 mb-2">
                                    <img className="mr-4" src="/img/icon/gmail3.png" />
                                    jirehtropicalrestaurant@gmail.com
                                </a>
                                <a href="mailto:jirehtropicalrestaurant@gmail.com" type="button" class="md:hidden text-white bg-red-600 hover:text-red-600 hover:bg-white font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
                                    <img className="mr-4" src="/img/icon/gmail3.png" />
                                    GMAIL
                                </a>
                            </div>
                        </div>
                        <div className="TELEFONO mt-8">
                            <div className="p-8 text-center bg-white text-amber-800 hover:bg-amber-600 m-4 hover:text-white">
                                <h4 className="font-bold  my-4 text-2xl ">Telefono</h4>
                                <a href="#" type="button" class="text-white bg-black hover:text-black hover:bg-white font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
                                    {/* <img className="text-white" className="mr-4" src="/img/icon/phone.png" /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-12 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    ‎+1 (570) 703-3824
                                </a>
                            </div>
                        </div>
                        <div className="REDES mt-8">
                            <div className="p-8 text-center bg-white text-amber-800 hover:bg-amber-600 m-4 hover:text-white">
                                <h4 className="font-bold  my-4 text-2xl ">Redes</h4>
                                <a href="https://www.instagram.com/jirehtropicalsmoothie/" type="button" className="hidden text-white bg-purple-800 hover:text-purple-800 hover:bg-white font-medium rounded-lg text-xl px-5 py-2.5 text-center md:inline-flex items-center  mr-2 mb-2">
                                    <img className="mr-4 h-14 w-14" src="/img/icon/instagram.png" />
                                    jirehtropicalsmoothie
                                </a>
                                <a href="https://www.instagram.com/jirehtropicalsmoothie/" type="button" className="md:hidden text-white bg-purple-800 hover:text-purple-800 hover:bg-white font-medium rounded-lg text-xl md:px-5 px-2 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
                                    <img className="mr-4 h-14 w-14" src="/img/icon/instagram.png" />
                                    INSTAGRAM
                                </a>
                            </div>
                        </div>

                        <div></div>

                    </div>

                </div>
            </div>
        </>
    )
}
