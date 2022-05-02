import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination, Autoplay } from "swiper";

// IMG
import comida from "/public/img/slider/comida.jpeg";
import jugo from "/public/img/slider/jugo2.jpeg";
import restaurante from "/public/img/slider/restaurante2.jpeg";


export default function Slider({ idioma }) {

    // CONTENIDO
    const cares = [
        {
            titulo: 'DELICIOSAS COMIDAS & BEBIDAS',
            descripcion: 'Encuentra lo que tu necesitas ahora',
            boton: 'Ordena ya',
            foto: comida
        },
        {
            titulo: 'Restaurante y Cafe',
            descripcion: 'Encuentra lo que tu necesitas ahora',
            boton: 'Ordena ya',
            foto: jugo
        },
        {
            titulo: 'Excelente y Rapido Servicio',
            descripcion: 'Encuentra lo que tu necesitas ahora',
            boton: 'Ordena ya',
            foto: restaurante
        },
    ]

    const caren = [
        {
            id: 0,
            titulo: 'DELICIOUS FOOD & DRINKS',
            descripcion: 'Find what you need now',
            boton: 'Order now',
            foto: comida
        },
        {
            id: 1,
            titulo: 'Restaurant & Cafe',
            descripcion: 'Find what you need now',
            boton: 'Order now',
            foto: jugo
        },
        {
            id: 2,
            titulo: 'Excellent & Fast Service',
            descripcion: 'Find what you need now',
            boton: 'Order now',
            foto: restaurante
        },
    ]




    return (

        <>
            <Swiper spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }} pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">

                {caren.map(c => (
                    <SwiperSlide key={c.id} className="IGLESIA  w-full bg-black">
                        <div lang="en" className="md:flex relative w-full  " style={{ height: '600px' }}>
                            <Image src={c.foto}
                                alt='foto1'
                                quality={100}
                                layout='fill'
                                objectFit="cover"
                                objectPosition="center"
                            />
                            <div className="absolute top-72 md:top-64 text-white text-center uppercase  w-full mx-auto my-auto " >
                                <h2 className="text-3xl md:text-6xl text-white uppercase" style={{ fontFamily: '"Yellowtail", cursive' }}>{c.titulo}</h2>
                                <p className="text-xl md:text-3xl font-sans">{c.descripcion}</p>
                                <button type="button" className="uppercase font-sans focus:outline-none text-white bg-amber-800 hover:bg-amber-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mt-2 dark:focus:ring-yellow-900">{c.boton}</button>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    )
}
