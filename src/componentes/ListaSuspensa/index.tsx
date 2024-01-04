import { Itime } from '../../shared/interface/Itime'
import './lista-suspensa.css'


interface ListaSuspensaProps{
    label: string
    items: Itime[]
    valor: string
    aoAlterado: (valor: string) => void
    obrigatorio?: boolean
}


const ListaSuspensa = ({label, items,  valor, aoAlterado, obrigatorio = false}:ListaSuspensaProps) => {
    console.log(items.map(item=> item))
    return (<div className="lista-suspensa">
        <label>{label}</label>
        <select required={obrigatorio} value={valor} onChange={evento => aoAlterado(evento.target.value)}>
            <option />
            {items.map(item => <option key={item.id}>{item.nome}</option>)}
        </select>
    </div>)
}

export default ListaSuspensa