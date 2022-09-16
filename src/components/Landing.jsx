import React, {useEffect, useRef, useState} from 'react';
import heros from '../assets/heros.svg';
import {RoughNotation, RoughNotationGroup} from "react-rough-notation";

const Landing = () => {

    const [animation, setAnimation] = useState(true);
    const removeAnimation = () => {
        setTimeout(() => {
            setAnimation(false)
            console.log(animation)
        } , 10000)
    }
    useEffect(() => {
        window.addEventListener('load', removeAnimation);
        return () => {
            window.removeEventListener('load', removeAnimation);
        }
    }, [])


    return (
        <main className="pt-20">
            <h1 className="font-bold text-xl dark:text-[#fff9fb] md:text-2xl">Hi! I Am <br/>
                <RoughNotation type="highlight" show={true} color={"#f53d56"} animate={true} animationDelay={600}
                               animationDuration={800} strokeWidth={5}>
                    <strong className="text-2xl md:text-3xl">RAJOHARIMBOLA Tojoniaina</strong>
                </RoughNotation>
            </h1>
            <h2 className="text-gray-500 leading-7 md:text-lg">
                <RoughNotation type="underline" show="true" animate={true} animationDelay={1500}
                               animationDuration={800} strokeWidth={2}> Developpeur Frontend </RoughNotation> &
                <RoughNotation type="underline" show="true" animate={true} animationDelay={2500}
                               animationDuration={800} strokeWidth={2}> Backend </RoughNotation> &
                <RoughNotation type="underline" show="true" animate={true} animationDelay={3500}
                               animationDuration={800} strokeWidth={2}> Mobile </RoughNotation>
            </h2>
            <div className="flex gap-x-3 pt-5">
                <RoughNotation type="circle" show={animation} color="#71717A" animationDelay={4500} animationDuration={800}
                               strokeWidth={2}>
                    <button
                        className="flex gap-x-1 px-4 py-4 bg-[#f53d56] rounded-lg text-white font-bold tracking-wider dark:text-[#fff9fb]">Hire
                        Me
                    </button>
                </RoughNotation>
                <button
                    className="flex gap-x-1 px-2 py-3 border-2 border-[#f53d56] rounded-lg font-bold tracking-wider text-[#171614] dark:text-[#fff9fb]">Projects
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                         stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/>
                    </svg>
                </button>
            </div>
            <div className="pt-5 opacity-70">
                <img src={heros} alt="illustration on landing page"/>
            </div>

            <div className="flex justify-center mt-10 md:mt-20">
                <RoughNotation type="box" show={true} color="#71717A" animationDelay={6500} animationDuration={800}>
                    <h5 className="px-4 py-2 text-black dark:text-[#FFF9FB] font-semibold md:text-xl">Voir
                        plus</h5>
                </RoughNotation>
            </div>
        </main>
    );
}

export default Landing
