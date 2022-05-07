import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Icon,
    Menu,
    Segment,
    Sidebar,
} from 'semantic-ui-react';

export default function Headers(props) {

    // IDIOMA
    const [idioma, setIdioma] = useState('');

    useEffect(() => {

        if (navigator.language) {
            const lang = (navigator.language).slice(0, 2);
            setIdioma(lang);
        }


    }, [])


    // SIDE
    const test = true;

    const [visible, setVisible] = useState(false);

    function prueba() {
        setVisible(true);
    }


    return (<>


        <Sidebar.Pushable as={Segment} style={{ border: "0", borderRadius: "0" }} lang="es">
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                onHide={() => setVisible(false)}
                vertical
                visible={visible}
                width='thin'
                color='brown'
            >
                <Menu.Item as='a'>
                    <Icon name='home' />
                    Home
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='sign-in' />
                    Log In
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='sign-out' />
                    Log Out
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='favorite' />
                    Favorite
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='list' />
                    Menu
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='cart' />
                    Shopping Cart
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='shipping fast' />
                    Orders
                </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher dimmed={visible}>
                {/* <Header as='h3'>Application Content</Header> */}
                {/* <Image src='/images/wireframe/paragraph.png' /> */}
                <nav className="border-gray-200 px-4 sm:px-4 py-2.5 bg-amber-800 h-34">
                    <div className="container flex flex-wrap justify-between items-center mx-auto my-4 ">
                        <Link href="/">
                            <a className="flex items-center">

                                <Image height={104} width={124} src="/logo.jpeg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                                <span className="self-center text-4xl md:text-5xl font-semibold whitespace-nowrap text-white ml-2" style={{ fontFamily: '"Yellowtail", cursive' }}>
                                    Jireh Tropical
                                    <br />
                                    <p className="font-ligth text-lg ml-8 font-sans">Smoothie  and Gril</p>
                                </span>
                            </a>
                        </Link>
                        <button onClick={() => prueba()} data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-4xl text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                            {/* <Checkbox
                                            checked={visible}
                                            onChange={(e, data) => setVisible(data.checked)}
                                        /> */}
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium mr-8">
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Log In</a>
                                </li>
                                {test ?
                                    (
                                        <>
                                            <li>
                                                <a href="#" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Menu</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Shopping Cart</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block py-2 pr-4 pl-3  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Orders</a>
                                            </li>
                                        </>

                                    )
                                    :
                                    null
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
                {props.children}
            </Sidebar.Pusher>
        </Sidebar.Pushable>








    </>
    )
}
