import React from 'react';
import Image from 'next/image';

export default function Menu() {
    return (
        <>
            <div className="mt-24">
                <h2 className="text-center text-7xl font-yellow">
                    Nuestro Menu
                </h2>
                <div className="text-center">
                    <Image height={80} width={450} src="/img/divider/divider.png" alt="gente" />
                </div>
            </div>
        </>
    )
}
