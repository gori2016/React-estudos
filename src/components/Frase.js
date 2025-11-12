import style from './Frase.module.css';

function Frase(){
    return(
        <div className={style.fraseConteiner}>
            <p className={style.fraseTexto}>esse é um paragrafo em forma de componente</p>
        </div>
    )
}

export default Frase;