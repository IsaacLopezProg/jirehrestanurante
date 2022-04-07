import React from 'react';
import Image from 'next/image';

export default function About({ idioma }) {

    return (
        <>
            <div className="mt-24">
                <h3 className="text-center text-6xl md:text-7xl font-yellow">
                    {idioma === 'es' ? 'Acerca de Nosotros' : 'About us'}
                </h3>
                <div className="text-center">
                    <Image height={80} width={450} src="/img/divider/divider.png" alt="gente" />
                </div>
            </div>

            {/* <div className="md:flex md:col bg-amber-800"> */}


            {/* ITEM 1 */}
            {/* <div className="md:flex md:row max-w-4xl mt-8">
                    <div className="FOTO md:basis-1/2 mt-8">
                        <div className="mx-12 mb-8  pt-4">
                            <Image className="border rounded-full" height={700} width={650} src="/img/acerca/hombre2.jpg" alt="hombre" />
                        </div>
                    </div>
                    <div className="TEXTO md:basis-1/2 mt-36 mx-8 ">
                        <div className="md:text-left text-center mt-4">
                            <h4 className=" font-bold text-2xl text-white">
                                Historia
                            </h4>
                            <p className=" text-normal font-light text-slate-400 mt-4">Occaecat ullamco anim est anim.Labore laboris ipsum dolor amet minim. Ipsum do qui officia occaecat quis.Adipisicing irure quis dolore ut deserunt commodo.</p> */}
            {/* <h4 className=" font-bold text-2xl mt-8 text-white">Vision</h4>
                            <p className=" text-normal font-light text-slate-400 mt-4">Duis ipsum ullamco occaecat cillum laboris incididunt laboris enim ad eu ut id sint. Culpa in nostrud qui deserunt ea laborum reprehenderit amet. Occaecat exercitation voluptate elit qui.</p> */}
            {/* </div>
                    </div>
                </div> */}
            {/* ITEM 2 */}
            {/* <div className="md:flex md:row max-w-4xl mt-8">
                    <div className="FOTO md:basis-1/2 mt-8">
                        <div className="mx-12 mb-8  pt-4 rounded-lg">
                            <Image height={700} width={650} src="/img/acerca/hombre2.jpg" alt="hombre" />
                        </div>
                    </div>
                    <div className="TEXTO md:basis-1/2 mt-8 mx-8">
                        <div className="md:text-left text-center mt-4">
                            <h4 className=" font-bold text-2xl text-white">
                                Historia
                            </h4>
                            <p className=" text-normal font-light text-slate-400 mt-4">Occaecat ullamco anim est anim.Labore laboris ipsum dolor amet minim.</p>
                            <h4 className=" font-bold text-2xl mt-8 text-white">Vision</h4>
                            <p className=" text-normal font-light text-slate-400 mt-4">Aliqua commodo in sint nostrud exercitation anim consequat laborum est. Enim nisi proident exercitation aute elit velit occaecat irure anim. Ad do elit dolor Lorem minim ad elit. Ut exercitation sit mollit fugiat exercitation dolor consectetur magna aute. Minim commodo commodo incididunt officia ad et aliqua enim exercitation deserunt. Sunt aliqua velit quis mollit consectetur minim cupidatat. </p>
                        </div>
                    </div>
                </div>
            </div> */}


            {/* <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="">
                    <Image height={700} width={650} src="/img/acerca/hombre2.jpg" alt="hombre" />
                </div>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </a> */}

            <div className=" ">


                {/* ITEM 1 */}
                {/* <div className="md:flex md:row max-w-4xl mt-8">
                    <div className="FOTO md:basis-1/2 mt-8">
                        <div className="mx-12 mb-8  pt-4">
                            <Image className="border rounded-full" height={700} width={650} src="/img/acerca/hombre2.jpg" alt="hombre" />
                        </div>
                    </div>
                    <div className="TEXTO md:basis-1/2 mt-36 mx-8 ">
                        <div className="md:text-left text-center mt-4">
                            <h4 className=" font-bold text-2xl text-white">
                                Historia
                            </h4>
                            <p className=" text-normal font-light text-slate-400 mt-4">Occaecat ullamco anim est anim.Labore laboris ipsum dolor amet minim. Ipsum do qui officia occaecat quis.Adipisicing irure quis dolore ut deserunt commodo.</p>
                            <h4 className=" font-bold text-2xl mt-8 text-white">Vision</h4>
                        <p className=" text-normal font-light text-slate-400 mt-4">Duis ipsum ullamco occaecat cillum laboris incididunt laboris enim ad eu ut id sint. Culpa in nostrud qui deserunt ea laborum reprehenderit amet. Occaecat exercitation voluptate elit qui.</p>
                        </div>
                    </div>
                </div> */}
                {/* ITEM 2 */}
                <div className="md:flex md:row max-w-max mt-8 bg-amber-800 md:bg-white">
                    <div className="FOTO md:basis-1/4 mt-8 bg-amber-800 mx-4">
                        <div className="mx-12 mb-8 pt-8 rounded-lg bg-amber-800">
                            {/* <div className="mx-12 mb-8 pt-8 rounded-lg bg-amber-800" style={{ height: '326.25px', width: '282.75px' }}> */}
                            <Image height={750} width={650} src="/img/acerca/mujer.jpeg" alt="hombre" />
                        </div>
                    </div>
                    <div className="TEXTO mt-8 md:basis-2/4  mx-8 flex justify-center items-center bg-amber-800">
                        <div className=" text-center max-w-2xl justify-center ">
                            <h4 className=" font-bold text-xl md:text-3xl mt-8 text-white font-sans">
                                {idioma === 'es' ? 'Historia' : 'History'}
                            </h4>
                            <p className="text-xs md:text-xl  font-light text-white mt-4">{idioma === 'es' ? 'Establecido por Yahaira Burgos De Vicente' : 'Set by Yahaira Burgos De Vicente'}
                                18 Junio 2022.</p>
                            <h4 className=" font-bold text-xl md:text-3xl mt-8 text-white font-sans">Vision</h4>
                            {idioma === 'es' ?
                                (

                                    <p lang="es" className="text-xs md:text-xl font-light text-white mt-4">
                                        Una Empresa familiar dedicada a servir a nuestra comunidad.
                                        <br />
                                        Cubriendo las necesidades alimentarias y nutricionales con nuestra gama de servicios y gran variedad de comidas saludables.
                                    </p>
                                )
                                :
                                (
                                    <p lang="en" className="text-xs md:text-xl font-light text-white mt-4">
                                        A family business dedicated to serving our community.
                                        <br />
                                        Covering food and nutritional needs with our range of services and a wide variety of healthy meals.
                                    </p>
                                )
                            }
                        </div>
                    </div>
                    <div className="FOTO md:basis-1/4 mt-8 bg-amber-800 mx-4">
                        <div className="mx-12 pt-8 md:mb-8 md:pb-0 pb-4 rounded-lg">
                            <Image height={750} width={650} src="/img/acerca/home.jpeg" alt="hombre" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
