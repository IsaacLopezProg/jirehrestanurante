import React from 'react';
import Image from 'next/image';


export default function Servicios() {

    const servicios = [
        {
            titulo: "Comida Rapida",
            descripcion: "Contamos con gran variedad de comida rapidas y bebidas, que sabemos que te va a encantar.",
            foto: "/img/servicios/comida3.jpg",
            boton: "Ver Menu",
            link: ""
        },
        {
            titulo: "Comida Criolla",
            descripcion: "Disfruta del sabor, de la especialidad de la casa, plastos criollos exquisitos y de alta calidad.",
            foto: "/img/servicios/criolla.jpeg",
            boton: "Ver Menu",
            link: ""
        },
    ]

    const servicios2 = [
        {
            titulo: "Envios o Delivery",
            descripcion: "Cuando quieras y donde quieras, realiza tu pedidos y en unos minutos estaras disfrutando de tu orden.",
            foto: "/img/servicios/delive.jpg",
            boton: "Pedir Ya",
            link: ""
        },
        {
            titulo: "Drive Thru",
            descripcion: "Vas rapido y no te quieres desmontar de tu auto, no hay problema, te recibimos por nuestra area para vehiculos.",
            foto: "/img/servicios/drive.jpeg",
            boton: "Pedir Ya",
            link: ""
        }
    ]

    return (
        <>


            <div className="mt-16">
                <h3 className="text-6xl md:text-7xl align-items text-center" style={{ fontFamily: '"Yellowtail", cursive' }}>Nuestro Servicios</h3>
                <div className="align-items text-center">
                    <Image height={80} width={450} src="/img/divider/divider.png" alt="divider" />

                </div>
            </div>


            <div className="flex col">
                <div className="PADRE md:flex md:row md:justify-around grow mt-8">
                    {
                        servicios.map(s => (
                            <div className="max-w-sm  rounded-lg border  shadow-md bg-amber-800 border-amber-700 mt-4 ml-2">
                                <a href="#">
                                    {/* <Image width={380} height={240} className="rounded-t-lg" src="" alt="foto" /> */}
                                    <img className="rounded-t-lg" src={s.foto} style={{ height: '240px', width: '380px' }} alt="foto" />
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
                    }

                </div>
                <div className="PADRE md:flex md:row md:justify-around grow mt-8">
                    {
                        servicios2.map(s => (
                            <div className="max-w-sm  rounded-lg border  shadow-md bg-amber-800 border-amber-700 mt-4 ml-2 mr-2">
                                <a href="#">
                                    {/* <Image width={380} height={240} className="rounded-t-lg" src="" alt="foto" /> */}
                                    <img className="rounded-t-lg" src={s.foto} style={{ height: '240px', width: '380px' }} alt="foto" />
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
                    }
                </div>
            </div>
        </>
    )
}
