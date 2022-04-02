import React from 'react';

// IMG
// import divider from '/public/img/divideriglesia2.png';

// EXTERNAL
import Image from 'next/image';

export default function Ubicacion() {

    return (
        <>
            <div className="CONTAIN mt-36">
                <div className="flex flex-col mx-auto ">
                    <div className="TITULO basis-full text-center my-8">
                        <h1 className="text-5xl uppercase font-bold mt-8 font-yellow">
                            Nuestra Ubicacion
                        </h1>
                        <Image height={80} width={450} src="/img/divider/divider.png" alt="divider" />
                    </div>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.3843889644268!2d-75.90357308457894!3d41.235184179278455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c511256d854b23%3A0x6a46887a9dd5193b!2s639%20S%20Main%20St%2C%20Wilkes-Barre%2C%20PA%2018706%2C%20EE.%20UU.!5e0!3m2!1ses!2sdo!4v1648850995692!5m2!1ses!2sdo" width="100%" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}