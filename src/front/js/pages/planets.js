import React, { useContext, useEffect} from 'react';
import { Context } from '../store/appContext';
import { Cards1 } from '../component/cards';
import "../../styles/planets.css";
import { Favorites } from "../layout";

const Planets = () => {
    const { store, actions } = useContext(Context);
    const {fav, setFav} = useContext(Favorites);
    return(
        
        <div className="container text-bg-dark">
            <div className="row">
                <div className="hiddenScroll d-flex flex-row">
                    {store.planets.map((planet, index) => (
                    <>
                    <Cards1 
                    key={index}
                    index={index}
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