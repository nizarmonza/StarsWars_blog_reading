import React, { useContext, useEffect} from 'react';
import { Context } from '../store/appContext';
import { Cards } from '../component/card';

const Planets = () => {
    const { store, actions } = useContext(Context);

    return(
        
        <div className="container text-bg-dark">
            <div className="row">
                <div className="hiddenScroll d-flex flex-row">
                    {store.planets.map((planet, index) => (
                    <><Cards 
                    title={planet.name}
                    text={`${planet.name} is a planet with a gravity of ${planet.climate}`}/></>
                    ))}
                </div>
            </div>
        </div>
    )
}

export {Planets};