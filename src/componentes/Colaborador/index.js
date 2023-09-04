import './colaborador.css'
import {TiUserDeleteOutline} from "react-icons/ti"
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

const Colaborador = ({ favoritarColaborador, colaborador, corDeFundo, aoDeletar}) => {
    function favorito(){
        favoritarColaborador(colaborador.id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favorito
    }


    return (
    <div className="colaborador">
        <TiUserDeleteOutline className='deletar' onClick={() => aoDeletar(colaborador.id)} size={25} color='white'/>
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito ?  <AiFillHeart color='#ff0000' {...propsFavorito}/> : <AiOutlineHeart {...propsFavorito}/>}
            </div>
        </div>
    </div>)
}

export default Colaborador