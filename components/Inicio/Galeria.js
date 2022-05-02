// INTERNAL
import React, { useState, useCallback, useEffect } from "react";

// EXTERNAL
import Gallery from "react-photo-gallery";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Modal, Button, Icon } from 'semantic-ui-react';
import axios from 'axios';

export default function Galeria() {

    // LLAMADA DE LA URL
    const url = process.env.NEXT_PUBLIC_URL;

    // STATE DE DATOS
    const [album, setAlbum] = useState({});
    // STATE PARA EL SPINNER DE CARGA
    const [isLoading, setLoading] = useState(false);
    // STATE DEL MODAL
    const [open, setOpen] = useState(false)
    // STATE DE IMAGENES DEL MODAL
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    // ARREGLO DE FOTOS
    let fotos = [];

    // FUNCION PARA LLENAR EL ARREFLO DE LAS FOTOS
    const prueba = (datos) => {

        if (datos) {
            fotos = [
                (datos.data.photos[0] !== undefined
                    ?
                    {
                        src: datos.data.photos[0].url,
                        width: 4,
                        height: 3
                    }
                    :
                    {
                        src: '/img/galeria/comida1.jpeg',
                        width: 4,
                        height: 3
                    }
                ),
                (datos.data.photos[1] !== undefined
                    ?
                    {
                        src: datos.data.photos[1].url,
                        width: 4,
                        height: 3
                    }
                    :
                    {
                        src: '/img/galeria/comida2.jpeg',
                        width: 4,
                        height: 3
                    }
                ),
                (datos.data.photos[2] !== undefined
                    ?
                    {
                        src: datos.data.photos[2].url,
                        width: 4,
                        height: 3
                    }
                    :
                    {
                        src: '/img/galeria/comida3.jpeg',
                        width: 4,
                        height: 3
                    }
                ),
                (datos.data.photos[3] !== undefined
                    ?
                    {
                        src: datos.data.photos[3].url,
                        width: 4,
                        height: 3
                    }
                    :
                    {
                        src: '/img/galeria/comida4.jpeg',
                        width: 4,
                        height: 3
                    }
                ),
                (datos.data.photos[4] !== undefined
                    ?
                    {
                        src: datos.data.photos[4].url,
                        width: 4,
                        height: 3
                    }
                    :
                    {
                        src: '/img/galeria/comida5.jpeg',
                        width: 4,
                        height: 3
                    }
                ),
                (datos.data.photos[5] !== undefined
                    ?
                    {
                        src: datos.data.photos[5].url,
                        width: 4,
                        height: 3
                    }
                    :
                    {
                        src: '/img/galeria/comida6.jpeg',
                        width: 4,
                        height: 3
                    }
                ),
                (datos.data.photos[6] !== undefined
                    ?
                    {
                        src: datos.data.photos[6].url,
                        width: 4,
                        height: 3
                    }
                    :
                    {
                        src: '/img/galeria/comida7.jpeg',
                        width: 4,
                        height: 3
                    }
                ),
                (datos.data.photos[7] !== undefined
                    ?
                    {
                        src: datos.data.photos[7].url,
                        width: 4,
                        height: 3
                    }
                    :
                    {
                        src: '/img/galeria/comida8.jpeg',
                        width: 4,
                        height: 3
                    }
                ),
                (datos.data.photos[8] !== undefined
                    ?
                    {
                        src: datos.data.photos[8].url,
                        width: 4,
                        height: 3
                    }
                    :
                    {
                        src: '/img/galeria/comida9.jpeg',
                        width: 4,
                        height: 3
                    }
                ),
                (datos.data.photos[9] !== undefined
                    ?
                    {
                        src: datos.data.photos[9].url,
                        width: 4,
                        height: 3
                    }
                    :
                    {
                        src: '/img/galeria/jugo1.jpeg',
                        width: 4,
                        height: 3
                    }
                ), (datos.data.photos[10] !== undefined
                    ?
                    {
                        src: datos.data.photos[10].url,
                        width: 4,
                        height: 3
                    }
                    :
                    {
                        src: '/img/galeria/comida14.jpeg',
                        width: 4,
                        height: 3
                    }
                )
                ,
                (datos.data.photos[11] !== undefined
                    ?
                    {
                        src: datos.data.photos[11].url,
                        width: 4,
                        height: 3
                    }
                    :
                    {
                        src: '/img/galeria/comida21.jpeg',
                        width: 4,
                        height: 3
                    }
                )
            ];
        }

        return fotos;
    }

    // FUNCION PARA EL MODAL DE LAS FOTOS
    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    // EFFECT PARA LLAMAR LA API
    useEffect(() => {

        // CONSULTA A LA API
        const consultarAPI = async () => {
            const endpoint = `${url}/photos-home`;
            const datos = await axios.get(endpoint);
            setAlbum(datos);

        }

        consultarAPI();

    }, [])

    if (Object.keys(album).length === 0) {
        // console.log("vacio")

    } else {
        // console.log("lleno")
        prueba(album);
    }

    // console.log(fotos.length);

    if (fotos.length === 0) return <div className="flex justify-center m-8 p-8"><Icon loading name='spinner' size="massive" color="brown" /></div>
    if (!fotos) return null;
    // if (fotos === undefined) 
    // return <div className="flex justify-center m-8 p-8"><Icon loading name='spinner' size="massive" color="brown" /></div>



    return (
        <>

            {
                fotos !== undefined ?
                    (
                        <>
                            <div className="mt-24">
                                <h3 className="text-center text-6xl md:text-7xl font-yellow">
                                    Gallery
                                </h3>
                                <div className="flex justify-center mb-8">
                                    <img height={80} width={450} src="/img/divider/divider.png" alt="gente" />
                                </div>
                            </div>
                            <Gallery photos={fotos} onClick={openLightbox} />
                            <Modal
                                basic
                                onClose={() => setOpen(false)}
                                onOpen={() => setOpen(true)}
                                open={open}
                                size='medium'
                                trigger={<Button size="big" fluid style={{ backgroundColor: '#92400e', color: 'white' }}>Full Screen</Button>}
                            >
                                <Carousel showArrows={true} emulateTouch={true} autoPlay={true}>
                                    {fotos.map(foto => (
                                        <div key={foto.id} style={{ height: '550px', with: '450px' }}>
                                            <img src={foto.src} alt="fotos" />
                                        </div>
                                    ))}
                                </Carousel>
                            </Modal>
                        </>
                    )
                    :
                    null
                // (

                //     <div className="flex justify-center m-8 p-8"><Icon loading name='spinner' size="massive" color="brown" /></div>
                // )
            }
        </>
    );
}
