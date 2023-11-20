import { ChangeEvent, useEffect, useState } from 'react';
import './filtros.css';

export interface FilterProps {
    filtro: string,
    filter: (filtro: string) => void
}

const Filtros = ({filter, filtro}: FilterProps) => {

    const [inputValue, setInputValue] = useState('');
    const [importe, setImporte] = useState <string | null> (null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value)
        setImporte(value)
    }

    useEffect(() =>{
        const getData = setTimeout(() => {
            if(importe !== null)
                filter(importe)
        }, 800)
    })

    const handleLimpiarClick = () => {
        setInputValue('');
        filter('');
      };

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" value={inputValue} onChange={onChangeHandler} />
        <button className="danger" onClick={handleLimpiarClick}>Limpiar Filtro</button>

    </div>
}

export default Filtros;