/*import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../store";
import { useEffect, useState } from "react";
import { FILTERED_CHARACTERS, GET_CHARACTERS } from "../store/characters/thunks";
 

const PaginaInicio = () => {

    const { characters, isLoading, isError, data } = useAppSelector((state) => state.character);

    const dispatch = useAppDispatch();

    const [filter, setFilter] = useState<string>('');


    const filterHandler = (filtro: string) => {
        setFilter(filter)
        if(filter === ''){
            dispatch(GET_CHARACTERS())
        }
        else{
        dispatch(FILTERED_CHARACTERS(`name=${filter}`))
    }
}

   

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={() => filterHandler('')}>Restablecer Búsqueda</button>
        </div>
        {isLoading ? <p>Cargando...</p> :
        <>
        <Filtros filter={filterHandler} filtro={filter} />
        {data && <Paginacion data={data}/> }
        <GrillaPersonajes personajes={characters} />
        {data && <Paginacion data={data}/> }
        </>
        }
        {isError && <p>{isError}</p>}
    </div>
}

export default PaginaInicio

*/




import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../store";
import { FILTERED_CHARACTERS, GET_CHARACTERS } from "../store/characters/thunks";
import { useState } from "react";
 

const PaginaInicio = () => {

    const { characters, isLoading, isError, data } = useAppSelector((state) => state.character);

    const dispatch = useAppDispatch();

    const [filtro, setFiltro ] = useState<string>('');

    const filterHandler = (filtro: string) => {
        setFiltro(filtro)
        if(filtro === '') {
            dispatch(GET_CHARACTERS())
        } else {
            dispatch(FILTERED_CHARACTERS(`name=${filtro}`))
        }
    }

    return <div className="container">
        <div className="actions">
            <h2>Catálogo de Personajes</h2>
        </div>
        {isLoading ? <h3>Cargando...</h3> :
        <>
        <Filtros filter={filterHandler} filtro={filtro} />
        {data &&
        <Paginacion data={data} />
        }
        <GrillaPersonajes personajes={characters} />
        {data && <Paginacion data={data} />}
        </>
        } {isError && <p>{isError}</p>}
    </div>
}

export default PaginaInicio
