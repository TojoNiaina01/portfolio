import React from 'react';
import Heros from '/assets/heros.svg';

const Services = () => {
    return (
        <section className="bg-white dark:bg-black transition duration-500  pt-10 min-h-screen" id="About">
            <h2 className="grandTitre">Attentif ,<span className="text"> Passionné </span> , Dévoué <br/> Développent Votre <span className="text"> Buseness Ensemble </span> </h2>
            <div className="grid justify-items-center gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 max-w-[90%] lg:max-w-[70%] mx-auto">
                {/*card One*/}
                <div className="carte">
                    <img src={Heros} alt="illustration human sitting" className="rounded-t-2xl rounded-b-lg  bg-gray-100"/>
                    <h2 className="titre">Frontend Developper</h2>
                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet earum id iste numquam obcaecati porro possimus quisquam quos, ratione?</p>
                </div>
                {/*card Two*/}
                <div className="carte">
                    <img src={Heros} alt="illustration human sitting" className="rounded-t-2xl rounded-b-lg  bg-gray-100"/>
                    <h2 className="titre">Backend Developper</h2>
                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae expedita iure iusto nisi nobis nulla rem repudiandae tempore. Quo?</p>
                </div>

                {/*card Tree*/}
                <div className="carte">
                    <img src={Heros} alt="illustration human sitting" className="rounded-t-2xl rounded-b-lg  bg-gray-100"/>
                    <h2 className="titre">Mobile Developper</h2>
                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dicta dolorem doloremque earum eos, inventore minus omnis porro saepe totam?</p>
                </div>
            </div>
        </section>
    );
}

export default Services