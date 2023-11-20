import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppDispatch, useAppSelector } from "../store";
import { DROP_ALL_FAVORITES } from "../store/characters/slice";


const PaginaFavoritos = () => {

    const dispatch = useAppDispatch();

    const { favoriteCharacters } = useAppSelector((state) => state.character);
    
    return <div className="container">
        <div className="actions">
            <h2>Personajes Favoritos</h2>
            {favoriteCharacters.length > 0 && <button className="danger" onClick={() => dispatch(DROP_ALL_FAVORITES ())}>Eliminar Favoritos</button>}
        </div>
        <GrillaPersonajes personajes={favoriteCharacters}/>
        {favoriteCharacters.length == 0 && <h2>No tiene preferencias</h2>}
    </div>
}

export default PaginaFavoritos