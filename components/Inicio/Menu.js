import { useState } from 'react'
import { Tab } from '@headlessui/react';
import Image from 'next/image';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Menu() {
    let [categories] = useState({
        Desayuno: [
            {
                id: 1,
                title: 'Empanadas Venezolanas con Wasacaca ',
                precio: '2.50',
                ingrediente1: 'Queso',
                ingrediente2: 'Pollo y Queso',
                ingrediente3: 'Res',
            },
            {
                id: 2,
                title: 'Arepas venezolanas',
                precio: '3.00',
                ingrediente1: 'Queso',
                ingrediente2: 'Pollo y Queso',
                ingrediente3: 'Res',
            },
            {
                id: 3,
                title: 'Empanadas Dominicanas',
                precio: '2.00',
                ingrediente1: 'Queso',
                ingrediente2: 'Pollo y Queso',
                ingrediente3: 'Res',
                ingrediente4: 'pollo',
                ingrediente5: 'Jamon y Queso'
            },
            {
                id: 4,
                title: 'Arepas venezolanas',
                precio: '3.00',
                ingrediente1: 'Queso',
                ingrediente2: 'Pollo y Queso',
                ingrediente3: 'Res',
            },
            {
                id: 5,
                title: 'Arepas venezolanas',
                precio: '3.00',
                ingrediente1: 'Queso',
                ingrediente2: 'Pollo y Queso',
                ingrediente3: 'Res',
            },
            {
                id: 6,
                title: 'Quipes',
                precio: '2.00',
            },
            {
                id: 7,
                title: 'Yuca rellena',
                precio: '2.00',
            },
            {
                id: 8,
                title: 'Mangú con salami',
                precio: '6.50',
            },
            {
                id: 9,
                title: 'Los 4 golpes',
                precio: ' 8.50',
                ingrediente1: 'Huevo, Salami, Longaniza y Queso',
            },
            {
                id: 10,
                title: 'Side',
                precio: ' 3.00',
                ingrediente1: 'Platano Maduro',
                ingrediente2: 'Papas Fritas',
                ingrediente3: 'Guineitos',
                ingrediente4: 'Yuca',
                ingrediente5: 'Tostones'
            },
        ],
        Bebidas: [
            {
                id: 1,
                title: 'Batidas',
                precio: '3.50',
                ingrediente1: 'Guineos',
                ingrediente2: 'Fresa',
                ingrediente3: 'Mango',
                ingrediente4: 'Zapote',
                ingrediente5: 'Mora'
            },
            {
                id: 2,
                title: 'Jugos',
                precio: '3.00 - 5.50',
                ingrediente1: 'Naranja',
                ingrediente2: 'Chinola',
                ingrediente3: 'Limon',
                ingrediente4: 'Morir Soñando',
                ingrediente5: 'Piña Colada'
            },
            {
                id: 3,
                title: 'Bebidas Calientes',
                precio: '1.00 - 2.00',
                ingrediente1: 'Te',
                ingrediente2: 'Cafe',
                ingrediente3: 'Expresso',
                ingrediente4: 'Chocolate',
                ingrediente5: 'Cortadito'
            },
            {
                id: 4,
                title: 'Jugos Verdes',
                precio: '5.50',
                ingrediente1: 'Naranja Zanahoria',
                ingrediente2: 'Jireh Apple Detox',
                ingrediente3: 'Ginger Detoxify',
                ingrediente4: 'Booster',
            },
            {
                id: 5,
                title: 'Soda',
                precio: '1.00 - 3.00',
                ingrediente1: 'Coke',
                ingrediente2: 'Sprite',
                ingrediente3: 'Coconut Water',
                ingrediente4: 'Malta',
                ingrediente5: 'Agua'
            },
        ],
        Comida: [
            {
                id: 1,
                title: 'Ensalda',
                precio: '5.0 - 6.50',
                ingrediente1: 'Grill Chicken salad',
                ingrediente2: 'Cesar salad',
            },
            {
                id: 2,
                title: 'Lunch',
                precio: '6.00 - 11.0',
                ingrediente1: 'Patacon',
                ingrediente2: 'Yaroas',
                ingrediente3: 'Chicharrón de cerdo',
                ingrediente4: 'Chuleta ahumada'
            },
            {
                id: 3,
                title: 'Sopa',
                precio: '5.00 - 7.50',
                ingrediente1: 'Sopa de pollo',
                ingrediente2: 'Mondongo y Patimongo',
                ingrediente3: 'Sancocho',
                ingrediente4: 'Sopa de Res'
            },
            {
                id: 4,
                title: 'Pescado',
                precio: '16.00 - 37.00',
                ingrediente1: 'Tilapia entera, tostones y ensalada',
                ingrediente2: 'Camarones al ajillo',
                ingrediente3: 'Catering Bandeja de picaderas',
                ingrediente4: 'Bandejas'
            },

        ],
        Postre: [
            {
                id: 1,
                title: 'Postre',
                precio: '1.50 - 3.00',
                ingrediente1: 'Arepa',
                ingrediente2: 'Flan',
                ingrediente3: 'Tres leche',
                ingrediente4: 'Majarete'
            },
        ],
    })

    return (
        <>

            <div className="mt-36">
                <h3 className="text-center text-7xl font-yellow">
                    Nuestro Menu
                </h3>
                <div className="text-center">
                    <Image height={80} width={450} src="/img/divider/divider.png" alt="gente" />
                </div>
            </div>
            <div className="w-full px-2 py-16 sm:px-0">
                <Tab.Group>
                    <Tab.List className="flex p-1 space-x-1  bg-amber-800 rounded-xl">
                        {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full py-2.5 text-xl font-sans leading-5 font-bold text-amber-800 rounded-lg',

                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        {Object.values(categories).map((posts, idx) => (
                            <Tab.Panel
                                key={idx}
                                className={classNames(
                                    'bg-white rounded-xl p-3 ',
                                )}
                            >
                                <ul>
                                    {posts.map((post) => (
                                        <li
                                            key={post.id}
                                            className="relative p-3 rounded-md hover:bg-coolGray-100  "
                                        >
                                            <div className="flex justify-between lg:mx-80 md:mx-36">
                                                <div className="">
                                                    <h3 className="text-3xl text-amber-800 font-extrabold font-yellow leading-9">
                                                        {post.title}
                                                    </h3>
                                                    <ul className="md:flex mt-4 max-w-sm ml-8 space-x-1 text-xl font-sans font-medium leading-4 text-coolGray-500 block">
                                                        {/* <li>&middot;</li> */}
                                                        {/* <li>&middot;</li> */}
                                                        {
                                                            post.ingrediente1 ?
                                                                (
                                                                    <>
                                                                        <li className="leading-5">{post.ingrediente1}</li>
                                                                    </>

                                                                )
                                                                :
                                                                (
                                                                    null
                                                                )

                                                        }
                                                        {
                                                            post.ingrediente2 ?
                                                                (
                                                                    <>
                                                                        <li className="text-amber-800 hidden md:flex">/</li>
                                                                        <li className="md:mt-0 mt-2 leading-5">{post.ingrediente2}</li>
                                                                    </>

                                                                )
                                                                :
                                                                (
                                                                    null
                                                                )

                                                        }{
                                                            post.ingrediente3 ?
                                                                (
                                                                    <>
                                                                        <li className="text-amber-800 hidden md:flex">/</li>
                                                                        <li className="md:mt-0 mt-2 leading-5">{post.ingrediente3} </li>
                                                                    </>

                                                                )
                                                                :
                                                                (
                                                                    null
                                                                )

                                                        }
                                                        {
                                                            post.ingrediente4 ?
                                                                (
                                                                    <>
                                                                        <li className="text-amber-800 hidden md:flex">/</li>
                                                                        <li className="md:mt-0 mt-2 leading-5">{post.ingrediente4} </li>
                                                                        <li className="text-amber-800 hidden md:flex">/</li>
                                                                    </>

                                                                )
                                                                :
                                                                (
                                                                    null
                                                                )

                                                        }
                                                        {
                                                            post.ingrediente4 ?
                                                                (
                                                                    <>
                                                                        <li className="md:mt-0 mt-2 leading-5">{post.ingrediente5} </li>
                                                                    </>

                                                                )
                                                                :
                                                                (
                                                                    null
                                                                )

                                                        }

                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="text-xl">
                                                        <span className="text-amber-800 mr-2">$</span>{post.precio}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* <a
                                                href="#"
                                                className={classNames(
                                                    'absolute inset-0 rounded-md',
                                                    'focus:z-10 focus:outline-none focus:ring-2 ring-blue-400'
                                                )}
                                            /> */}
                                        </li>
                                    ))}
                                </ul>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </>
    )
}
