import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos2";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Modal, Button } from 'semantic-ui-react';
import Image from 'next/image';

export default function Galeria() {

    const [open, setOpen] = useState(false)

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);


    return (
        <>

            <div className="mt-24">
                <h3 className="text-center text-7xl font-yellow">
                    Galeria
                </h3>
                <div className="text-center">
                    <Image height={80} width={450} src="/img/divider/divider.png" alt="gente" />
                </div>
            </div>

            <Gallery photos={photos} onClick={openLightbox} />
            <Modal
                basic
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                size='big'
                trigger={<Button size="big" fluid style={{ backgroundColor: '#92400e', color: 'white' }}>Ver Pantalla Completa</Button>}
            >
                <Carousel showArrows={true} emulateTouch={true} autoPlay={true}>
                    {photos.map(foto => (
                        <div style={{ height: '550px', with: '450px' }}>
                            <img src={foto.src} alt="fotos" />
                        </div>
                    ))}
                </Carousel>
            </Modal>
        </>
    );
}
