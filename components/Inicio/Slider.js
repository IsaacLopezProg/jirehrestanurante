import React, { useRef, useState } from "react";
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination, Autoplay } from "swiper";


export default function Slider() {




    return (

        <>
            <Swiper spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }} pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">
                <SwiperSlide className="IGLESIA bg-white w-full">
                    <div className="md:flex relative w-full" style={{ height: '600px' }}>
                        {/* <div className="md:flex relative"> */}
                        <Image src="/img/backup/comidap3.jpg"
                            // width={1800}
                            // height={400}
                            alt='foto1'
                            quality={100}
                            layout='fill'
                            objectFit="cover"
                            objectPosition="center"
                        />

                        <div className="absolute top-72 md:top-64 text-white text-center uppercase  w-full mx-auto my-auto " >
                            <h2 className="text-3xl md:text-6xl text-white" style={{ fontFamily: '"Yellowtail", cursive' }}>DELICIOSA COMIDA & BEBIDAS</h2>
                            <p className="text-xl md:text-3xl font-sans">Encuentra lo que tu necesitas ahora</p>
                            <button type="button" className="uppercase font-sans focus:outline-none text-white bg-amber-800 hover:bg-amber-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mt-2 dark:focus:ring-yellow-900">Comprar ahora!</button>

                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className="IGLESIA  w-full bg-black">
                    <div className="md:flex relative w-full  " style={{ height: '600px' }}>
                        <Image src="/img/backup/jugop3.jpg"
                            // width={1800}
                            // height={600}
                            alt='foto1'
                            quality={100}
                            layout='fill'
                            objectFit="cover"
                            objectPosition="center"
                        />
                        <div className="absolute top-72 md:top-64 text-white text-center uppercase  w-full mx-auto my-auto " >
                            <h2 className="text-3xl md:text-6xl text-white uppercase" style={{ fontFamily: '"Yellowtail", cursive' }}>Restaurante y Cafe</h2>
                            <p className="text-xl md:text-3xl font-sans">Encuentra lo que tu necesitas ahora</p>
                            <button type="button" className="uppercase font-sans focus:outline-none text-white bg-amber-800 hover:bg-amber-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mt-2 dark:focus:ring-yellow-900">Comprar ahora!</button>

                        </div>
                    </div></SwiperSlide>
                <SwiperSlide><div className="md:flex relative w-full" style={{ height: '600px' }}>
                    <Image src="/img/backup/restaurantep.jpg"
                        // width={500}
                        // height={300}
                        alt='foto1'
                        quality={100}
                        layout='fill'
                        objectFit="cover"
                        objectPosition="center"
                    />
                    <div className="absolute top-72 md:top-64 text-white text-center uppercase  w-full mx-auto my-auto " >
                        <h2 className="text-3xl md:text-6xl text-white uppercase" style={{ fontFamily: '"Yellowtail", cursive' }}>Excelcente y Rapido Servicio</h2>
                        <p className="text-xl md:text-3xl font-sans">Encuentra lo que tu necesitas ahora</p>
                        <button type="button" className="uppercase font-sans focus:outline-none text-white bg-amber-800 hover:bg-amber-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mt-2 dark:focus:ring-yellow-900">Comprar ahora!</button>

                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
