import React from 'react';
import Image from 'next/image';

export default function About() {
    return (
        <>
            <div className="mt-24">
                <h3 className="text-center text-7xl font-yellow">
                    Acerca de
                </h3>
                <div className="text-center">
                    <Image height={80} width={450} src="/img/divider/divider.png" alt="gente" />
                </div>
            </div>

            <div className="md:flex md:col bg-amber-800">


                {/* ITEM 1 */}
                <div className="md:flex md:row max-w-4xl mt-8">
                    <div className="FOTO md:basis-1/2 mt-8">
                        <div className="mx-12 mb-8  pt-4">
                            <Image height={700} width={650} src="/img/acerca/hombre2.jpg" alt="hombre" />
                        </div>
                    </div>
                    <div className="TEXTO md:basis-1/2 mt-8 mx-8">
                        <div className="md:text-left text-center mt-4">
                            <h4 className=" font-bold text-2xl text-white">
                                Historia
                            </h4>
                            <p className=" text-normal font-light text-slate-400 mt-4">Occaecat ullamco anim est anim.Labore laboris ipsum dolor amet minim.</p>
                            <h4 className=" font-bold text-2xl mt-8 text-white">Vision</h4>
                            <p className=" text-normal font-light text-slate-400 mt-4">Duis ipsum ullamco occaecat cillum laboris incididunt laboris enim ad eu ut id sint. Culpa in nostrud qui deserunt ea laborum reprehenderit amet. Occaecat exercitation voluptate elit qui.</p>
                        </div>
                    </div>
                </div>
                {/* ITEM 2 */}
                <div className="md:flex md:row max-w-4xl mt-8">
                    <div className="FOTO md:basis-1/2 mt-8">
                        <div className="mx-12 mb-8  pt-4">
                            <Image height={700} width={650} src="/img/acerca/hombre2.jpg" alt="hombre" />
                        </div>
                    </div>
                    <div className="TEXTO md:basis-1/2 mt-8 mx-8">
                        <div className="md:text-left text-center mt-4">
                            <h4 className=" font-bold text-2xl text-white">
                                Historia
                            </h4>
                            <p className=" text-normal font-light text-slate-400 mt-4">Occaecat ullamco anim est anim.Labore laboris ipsum dolor amet minim.</p>
                            <h4 className=" font-bold text-2xl mt-8 text-white">Vision</h4>
                            <p className=" text-normal font-light text-slate-400 mt-4">Aliqua commodo in sint nostrud exercitation anim consequat laborum est. Enim nisi proident exercitation aute elit velit occaecat irure anim. Ad do elit dolor Lorem minim ad elit. Ut exercitation sit mollit fugiat exercitation dolor consectetur magna aute. Minim commodo commodo incididunt officia ad et aliqua enim exercitation deserunt. Sunt aliqua velit quis mollit consectetur minim cupidatat. </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
