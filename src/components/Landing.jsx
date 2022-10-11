import React from 'react';
import heros from '/assets/img/landing.png';
import {RoughNotation} from "react-rough-notation";

const Landing = () => {


    return (
        <section className="h-[90vh] px-6 md:px-4 lg:px-0 bg-gray-100 dark:bg-black transition duration-500"
                 id="Accueil">
            <main className="pt-12 lg:flex lg:pt-0 lg:mx-10 lg:max-w-[80%] lg:mx-auto">
                <section className="lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
                    <div>
                        <h1 className="font-bold text-xl dark:text-[#fff9fb] md:text-2xl lg:text-3xl">Hi! I Am <br/>
                            <RoughNotation type="highlight" show={true} color="#f53d56" animate={true}
                                           animationDelay={600}
                                           animationDuration={800} strokeWidth={5}>
                                <strong className="text-2xl md:text-3xl lg:text-4xl">RAJOHARIMBOLA Tojoniaina</strong>
                            </RoughNotation>
                        </h1>
                        <h2 className="text-gray-500 leading-7 md:text-lg">
                            <RoughNotation type="underline" show="true" animate={true} animationDelay={1500}
                                           animationDuration={800} strokeWidth={2}> Developpeur
                                Frontend </RoughNotation> &
                            <RoughNotation type="underline" show="true" animate={true} animationDelay={2500}
                                           animationDuration={800} strokeWidth={2}> Backend </RoughNotation> &
                            <RoughNotation type="underline" show="true" animate={true} animationDelay={3500}
                                           animationDuration={800} strokeWidth={2}> Mobile </RoughNotation>
                        </h2>
                    </div>
                    <div className="flex gap-x-3 pt-5">
                        <button
                            className=" px-4 py-4 bg-[#f53d56] rounded-lg">
                            <a href="/assets/pdf/cv.pdf"
                               className="flex items-center gap-x-1 text-white font-bold tracking-wider dark:text-[#fff9fb]">
                                <span>Mon CV</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"/>
                                </svg>
                            </a>
                        </button>
                        <button className="px-2 py-3 border-2 border-[#f53d56] rounded-lg "
                        >
                            <a href="#Works"
                               className="flex items-center gap-x-1 font-bold tracking-wider text-[#171614] dark:text-[#fff9fb]">
                                <span>Projects</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                                     stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/>
                                </svg>
                            </a>
                        </button>
                    </div>
                </section>
                <div className="pt-5 opacity-70 lg:opacity-100 lg:h-1/2 lg:w-2/4">
                    <img src={heros} alt="illustration on landing page"/>
                </div>
            </main>
            <div className="flex justify-center cursor-pointer mt-16 lg:mt-8">
                <RoughNotation type="box" show={true} color="#71717A" animationDelay={4500} animationDuration={800}>
                    <a href="#About" className="px-4 py-2 text-black dark:text-[#FFF9FB] font-semibold md:text-xl">Voir
                        plus</a>
                </RoughNotation>
            </div>
        </section>
    )
        ;
}

export default Landing
