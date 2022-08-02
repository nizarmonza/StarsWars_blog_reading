import React, { useContext, useEffect} from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router-dom';


export const PlanetDetails = () =>{
    const {store, actions} = useContext(Context);
    const params = useParams()
    let data = store.planets[params.index]
    console.log(data)
    return(
        <>
        <div >
        <h1>{data.name}</h1>
        </div>
        </>
    )
}