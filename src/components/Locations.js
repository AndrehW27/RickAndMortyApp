import '../styles/Locations.css';

export default function Locations(nome, tipo, dimensao) {
    return(
        <div>
            <p>Nome: {nome}</p>
            <p>Tipo: {tipo}</p>
            <p>Dimensao: {dimensao}</p>
        </div>
    )
}