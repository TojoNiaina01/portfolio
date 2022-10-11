import React from 'react';
import {Tab} from "@headlessui/react";
import WorksCard from "./WorksCard.jsx";

const Works = () => {
    const categories = ["Front-end", "Backend", "Mobile", "All"]
    return (
        <section className="bg-gray-100 pt-10 dark:bg-black transition duration-500 pb-10 min-h-screen" id="Works">
            <h2 className="grandTitre">Projets & <span className="text">Création</span></h2>
            <Tab.Group>
                <Tab.List className="flex justify-center mt-8">
                    {categories.map((category) => (
                        <Tab
                            key={category}
                            className={({selected}) =>
                                `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-lg ${
                                    selected
                                        ? "borderGradient bg-[#F53D56] text-white"
                                        : "border-b-2 border-[#35383C] text-[#747474]"
                                }`
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="pt-5">
                    <Tab.Panel className="tabPanel">
                        <WorksCard />
                        <WorksCard />
                        <WorksCard />
                        <WorksCard />
                    </Tab.Panel>
                    <Tab.Panel className="tabPanel">
                        <WorksCard />
                        <WorksCard />
                        <WorksCard />
                        <WorksCard />
                    </Tab.Panel>
                    <Tab.Panel className="tabPanel">
                        <WorksCard />
                        <WorksCard />
                        <WorksCard />
                        <WorksCard />
                    </Tab.Panel>
                    <Tab.Panel className="tabPanel">
                        <WorksCard />
                        <WorksCard />
                        <WorksCard />
                        <WorksCard />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </section>
    );
};

export default Works;
