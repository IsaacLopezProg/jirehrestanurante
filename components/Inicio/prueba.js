// INTERNAL
import React, { useState, useCallback } from "react";
import { fotos } from "./fotos2";
import Image from 'next/image';

// EXTERNAL
import Gallery from "react-photo-gallery";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Modal, Button } from 'semantic-ui-react';

export default function Galeria({ idioma }) {

    // DESTRUCTURACION DE VALORES Y LLAMADO A LA API
    const { data, isLoading, isError } = useConnection('/gallery-homes');


    const [open, setOpen] = useState(false)

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    // if (isLoading) return <Spinner />
    // AGREGANDO EL LOADING
    if (isLoading) return <div className="flex justify-center m-8 p-8"><Icon loading name='spinner' size="massive" color="brown" /></div>
    // MOSTRANDO EL ERROR
    if (isError) return (<h2 className="text-center text-5xl text-amber-800 flex justify-center m-8 p-8 font-yellow"> A ocurrido un error </h2>)
    //   if (isError) return <Error />

    console.log(data);

    return (
        <>

            <div className="mt-24">
                <h3 className="text-center text-6xl md:text-7xl font-yellow">
                    {idioma === 'es' ? 'Galeria' : 'Gallery'}
                </h3>
                <div className="text-center">
                    <Image height={80} width={450} src="/img/divider/divider.png" alt="gente" />
                </div>
            </div>

            <Gallery photos={fotos} onClick={openLightbox} />
            <Modal
                basic
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                size='medium'
                trigger={<Button size="big" fluid style={{ backgroundColor: '#92400e', color: 'white' }}>Ver Pantalla Completa</Button>}
            >
                <Carousel showArrows={true} emulateTouch={true} autoPlay={true}>
                    {fotos.map(foto => (
                        <div style={{ height: '550px', with: '450px' }}>
                            <img src={foto.src} alt="fotos" />
                        </div>
                    ))}
                </Carousel>
            </Modal>
        </>
    );
}
