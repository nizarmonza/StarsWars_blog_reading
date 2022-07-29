import React, { useContext, useEffect} from 'react';
import { Context } from '../store/appContext';
import { Cards1 } from '../component/cards';
import "../../styles/planets.css";

const Planets = () => {
    const { store, actions } = useContext(Context);

    return(
        
        <div className="container text-bg-dark">
            <div className="row">
                <div className="hiddenScroll d-flex flex-row">
                    {store.planets.map((planet, index) => (
                    <>
                    <Cards1 
                    key={index}
                    title={planet.name}
                    climate={planet.climate}
                    terrain={planet.terrain}
                    population={planet.population}/>
                    </>
                    ))}
                </div>
            </div>
        </div>
        
    )
}

export {Planets};