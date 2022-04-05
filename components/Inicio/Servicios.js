import React from 'react';
import Image from 'next/image';

// IMG
import deliver from '/public/img/servicios/delive.webp';
import criolla from '/public/img/servicios/criolla.webp';
import drive from '/public/img/servicios/drive.jpeg';
import comida from '/public/img/servicios/comida.webp'

export default function Servicios({ idioma }) {

    const servicioses = [
        {
            titulo: "Comida Rapida",
            descripcion: "Contamos con gran variedad de comida rapida y bebidas, que sabemos que te va a encantar.",
            foto: comida,
            boton: "Ver Menu",
            link: ""
        },
        {
            titulo: "Comida Criolla",
            descripcion: "Disfruta del sabor, de la especialidad de la casa, platos criollos exquisitos y de alta calidad.",
            foto: criolla,
            boton: "Ver Menu",
            link: ""
        },
    ]

    const serviciosen = [
        {
            titulo: "Fast food",
            descripcion: "We have a wide variety of fast food and drinks, which we know you will love.",
            foto: comida,
            boton: "See Menu",
            link: ""
        },
        {
            titulo: "Creole Food",
            descripcion: "Enjoy the flavor, the specialty of the house, exquisite and high quality Creole dishes.",
            foto: criolla,
            boton: "See Menu",
            link: ""
        },
    ]

    const serviciosen2 = [
        {
            titulo: "Delivery",
            descripcion: "Whenever and wherever you want, place your orders and in a few minutes you will be enjoying your order.",
            foto: deliver,
            boton: "Order Now",
            link: ""
        },
        {
            titulo: "Drive Thru",
            descripcion: "You go fast and you don't want to get out of your car, no problem, we welcome you to our area for vehicles.",
            foto: drive,
            boton: "Order Now",
            link: ""
        }
    ]

    const servicioses2 = [
        {
            titulo: "Envios",
            descripcion: "Cuando quieras y donde quieras, realiza tu pedidos y en unos minutos estaras disfrutando de tu orden.",
            foto: deliver,
            boton: "Pedir Ya",
            link: ""
        },
        {
            titulo: "Drive Thru",
            descripcion: "Vas rapido y no te quieres desmontar de tu auto, no hay problema, te recibimos por nuestra area para vehiculos.",
            foto: drive,
            boton: "Pedir Ya",
            link: ""
        }
    ]

    return (
        <>


            <div className="mt-16">
                <h3 className="text-6xl md:text-7xl align-items text-center" style={{ fontFamily: '"Yellowtail", cursive' }}>
                    {idioma === 'es' ? 'Servicios' : 'Services'}
                </h3>
                <div className="align-items text-center">
                    <Image height={80} width={450} src="/img/divider/divider.png" alt="divider" />

                </div>
            </div>


            <div className="flex col">
                <div className="PADRE md:flex md:row md:justify-around grow mt-8">
                    {
                        idioma === 'es' ?
                            (
                                servicioses.map(s => (
                                    <div lang="es" className="max-w-sm  rounded-lg border  shadow-md bg-amber-800 border-amber-700 mt-4 ml-2">
                                        <a href="#">
                                            <Image width={380} height={240} className="rounded-t-lg" src={s.foto} alt="foto" />
                                            {/* <img className="rounded-t-lg" src={s.foto} style={{ height: '240px', width: '380px' }} alt="foto" /> */}
                                        </a>
                                        <div className="p-5">
                                            <a href="#">
                                                <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight  text-white">{s.titulo}</h5>
                                            </a>
                                            <p className="mb-3 font-normal text-gray-200 text-xs md:text-xl">{s.descripcion}</p>
                                            <a href="#" class="inline-flex items-center py-2 px-3 text-normal font-bold text-center text-amber-800 hover:text-white  rounded-lg  focus:ring-4 focus:outline-none  bg-white hover:bg-amber-600 focus:ring-amber-600">
                                                {s.boton}
                                                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                ))
                            )
                            :
                            (
                                serviciosen.map(s => (
                                    <div lang="en" className="max-w-sm  rounded-lg border  shadow-md bg-amber-800 border-amber-700 mt-4 ml-2">
                                        <a href="#">
                                            <Image width={380} height={240} className="rounded-t-lg" src={s.foto} alt="foto" />
                                            {/* <img className="rounded-t-lg" src={s.foto} style={{ height: '240px', width: '380px' }} alt="foto" /> */}
                                        </a>
                                        <div className="p-5">
                                            <a href="#">
                                                <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight  text-white">{s.titulo}</h5>
                                            </a>
                                            <p className="mb-3 font-normal text-gray-200 text-xs md:text-xl">{s.descripcion}</p>
                                            <a href="#" class="inline-flex items-center py-2 px-3 text-normal font-bold text-center text-amber-800 hover:text-white  rounded-lg  focus:ring-4 focus:outline-none  bg-white hover:bg-amber-600 focus:ring-amber-600">
                                                {s.boton}
                                                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                ))
                            )

                    }

                </div>
                <div className="PADRE md:flex md:row md:justify-around grow mt-8">
                    {
                        idioma === 'es' ?
                            (
                                servicioses2.map(s => (
                                    <div lang="es" className="max-w-sm  rounded-lg border  shadow-md bg-amber-800 border-amber-700 mt-4 ml-2 mr-2">
                                        <a href="#">
                                            <Image width={380} height={240} className="rounded-t-lg" src={s.foto} alt="foto" />
                                            {/* <img className="rounded-t-lg" src={s.foto} style={{ height: '240px', width: '380px' }} alt="foto" /> */}
                                        </a>
                                        <div className="p-5">
                                            <a href="#">
                                                <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight  text-white">{s.titulo}</h5>
                                            </a>
                                            <p className="mb-3 font-normal text-gray-200 text-xs md:text-xl">{s.descripcion}</p>
                                            <a href="#" class="inline-flex items-center py-2 px-3 text-normal font-bold text-center text-amber-800 hover:text-white  rounded-lg  focus:ring-4 focus:outline-none  bg-white hover:bg-amber-600 focus:ring-amber-600">
                                                {s.boton}
                                                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                ))
                            )
                            :
                            (
                                serviciosen2.map(s => (
                                    <div lang="en" className="max-w-sm  rounded-lg border  shadow-md bg-amber-800 border-amber-700 mt-4 ml-2 mr-2">
                                        <a href="#">
                                            <Image width={380} height={240} className="rounded-t-lg" src={s.foto} alt="foto" />
                                            {/* <img className="rounded-t-lg" src={s.foto} style={{ height: '240px', width: '380px' }} alt="foto" /> */}
                                        </a>
                                        <div className="p-5">
                                            <a href="#">
                                                <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight  text-white">{s.titulo}</h5>
                                            </a>
                                            <p className="mb-3 font-normal text-gray-200 text-xs md:text-xl">{s.descripcion}</p>
                                            <a href="#" class="inline-flex items-center py-2 px-3 text-normal font-bold text-center text-amber-800 hover:text-white  rounded-lg  focus:ring-4 focus:outline-none  bg-white hover:bg-amber-600 focus:ring-amber-600">
                                                {s.boton}
                                                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                ))
                            )
                    }
                </div>
            </div>
        </>
    )
}
