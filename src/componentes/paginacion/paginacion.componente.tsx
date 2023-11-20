import './paginacion.css';
import { Data } from '../../store/characters/slice';
import { useAppDispatch } from '../../store';
import { CHANGE_PAGE } from '../../store/characters/thunks';



export interface DataProps{
    data: Data
}
const Paginacion = ({data}: DataProps) => {
    const dispatch = useAppDispatch();
    const sigHandler = () => {
        if(data.next){dispatch(CHANGE_PAGE(data.next));
        }
    }

    const antHandler = () => {
        if(data.prev){
            dispatch(CHANGE_PAGE(data.prev));
        }
    }

    return <div className="paginacion">
        <button disabled={!!!data.prev} className={"primary"} onClick={antHandler}>Anterior</button>
        <button disabled={!!!data.next} className={"primary"}onClick={sigHandler}>Siguiente</button>
    </div>
}

export default Paginacion;