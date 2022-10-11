import React from 'react';
import {AiFillHtml5, AiFillGithub} from "react-icons/ai";
import {DiCss3} from "react-icons/di";
import {FaReact, FaDocker} from "react-icons/fa";
import {SiLaravel, SiJavascript} from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const Skills = () => {
    return (
        <section className="bg-white w-full pt-10  dark:bg-black transition duration-500 pb-10 lg:min-h-screen" id="Skills">
            <h2 className="grandTitre"><span className="text">Skills</span> & Experiences</h2>
            <div className="flex flex-col max-w-5xl mx-auto mt-4 gap-y-8 lg:flex-row lg:h-full lg:items-center">
                <section className="grid grid-cols-3 justify-items-center pt-6 gap-y-4 md:mx-16 lg:w-1/2">
                    <div>
                        <div className="skills">
                            <AiFillHtml5 className="w-12 h-12 text-blue-500"/>
                        </div>
                        <p className="skillsName">HTML</p>
                    </div>
                    <div>
                        <div className="skills">
                            <DiCss3 className="w-12 h-12 text-orange-600"/>
                        </div>
                        <p className="skillsName">CSS</p>
                    </div>
                    <div>
                        <div className="skills">
                            <SiJavascript className="w-12 h-12 text-yellow-200"/>
                        </div>
                        <p className="skillsName">Javascript</p>
                    </div>
                    <div>
                        <div className="skills">
                            <FaReact className="w-12 h-12 text-blue-200"/>
                        </div>
                        <p className="skillsName">ReactJS</p>
                    </div>
                    <div>
                        <div className="skills">
                            <TbBrandNextjs className="w-12 h-12 text-black"/>
                        </div>
                        <p className="skillsName">NextJS</p>
                    </div>
                    <div>
                        <div className="skills">
                            <SiLaravel className="w-12 h-12 text-red-400"/>
                        </div>
                        <p className="skillsName">Laravel</p>
                    </div>
                    <div>
                        <div className="skills">
                            <AiFillGithub className="w-12 h-12 text-gray-400 dark:text-white"/>
                        </div>
                        <p className="skillsName">Git</p>
                    </div>
                    <div>
                        <div className="skills">
                            <FaDocker className="w-12 h-12 text-blue-400"/>
                        </div>
                        <p className="skillsName">Docker</p>
                    </div>

                </section>
                <section className="lg:w-1/2">
                    <div className="flex justify-evenly py-4">
                        <p className="text font-bold">2019</p>
                        <div className="cursor-pointer">
                            <Popup trigger={<div><h2 className="font-semibold leading-3 tracking-wider dark:text-white">Frontend Developpeur.</h2><span className="text-gray-400 text-xs tracking-wide">MaxMall.mg</span></div>}
                                   on={"hover"}
                                   position={["top center", "top right", "top left"]}>
                                <p className="text-gray-700 font-semibold">J'y ai occupé le post de développeur FrontEnd</p>
                            </Popup>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-evenly py-4">
                            <p className="text font-bold">2022</p>
                            <div className="cursor-pointer">
                                <Popup trigger={<div><p className=" font-semibold leading-3 tracking-wider dark:text-white">Frontend Developpeur</p><span className="text-gray-400 text-xs tracking-wide">Sunflower Project.</span></div>}
                                       on={"hover"}
                                       position={["top center", "top right", "top left"]}>
                                    <p className="text-gray-700 font-semibold">J'y occupe le post de développeur FrontEnd</p>
                                </Popup>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Skills
