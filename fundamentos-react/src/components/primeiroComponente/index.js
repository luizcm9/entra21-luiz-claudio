import { ComProps } from "../ComPros"
import "./stayle.css"
function PrimeiroComponente(){

    return(
        <>
            <h2>Primeiro componente</h2>
            <p className = "emoji"> :D</p>
            <ComProps mensagem = "estou sendo enviado pelas props" />
            <ComProps mensagem = "Outra mensagem"/>
        </>
    );
}

export default PrimeiroComponente;