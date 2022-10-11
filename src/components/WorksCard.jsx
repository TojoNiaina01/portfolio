import React from 'react';
import Heros from "/assets/heros.svg";

const WorksCard = () => {
    return (
        <div className="carte">
            <img src={Heros} alt=""/>
            <h2 className="titre">Projet teste</h2>
            <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias beatae,
                dolores fuga iure molestiae placeat quam reprehenderit sed sunt.</p>
        </div>
    );
};

export default WorksCard;
