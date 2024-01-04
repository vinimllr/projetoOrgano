import { Icolaborador } from '../../shared/interface/Icolaborador';
import { Itime } from '../../shared/interface/Itime';
import Colaborador from '../Colaborador'
import './time.css'
import hexToRgba from 'hex-to-rgba';

interface TimeProps{
   favoritarColaborador: (id: string) => void 
   time: Itime
   colaboradores: Icolaborador[]
   aoDeletar: (id: string) => void
   mudarCor: (evento: string, timeId: string) => void
}



const Time = ({ favoritarColaborador, time, colaboradores, aoDeletar, mudarCor } : TimeProps) => {
    return (

        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.3')}}>
            
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            
            <input type='color' onChange={evento => mudarCor(evento.target.value, time.id)} value={time.cor} className='input-cor'></input>
            
            <div className='colaboradores'>
                {colaboradores.map((colaborador) =>{
                    return <Colaborador 
                        favoritarColaborador={favoritarColaborador} 
                        key={colaborador.id}  colaborador={colaborador} 
                        corDeFundo={time.cor} 
                        aoDeletar={aoDeletar}/>
                })}
            </div>
        </section>

    )
}

export default Time