import React from 'react';
import Image from 'next/image';

export default function Contacto() {
    return (
        <>
            <div className="mt-24">
                <h3 className="text-center text-7xl font-yellow">
                    Nuestro Contacto
                </h3>
                <div className="text-center">
                    <Image height={80} width={450} src="/img/divider/divider.png" alt="gente" />
                </div>
            </div>
        </>
    )
}
