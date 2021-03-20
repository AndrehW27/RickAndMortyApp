import '../styles/Personagem.css';

export default function Personagem({ nome, imagem, espécie, localização }) {
    return (

        <div className="caixaPersonagem">

            <img className="imagem" src={imagem} alt="imagem nao aparece" />

            <div className="saibaMaisOuter">
                <a href="https://pt.wikipedia.org/wiki/Rick_and_Morty" target="_blank" rel="noopener noreferrer">
                    <p className="saibaMais">Saiba Mais</p>
                </a>
            </div>

            <div className="infos">
                <p>
                    <span>Nome:</span>
                    {nome}
                </p>
                <p>
                    <span>Espécie:</span>
                    {espécie}

                </p>
                <p>
                    <span>Localização:</span>
                    {localização}

                </p>
            </div>

        </div>

    );
}