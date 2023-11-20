import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useAppDispatch, useAppSelector } from "../store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CHARACTER_DETAILS } from "../store/characters/thunks";


const PaginaDetalle = () => {

    const id = useParams() as any;
    const dispatch = useAppDispatch();
    const { details, isLoading} = useAppSelector((state) => state.character)

 
    useEffect(() => {
        dispatch(CHARACTER_DETAILS(`${id.id}`))
    },[id, dispatch]) 

    return  <div className="container">
        {isLoading ? <h3>Cargando...</h3> :
        (details && <><h3>{details.name}</h3>
        <div className={"detalle"}>
        <div className={"detalle-header"}>
                <img src={details.image} alt={details.name}/>
                <div className={"detalle-header-texto"}>
                <h1>{details.name}</h1>
                <h2>Planeta: {details.origin.name}</h2>
                <h2>Genero: {details.gender}</h2>
                </div>
                <BotonFavorito personaje={details}/>
                </div>
                </div>
                <h3>Episodios en los que formó parte</h3>
                <div className={"episodios-grilla"}>
            {details.episode.map( e => (
                <TarjetaEpisodio key={e} episodioUrl={e} />
            ))}
        </div></>)}
    </div>
}

export default PaginaDetalle