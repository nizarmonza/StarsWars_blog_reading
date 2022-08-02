import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Cards2 } from "../component/cards.js";
import { Favorites } from "../layout";

const People = () => {
    const { store, actions } = useContext(Context);
    const {fav, setFav} = useContext(Favorites);

    useEffect(() => {
        actions.getPeople();
      }, []);

      useEffect(() => {
        setFav("myfav");
        
      }, []);
      console.log(fav);

    return(
        
        <div className="container text-bg-dark">
            <div className="row">
                <div className="hiddenScroll d-flex flex-row">
                    {store.people.map((people, index) => (
                    <><Cards2 
                    key={index}
                    title={people.name}
                    gender={people.gender}
                    haircolor={people.hair_color}
                    eyecolor={people.eye_color}
                    birthyear={people.birth_year}
                    /></>
                    ))}
                </div>
            </div>
        </div>
    )
}

export {People};









