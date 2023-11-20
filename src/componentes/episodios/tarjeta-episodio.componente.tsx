import './tarjeta-episodio.css';
import { useEffect, useState } from 'react';


export interface EpisodioProps{

    episodioUrl: string
}

export type Episodio = {
    id: number,
    name: string,
    air_date: string,
    capitulo: string,
    characters: string [],
    url: string,
    created: string
}

const TarjetaEpisodio = ({episodioUrl}: EpisodioProps) => {

    const [ep, setEp] = useState<Episodio | null> (null)

    const fetchData = async () => {
        const res = await fetch(episodioUrl);
        const data = await res.json();
        setEp(data);
    }

    useEffect(() => {
        fetchData();
    }, [])
    return <div className="tarjeta-episodio">
            <h4>{ep?.name}</h4>
            <div>
                <span>{ep?.capitulo}</span>
                <span>{ep?.created}</span>
            </div>
    </div>
}

export default TarjetaEpisodio;
