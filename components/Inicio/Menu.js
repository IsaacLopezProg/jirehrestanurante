// INTERNAL
import { useState, useEffect } from 'react';
import Image from 'next/image';

// EXTERNAL
import { Tab } from '@headlessui/react';
import { Icon } from 'semantic-ui-react';
// import axios from 'axios';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Menu() {

    // DESTRUCTURACION DE VALORES Y LLAMADO A LA API

    const [desayuno, setDesayuno] = useState();
    const [bebidas, setBebidas] = useState();
    const [comida, setComida] = useState();
    const [postre, setPostre] = useState();




    useEffect(() => {
        (async () => {
            const url = 'http://localhost:1337/breakfast-homes'
            // const respo = await axios.get(url);
            const respuesta = await fetch(url);
            const datos = await respuesta.json();
            if (datos) {
                setDesayuno(
                    datos
                );
            }

        })();

        (async () => {
            const url = 'http://localhost:1337/drinks-homes'
            // const respo = await axios.get(url);
            const respuesta = await fetch(url);
            const datos = await respuesta.json();
            if (datos) {
                setBebidas(
                    datos
                );
            }

            // console.log(datos)
        })();

        (async () => {
            const url = 'http://localhost:1337/lunch-homes'
            // const respo = await axios.get(url);
            const respuesta = await fetch(url);
            const datos = await respuesta.json();
            if (datos) {
                setComida(
                    datos
                );
            }

        })();

        (async () => {
            const url = 'http://localhost:1337/desserts'
            // const respo = await axios.get(url);
            const respuesta = await fetch(url);
            const datos = await respuesta.json();
            if (datos) {
                setPostre(
                    datos
                );
            }

        })();

    }, [])

    if (!bebidas && !undefined) return <div className="flex justify-center m-8 p-8"><Icon loading name='spinner' size="massive" color="brown" /></div>
    if (!desayuno && !undefined) return <div className="flex justify-center m-8 p-8"><Icon loading name='spinner' size="massive" color="brown" /></div>
    if (!comida && !undefined) return <div className="flex justify-center m-8 p-8"><Icon loading name='spinner' size="massive" color="brown" /></div>
    if (!postre && !undefined) return <div className="flex justify-center m-8 p-8"><Icon loading name='spinner' size="massive" color="brown" /></div>


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
                <Tab.Group>
                    <Tab.List className="flex p-1 space-x-1  bg-amber-800 rounded-xl">
                        <Tab
                            className={({ selected }) =>
                                classNames(
                                    'w-full py-2.5 text-xl font-sans leading-5 font-bold text-amber-800 rounded-lg',

                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            Breakfast</Tab>
                        <Tab
                            className={({ selected }) =>
                                classNames(
                                    'w-full py-2.5 text-xl font-sans leading-5 font-bold text-amber-800 rounded-lg',

                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }

                        >Drinks</Tab>
                        <Tab
                            className={({ selected }) =>
                                classNames(
                                    'w-full py-2.5 text-xl font-sans leading-5 font-bold text-amber-800 rounded-lg',

                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }

                        >Lunch</Tab>
                        <Tab
                            className={({ selected }) =>
                                classNames(
                                    'w-full py-2.5 text-xl font-sans leading-5 font-bold text-amber-800 rounded-lg',

                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }

                        >Dessert</Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel
                            className={classNames(
                                'bg-white rounded-xl p-3 ',
                            )}
                        >
                            <ul>
                                {desayuno.map((post) => (
                                    <li
                                        key={post._id}
                                        className="relative p-3 rounded-md hover:bg-coolGray-100  "
                                    >
                                        <div className="flex justify-between ">
                                            <div className="">
                                                <h3 className="text-2xl md:text-3xl text-amber-800 font-extrabold font-yellow leading-9">
                                                    {post.Dish}
                                                </h3>
                                                <ul>
                                                    <li
                                                        key={post._id}
                                                        className="relative p-3 rounded-md hover:bg-coolGray-100  "
                                                    >
                                                        <div className="flex justify-between ">
                                                            <div className="">
                                                                <ul className="md:flex mt-4 ml-8 mr-8 space-x-1 text-sm md:text-xl font-sans font-medium leading-4 text-coolGray-500 block">
                                                                    {
                                                                        post.ingredients[0] ?
                                                                            (
                                                                                <>
                                                                                    <li className="leading-5">{post.ingredients[0].Ingredient}</li>
                                                                                </>

                                                                            )
                                                                            :
                                                                            (
                                                                                null
                                                                            )

                                                                    }
                                                                    {
                                                                        post.ingredients[1] ?
                                                                            (
                                                                                <>
                                                                                    <li className="text-amber-800 hidden md:flex text-3xl"> * </li>
                                                                                    <li className="md:mt-0 mt-2 leading-5">{post.ingredients[1].Ingredient}</li>
                                                                                </>

                                                                            )
                                                                            :
                                                                            (
                                                                                null
                                                                            )

                                                                    }{
                                                                        post.ingredients[2] ?
                                                                            (
                                                                                <>
                                                                                    <li className="text-amber-800 hidden md:flex text-3xl"> * </li>
                                                                                    <li className="md:mt-0 mt-2 leading-5">{post.ingredients[2].Ingredient} </li>
                                                                                </>

                                                                            )
                                                                            :
                                                                            (
                                                                                null
                                                                            )

                                                                    }
                                                                    {
                                                                        post.ingredients[3] ?
                                                                            (
                                                                                <>
                                                                                    <li className="text-amber-800 hidden md:flex"> * </li>
                                                                                    <li className="md:mt-0 mt-2 leading-5">{post.ingredients[3].Ingredient} </li>

                                                                                </>

                                                                            )
                                                                            :
                                                                            (
                                                                                null
                                                                            )

                                                                    }
                                                                    {
                                                                        post.ingredients[4] ?
                                                                            (
                                                                                <>
                                                                                    <li className="text-amber-800 hidden md:flex"> * </li>
                                                                                    <li className="md:mt-0 mt-2 leading-5">{post.ingredients[4].Ingredient} </li>
                                                                                </>

                                                                            )
                                                                            :
                                                                            (
                                                                                null
                                                                            )

                                                                    }

                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="text-base md:text-xl mr-1">
                                                    <span className="text-amber-800 mr-2">$</span>{post.Price}
                                                </p>
                                            </div>
                                        </div>

                                    </li>
                                ))}
                            </ul>
                        </Tab.Panel>
                        <Tab.Panel
                            className={classNames(
                                'bg-white rounded-xl p-3 ',
                            )}
                        >
                            <ul>
                                {bebidas.map((post) => (
                                    <li
                                        key={post._id}
                                        className="relative p-3 rounded-md hover:bg-coolGray-100  "
                                    >
                                        <div className="flex justify-between ">
                                            <div className="">
                                                <h3 className="text-2xl md:text-3xl text-amber-800 font-extrabold font-yellow leading-9">
                                                    {post.Drink}
                                                </h3>
                                                <ul>
                                                    <li
                                                        key={post._id}
                                                        className="relative p-3 rounded-md hover:bg-coolGray-100  "
                                                    >
                                                        <div className="flex justify-between ">
                                                            <div className="">
                                                                <ul className="md:flex mt-4 ml-8 mr-8 space-x-1 text-sm md:text-xl font-sans font-medium leading-4 text-coolGray-500 block">
                                                                    {
                                                                        post.ingredients[0] ?
                                                                            (
                                                                                <>
                                                                                    <li className="leading-5">{post.ingredients[0].Ingredient}</li>
                                                                                </>

                                                                            )
                                                                            :
                                                                            (
                                                                                null
                                                                            )

                                                                    }
                                                                    {
                                                                        post.ingredients[1] ?
                                                                            (
                                                                                <>
                                                                                    <li className="text-amber-800 hidden md:flex text-3xl"> * </li>
                                                                                    <li className="md:mt-0 mt-2 leading-5">{post.ingredients[1].Ingredient}</li>
                                                                                </>

                                                                            )
                                                                            :
                                                                            (
                                                                                null
                                                                            )

                                                                    }{
                                                                        post.ingredients[2] ?
                                                                            (
                                                                                <>
                                                                                    <li className="text-amber-800 hidden md:flex text-3xl"> * </li>
                                                                                    <li className="md:mt-0 mt-2 leading-5">{post.ingredients[2].Ingredient} </li>
                                                                                </>

                                                                            )
                                                                            :
                                                                            (
                                                                                null
                                                                            )

                                                                    }
                                                                    {
                                                                        post.ingredients[3] ?
                                                                            (
                                                                                <>
                                                                                    <li className="text-amber-800 hidden md:flex"> * </li>
                                                                                    <li className="md:mt-0 mt-2 leading-5">{post.ingredients[3].Ingredient} </li>

                                                                                </>

                                                                            )
                                                                            :
                                                                            (
                                                                                null
                                                                            )

                                                                    }
                                                                    {
                                                                        post.ingredients[4] ?
                                                                            (
                                                                                <>
                                                                                    <li className="text-amber-800 hidden md:flex"> * </li>
                                                                                    <li className="md:mt-0 mt-2 leading-5">{post.ingredients[4].Ingredient} </li>
                                                                                </>

                                                                            )
                                                                            :
                                                                            (
                                                                                null
                                                                            )

                                                                    }

                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="text-base md:text-xl mr-1">
                                                    <span className="text-amber-800 mr-2">$</span>{post.Price}
                                                </p>
                                            </div>
                                        </div>

                                    </li>
                                ))}
                            </ul>

                        </Tab.Panel>
                        <Tab.Panel
                            className={classNames(
                                'bg-white rounded-xl p-3 ',
                            )}>
                            <ul>
                                {comida.map((post) => (
                                    <li
                                        key={post._id}
                                        className="relative p-3 rounded-md hover:bg-coolGray-100  "
                                    >
                                        <div className="flex justify-between ">
                                            <div className="">
                                                <h3 className="text-2xl md:text-3xl text-amber-800 font-extrabold font-yellow leading-9">
                                                    {post.Dish}
                                                </h3>
                                                <ul>
                                                    <li
                                                        key={post._id}
                                                        className="relative p-3 rounded-md hover:bg-coolGray-100  "
                                                    >
                                                        <div className="flex justify-between ">
                                                            <div className="">
                                                                <ul className="md:flex mt-4 ml-8 mr-8 space-x-1 text-sm md:text-xl font-sans font-medium leading-4 text-coolGray-500 block">
                                                                    {
                                                                        post.ingredients[0] ?
                                                                            (
                                                                                <>
                                                                                    <li className="leading-5">{post.ingredients[0].Ingredient}</li>
                                                                                </>

                                                                            )
                                                                            :
                                                                            (
                                                                                null
                                                                            )

                                                                    }
                                                                    {
                                                                        post.ingredients[1] ?
                                                                            (
                                                                                <>
                                                                                    <li className="text-amber-800 hidden md:flex text-3xl"> * </li>
                                                                                    <li className="md:mt-0 mt-2 leading-5">{post.ingredients[1].Ingredient}</li>
                                                                                </>

                                                                            )
                                                                            :
                                                                            (
                                                                                null
                                                                            )

                                                                    }{
                                                                        post.ingredients[2] ?
                                                                            (
                                                                                <>
                                                                                    <li className="text-amber-800 hidden md:flex text-3xl"> * </li>
                                                                                    <li className="md:mt-0 mt-2 leading-5">{post.ingredients[2].Ingredient} </li>
                                                                                </>

                                                                            )
                                                                            :
                                                                            (
                                                                                null
                                                                            )

                                                                    }
                                                                    {
                                                                        post.ingredients[3] ?
                                                                            (
                                                                                <>
                                                                                    <li className="text-amber-800 hidden md:flex"> * </li>
                                                                                    <li className="md:mt-0 mt-2 leading-5">{post.ingredients[3].Ingredient} </li>

                                                                                </>

                                                                            )
                                                                            :
                                                                            (
                                                                                null
                                                                            )

                                                                    }
                                                                    {
                                                                        post.ingredients[4] ?
                                                                            (
                                                                                <>
                                                                                    <li className="text-amber-800 hidden md:flex"> * </li>
                                                                                    <li className="md:mt-0 mt-2 leading-5">{post.ingredients[4].Ingredient} </li>
                                                                                </>

                                                                            )
                                                                            :
                                                                            (
                                                                                null
                                                                            )

                                                                    }

                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="text-base md:text-xl mr-1">
                                                    <span className="text-amber-800 mr-2">$</span>{post.Price}
                                                </p>
                                            </div>
                                        </div>

                                    </li>
                                ))}
                            </ul>
                        </Tab.Panel>
                        <Tab.Panel
                            className={classNames(
                                'bg-white rounded-xl p-3 ',
                            )}>
                            <ul>
                                {postre.map((post) => (
                                    <li
                                        key={post._id}
                                        className="relative p-3 rounded-md hover:bg-coolGray-100  "
                                    >
                                        <div className="flex justify-between ">
                                            <div className="">
                                                <h3 className="text-2xl md:text-3xl text-amber-800 font-extrabold font-yellow leading-9">
                                                    {post.Dish}
                                                </h3>
                                                <ul>
                                                    <li
                                                        key={post._id}
                                                        className="relative p-3 rounded-md hover:bg-coolGray-100  "
                                                    >
                                                        <div className="flex justify-between ">
                                                            <div className="">
                                                                <ul className="md:flex mt-4 ml-8 mr-8 space-x-1 text-sm md:text-xl font-sans font-medium leading-4 text-coolGray-500 block">
                                                                    {
                                                                        post.ingredients[0] ?
                                                                            (
                                                                                <>
                                                                                    <li className="leading-5">{post.ingredients[0].Ingredient}</li>
                                                                                </>

                                                                            )
                                                                            :
                                                                            (
                                                                                null
                                                                            )

                                                                    }
                                                                    {
                                                                        post.ingredients[1] ?
                                                                            (
                                                                                <>
                                                                                    <li className="text-amber-800 hidden md:flex text-3xl"> * </li>
                                                                                    <li className="md:mt-0 mt-2 leading-5">{post.ingredients[1].Ingredient}</li>
                                                                                </>

                                                                            )
                                                                            :
                                                                            (
                                                                                null
                                                                            )

                                                                    }{
                                                                        post.ingredients[2] ?
                                                                            (
                                                                                <>
                                                                                    <li className="text-amber-800 hidden md:flex text-3xl"> * </li>
                                                                                    <li className="md:mt-0 mt-2 leading-5">{post.ingredients[2].Ingredient} </li>
                                                                                </>

                                                                            )
                                                                            :
                                                                            (
                                                                                null
                                                                            )

                                                                    }
                                                                    {
                                                                        post.ingredients[3] ?
                                                                            (
                                                                                <>
                                                                                    <li className="text-amber-800 hidden md:flex"> * </li>
                                                                                    <li className="md:mt-0 mt-2 leading-5">{post.ingredients[3].Ingredient} </li>

                                                                                </>

                                                                            )
                                                                            :
                                                                            (
                                                                                null
                                                                            )

                                                                    }
                                                                    {
                                                                        post.ingredients[4] ?
                                                                            (
                                                                                <>
                                                                                    <li className="text-amber-800 hidden md:flex"> * </li>
                                                                                    <li className="md:mt-0 mt-2 leading-5">{post.ingredients[4].Ingredient} </li>
                                                                                </>

                                                                            )
                                                                            :
                                                                            (
                                                                                null
                                                                            )

                                                                    }

                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="text-base md:text-xl mr-1">
                                                    <span className="text-amber-800 mr-2">$</span>{post.Price}
                                                </p>
                                            </div>
                                        </div>

                                    </li>
                                ))}
                            </ul>
                        </Tab.Panel>

                    </Tab.Panels>
                </Tab.Group>
            </div>
        </>
    )
}
