import '../styles/Personagem.css';

export default function Personagem({nome}) {
    return (

        <div className="caixaPersonagem">
            <div className="imagem">
                <a href="https://pt.wikipedia.org/wiki/Rick_and_Morty" target="_blank" rel="noopener noreferrer">
                    <p className="saibaMais">Saiba Mais</p>
                </a>
            </div>
            <p>
                <span>Nome:</span>
                    {nome}
                    </p>
            <p>
                <span>Raça:</span>
                    Raça
                    </p>
            <p>
                <span>Localização:</span>
                    Localização
                    </p>
        </div>

    );
}