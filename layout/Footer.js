import React from 'react';

// EXTERNAL
import Link from 'next/link';

export default function Footer() {

    return (
        <>
            <div className="flex justify-center  h-24 w-full bg-amber-800">
                <div className="text-center text-white md:text-2xl text-xs flex items-center">
                    Copyright
                    <Link href="/">
                        <a className="decoration-1 underline hover:decoration-0 mx-2">
                            JirehTropical
                        </a>
                    </Link>
                    2022.
                    <span className="mx-2">
                        Diseñado y Desarrollado por <span className="font-bold">
                            Isaac Lopez
                        </span>
                    </span>
                </div>
            </div>
        </>
    )
}