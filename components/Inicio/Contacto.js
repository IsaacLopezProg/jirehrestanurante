import Image from 'next/image';

import useConnection from '../../hooks/useConnect';

// EXTERNAL
import { Icon } from 'semantic-ui-react';

export default function Contacto() {


    // DESTRUCTURACION DE VALORES Y LLAMADO A LA API
    const { data, isLoading, isError } = useConnection('/schedule-homes');

    // if (isLoading) return <Spinner />
    // AGREGANDO EL LOADING
    if (isLoading) return <div className="flex justify-center m-8 p-8"><Icon loading name='spinner' size="massive" color="brown" /></div>
    // MOSTRANDO EL ERROR
    if (isError) return (<h2 className="text-center text-5xl text-amber-800 flex justify-center m-8 p-8 font-yellow"> A ocurrido un error </h2>)
    //   if (isError) return <Error />

    console.log(data);



    const horarioes = [
        {
            dia: 'Lunes - Sabado',
            horao: '7:00 a.m',
            horac: '6:00 p.m'
        },
        // {
        //     dia: 'Lunes',
        //     horao: '7:00 a.m',
        //     horac: '6:00 p.m'
        // },
        // {
        //     dia: 'Martes',
        //     horao: '7:00 a.m',
        //     horac: '6:00 p.m'
        // },
        // {
        //     dia: 'Miercoles',
        //     horao: '7:00 a.m',
        //     horac: '6:00 p.m'
        // },
        // {
        //     dia: 'Jueves',
        //     horao: '7:00 a.m',
        //     horac: '6:00 p.m'
        // },
        // {
        //     dia: 'Viernes',
        //     horao: '7:00 a.m',
        //     horac: '6:00 p.m'
        // },
        // {
        //     dia: 'Sabado',
        //     horao: '7:00 a.m',
        //     horac: '6:00 p.m'
        // },
    ]

    const horarioen = [
        {
            id: 0,
            dia: 'Monday - Saturday',
            horao: '7:00 a.m',
            horac: '6:00 p.m'
        },
        // {
        //     dia: 'Monday',
        //     horao: '7:00 a.m',
        //     horac: '6:00 p.m'
        // },
        // {
        //     dia: 'Tuesday',
        //     horao: '7:00 a.m',
        //     horac: '6:00 p.m'
        // },
        // {
        //     dia: 'Wednesday',
        //     horao: '7:00 a.m',
        //     horac: '6:00 p.m'
        // },
        // {
        //     dia: 'Thursday',
        //     horao: '7:00 a.m',
        //     horac: '6:00 p.m'
        // },
        // {
        //     dia: ' Friday ',
        //     horao: '7:00 a.m',
        //     horac: '6:00 p.m'
        // },
        // {
        //     dia: 'Saturday',
        //     horao: '7:00 a.m',
        //     horac: '6:00 p.m'
        // },
    ]

    return (
        <>
            <div className="mt-36">
                <h3 className="text-center text-7xl font-yellow">
                    Contact
                </h3>
                <div className="text-center">
                    <Image height={80} width={450} src="/img/divider/divider.png" alt="gente" />
                </div>
            </div>

            <div className="flex flex-col bg-amber-800  p-12">


                {/* REDES */}
                <div className="flex mt-8 md:mt-0 flex-col bg-amber-800">
                    <div className="text-white text-center">
                        <h3 className="my-4 text-xl md:text-3xl font-bold">

                            Information and Social Media
                        </h3>

                        <p lang="en" className="mt-4 text-sm md:text-xl">
                            Contact us through the different communication platforms.
                        </p>
                    </div>
                    <div className="PADRE md:flex md:flex-row justify-center ">
                        <div className="CORREO mt-8">
                            <div className="p-8 text-center bg-white text-amber-800 hover:bg-amber-600 m-4 hover:text-white">
                                <h4 className="font-bold  my-4 text-2xl ">Mail</h4>
                                <a href="mailto:jirehtropicalrestaurant@gmail.com" type="button" className="hidden text-white bg-red-600 hover:text-red-600 hover:bg-white font-medium rounded-lg text-xl px-5 py-2.5 text-center md:inline-flex items-center  mr-2 mb-2">
                                    <img className="mr-4" src="/img/icon/gmail3.png" />
                                    jirehtropicalrestaurant@gmail.com
                                </a>
                                <a href="mailto:jirehtropicalrestaurant@gmail.com" type="button" className="md:hidden text-white bg-red-600 hover:text-red-600 hover:bg-white font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
                                    <img className="mr-4" src="/img/icon/gmail3.png" />
                                    GMAIL
                                </a>
                            </div>
                        </div>
                        <div className="TELEFONO mt-8">
                            <div className="p-8 text-center bg-white text-amber-800 hover:bg-amber-600 m-4 hover:text-white">
                                <h4 className="font-bold  my-4 text-2xl ">Telephone</h4>
                                <a href="tel:+15707033824" type="button" className="text-white bg-black hover:text-black hover:bg-white font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
                                    {/* <img className="text-white" className="mr-4" src="/img/icon/phone.png" /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-12 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    ???+1 (570) 703-3824
                                </a>
                            </div>
                        </div>
                        <div className="REDES mt-8">
                            <div className="p-8 text-center bg-white text-amber-800 hover:bg-amber-600 m-4 hover:text-white">
                                <h4 className="font-bold  my-4 text-2xl ">Social Media</h4>
                                <div className="flex flex-col">
                                    {/* INSTAGRAM */}
                                    <a href="https://www.instagram.com/jirehtropicalsmoothie/" type="button" className="hidden text-white bg-purple-800 hover:text-purple-800 hover:bg-white font-medium rounded-lg text-xl px-5 py-2.5 text-center md:inline-flex items-center  mr-2 mb-2">
                                        <img className="mr-4 h-14 w-14" src="/img/icon/instagram.png" />
                                        jirehtropicalsmoothie
                                    </a>
                                    <a href="https://www.instagram.com/jirehtropicalsmoothie/" type="button" className="md:hidden text-white bg-purple-800 hover:text-purple-800 hover:bg-white font-medium rounded-lg text-xl md:px-5 px-2 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
                                        <img className="mr-4 h-14 w-14" src="/img/icon/instagram.png" />
                                        INSTAGRAM
                                    </a>
                                    {/*     FACEBOOK */}
                                    <a href="https://www.facebook.com/Jireh-Tropical-105032068837110" type="button" className="hidden text-white bg-blue-700 hover:text-blue-700 hover:bg-white font-medium rounded-lg text-xl px-5 py-2.5 text-center md:inline-flex items-center  mr-2 mb-2">
                                        <img className="mr-4 h-14 w-14" src="/img/icon/facebook.png" />
                                        Jireh Tropical
                                    </a>
                                    <a href="https://www.facebook.com/Jireh-Tropical-105032068837110" type="button" className="md:hidden text-white bg-blue-700 hover:text-blue-700 hover:bg-white font-medium rounded-lg text-xl md:px-5 px-2 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
                                        <img className="mr-4 h-14 w-14" src="/img/icon/facebook.png" />
                                        FACEBOOK
                                    </a>
                                    {/* TWITTER */}
                                    <a href="https://twitter.com/JirehTropical" type="button" className="hidden text-sky-600 hover:text-white hover:bg-sky-200 font-medium rounded-lg text-xl px-5 py-2.5 text-center md:inline-flex items-center  mr-2 mb-2">
                                        <img className="mr-4 h-14 w-14" src="/img/icon/twitter.png" />
                                        JirehTropical
                                    </a>
                                    <a href="https://twitter.com/JirehTropical" type="button" className="md:hidden text-sky-600 hover:text-white hover:bg-sky-200 font-medium rounded-lg text-xl md:px-5 px-2 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
                                        <img className="mr-4 h-14 w-14" src="/img/icon/twitter.png" />
                                        TWITTER
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div></div>

                    </div>

                </div>




                {/* HORARIO */}
                <div className="text-white text-center">
                    <h3 className="my-4  text-xl md:text-3xl font-bold">
                        Schedule
                    </h3>

                    <p className="mt-4 text-sm md:text-xl">
                        We are open all week from Monday to Saturday on regular hours. Sundays we do not work.
                    </p>
                </div>
                <div className="PADRE md:flex md:flex-row justify-center">


                    {data.map(h => (
                        <div key={h.id} lang="en" className="HORARIO mt-8">
                            <div className="p-8 text-center bg-white text-amber-800 hover:text-white hover:bg-amber-600 m-4">
                                <h4 className="font-bold  my-4 text-lg  md:text-2xl">{h.day}</h4>
                                <p className=" font-bold text-sm md:text-xl mt-4">{(h.open).slice(-12, 5)} - {h.close.slice(-12, 5)} </p>
                            </div>
                        </div>
                    ))
                    }

                    <div></div>

                </div>
            </div>
        </>
    )
}
