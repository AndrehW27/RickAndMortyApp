import '../styles/Personagem.css';

export default function Personagem({ nome, imagem, espécie, localização }) {

    // function openModal() {
    //     // let modal = document.getElementById('modal');
    //     let modal = document.querySelector("modal");
    //     let botaoSaiba = document.querySelector("botaoSaiba");
    //     botaoSaiba.addEventListener("click", () => {
    //         modal.classList.toggle("show");
    //         console.log("show");
    //     })
    // }

    return (

        <div className="caixaPersonagem">

            <img className="imagem" src={imagem} alt="imagem nao aparece" />

            <div className="saibaMaisOuter">
                {/* <a>
                    <p className="saibaMais">Saiba Mais</p>
                </a> */}
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