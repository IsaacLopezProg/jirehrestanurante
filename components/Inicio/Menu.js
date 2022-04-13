import { useState } from 'react';
import { Tab } from '@headlessui/react';
import Image from 'next/image';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Menu({ idioma }) {
    let [categorias] = useState({
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
                title: 'Arepas Venezolanas',
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
                ingrediente4: 'Pollo',
                ingrediente5: 'Jamon y Queso'
            },
            {
                id: 4,
                title: 'Arepas Venezolanas',
                precio: '3.00',
                ingrediente1: 'Queso',
                ingrediente2: 'Pollo y Queso',
                ingrediente3: 'Res',
            },
            {
                id: 5,
                title: 'Quipes',
                precio: '2.00',
            },
            {
                id: 6,
                title: 'Yuca Rellena',
                precio: '2.00',
            },
            {
                id: 7,
                title: 'Mangú con Salami',
                precio: '6.50',
            },
            {
                id: 8,
                title: 'Los 4 Golpes',
                precio: ' 8.50',
                ingrediente1: 'Huevo, Salami, Longaniza y Queso',
            },
            {
                id: 9,
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
                ingrediente1: 'Cola',
                ingrediente2: 'Sprite',
                ingrediente3: 'Agua de Coco',
                ingrediente4: 'Malta',
                ingrediente5: 'Agua'
            },
            {
                id: 5,
                title: 'Aviso',
                precio: 'Gracias',
                ingrediente1: 'Somos cristianos no vendemos alcohol, mojitos, o vinos.',
            },
        ],
        Comida: [
            {
                id: 1,
                title: 'Ensalda',
                precio: '5.0 - 6.50',
                ingrediente1: 'Ensalada De Pollo A La Parrilla',
                ingrediente2: 'Ensalada Cesar',
            },
            {
                id: 2,
                title: 'Almuerzo',
                precio: '6.00 - 11.0',
                ingrediente1: 'Patacon',
                ingrediente2: 'Yaroas',
                ingrediente3: 'Chicharrón de Cerdo',
                ingrediente4: 'Chuleta Ahumada'
            },
            {
                id: 3,
                title: 'Sopa',
                precio: '5.00 - 7.50',
                ingrediente1: 'Sopa de Pollo',
                ingrediente2: 'Mondongo y Patimongo',
                ingrediente3: 'Sancocho',
                ingrediente4: 'Sopa de Res'
            },
            {
                id: 4,
                title: 'Pescado',
                precio: '16.00 - 37.00',
                ingrediente1: 'Tilapia entera, Tostones y Ensalada',
                ingrediente2: 'Camarones al Ajillo',
                ingrediente3: 'Catering Bandeja de Picaderas',
                ingrediente4: 'Bandejas'
            },

        ],
        Postre: [
            {
                id: 1,
                title: 'Delicias',
                precio: '1.50 - 3.00',
                ingrediente1: 'Arepa',
                ingrediente2: 'Flan',
                ingrediente3: 'Tres leche',
                ingrediente4: 'Majarete'
            },
        ],
    })

    let [categoriasen] = useState({
        Breakfast: [
            {
                id: 1,
                title: 'Empanadas Venezolanas con Wasacaca ',
                precio: '2.50',
                ingrediente1: 'Cheese',
                ingrediente2: 'Chicken y Cheese',
                ingrediente3: 'Beef',
            },
            {
                id: 2,
                title: 'Arepas Venezolanas',
                precio: '3.00',
                ingrediente1: 'Cheese',
                ingrediente2: 'Chicken y Cheese',
                ingrediente3: 'Beef',
            },
            {
                id: 3,
                title: 'Empanadas Dominicanas',
                precio: '2.00',
                ingrediente1: 'Cheese',
                ingrediente2: 'Chicken y Cheese',
                ingrediente3: 'Beef',
                ingrediente4: 'Chicken',
                ingrediente5: 'Ham y Cheese'
            },
            {
                id: 4,
                title: 'Arepas Venezolanas',
                precio: '3.00',
                ingrediente1: 'Cheese',
                ingrediente2: 'Chicken y Cheese',
                ingrediente3: 'Beef',
            },
            {
                id: 5,
                title: 'Quipes',
                precio: '2.00',
            },
            {
                id: 6,
                title: 'Yuca Rellena',
                precio: '2.00',
            },
            {
                id: 7,
                title: 'Mangu with Salami',
                precio: '6.50',
            },
            {
                id: 8,
                title: 'Los 4 Golpes',
                precio: ' 8.50',
                ingrediente1: 'Egg, Salami, Sausage and Cheese',
            },
            {
                id: 9,
                title: 'Side',
                precio: ' 3.00',
                ingrediente1: 'Ripe Banana',
                ingrediente2: 'French Fries',
                ingrediente3: 'Guineitos',
                ingrediente4: 'Yuca',
                ingrediente5: 'Tostones'
            },
        ],
        Drinks: [
            {
                id: 1,
                title: 'Whipped',
                precio: '3.50',
                ingrediente1: 'bananas',
                ingrediente2: 'Strawberry',
                ingrediente3: 'Mango',
                ingrediente4: 'Zapote',
                ingrediente5: 'Blackberry'
            },
            {
                id: 2,
                title: 'Juices',
                precio: '3.00 - 5.50',
                ingrediente1: 'Orange',
                ingrediente2: 'Chinola',
                ingrediente3: 'Lemon',
                ingrediente4: 'Morir Soñando',
                ingrediente5: 'Piña Colada'
            },
            {
                id: 3,
                title: 'Hot Drinks',
                precio: '1.00 - 2.00',
                ingrediente1: 'Tee',
                ingrediente2: 'Coffee',
                ingrediente3: 'Expresso',
                ingrediente4: 'Chocolate',
                ingrediente5: 'Cortadito'
            },
            {
                id: 4,
                title: 'Green Juices',
                precio: '5.50',
                ingrediente1: 'Orange and Carrot',
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
            {
                id: 5,
                title: 'Advice',
                precio: 'Thanks',
                ingrediente1: 'We are Christians we do not sell alcohol, mojitos, or wines.',
            },
        ],
        Lunch: [
            {
                id: 1,
                title: 'Salad',
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
                title: 'Soup',
                precio: '5.00 - 7.50',
                ingrediente1: 'Chicken Soup',
                ingrediente2: 'Mondongo y Patimongo',
                ingrediente3: 'Sancocho',
                ingrediente4: 'Beef Soup'
            },
            {
                id: 4,
                title: 'Fish',
                precio: '16.00 - 37.00',
                ingrediente1: 'Whole tilapia, tostones and salad',
                ingrediente2: 'Garlic Shrimp',
                ingrediente3: 'Catering tray of picaderas',
                ingrediente4: 'Trays'
            },

        ],
        Dessert: [
            {
                id: 1,
                title: 'Dessert',
                precio: '1.50 - 3.00',
                ingrediente1: 'Arepa',
                ingrediente2: 'Flan',
                ingrediente3: 'Tres Leche',
                ingrediente4: 'Majarete'
            },
        ],
    })

    return (
        <>

            <div className="mt-36">
                <h3 className="text-center text-6xl md:text-7xl font-yellow">
                    Menu
                </h3>
                <div className="text-center">
                    <Image height={80} width={450} src="/img/divider/divider.png" alt="gente" />
                </div>
            </div>
            <div className="w-full px-2 py-16 sm:px-0">
                {idioma === 'es' ?
                    (
                        <Tab.Group>
                            <Tab.List className="flex p-1 space-x-1  bg-amber-800 rounded-xl">
                                {Object.keys(categorias).map((category) => (
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
                                {Object.values(categorias).map((posts, idx) => (
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
                                                    <div className="flex justify-between  ">
                                                        <div className="">
                                                            <h3 className="text-2xl md:text-3xl text-amber-800 font-extrabold font-yellow leading-9">
                                                                {post.title}
                                                            </h3>
                                                            <ul className="md:flex mt-4  ml-8 mr-8 space-x-1 text-sm md:text-xl font-sans font-medium leading-4 text-coolGray-500 block ">
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
                                                                                <li className="text-amber-800 hidden md:flex"> * </li>
                                                                                <li className="md:mt-0 mt-2 leading-5 mx-2">{post.ingrediente2}</li>
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
                                                                                <li className="text-amber-800 hidden md:flex mx-2"> * </li>
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
                                                                                <li className="text-amber-800 hidden md:flex mx-2"> * </li>
                                                                                <li className="md:mt-0 mt-2 leading-5">{post.ingrediente4} </li>

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
                                                                                <li className="text-amber-800 hidden md:flex mx-2"> * </li>
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
                                                            <p className="text-base md:text-xl mr-1">
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

                    )
                    :
                    (
                        <Tab.Group>
                            <Tab.List className="flex p-1 space-x-1  bg-amber-800 rounded-xl">
                                {Object.keys(categoriasen).map((category) => (
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
                                {Object.values(categoriasen).map((posts, idx) => (
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
                                                    <div className="flex justify-between ">
                                                        <div className="">
                                                            <h3 className="text-2xl md:text-3xl text-amber-800 font-extrabold font-yellow leading-9">
                                                                {post.title}
                                                            </h3>
                                                            <ul className="md:flex mt-4 ml-8 mr-8 space-x-1 text-sm md:text-xl font-sans font-medium leading-4 text-coolGray-500 block">
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
                                                                                <li className="text-amber-800 hidden md:flex text-3xl"> - </li>
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
                                                                                <li className="text-amber-800 hidden md:flex text-6xl"> - </li>
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
                                                                                <li className="text-amber-800 hidden md:flex"> - </li>
                                                                                <li className="md:mt-0 mt-2 leading-5">{post.ingrediente4} </li>
                                                                                <li className="text-amber-800 hidden md:flex"> - </li>
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
                                                            <p className="text-base md:text-xl mr-1">
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

                    )
                }
            </div>
        </>
    )
}
