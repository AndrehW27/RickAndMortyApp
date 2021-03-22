import { useState } from 'react';
import '../styles/Personagem.css';

export default function Personagem({ id, nome, imagem, espécie, localização }) {

    // function openModal() {
    //     // let modal = document.getElementById('modal');
    //     let modal = document.querySelector("modal");
    //     let botaoSaiba = document.querySelector("botaoSaiba");
    //     botaoSaiba.addEventListener("click", () => {
    //         modal.classList.toggle("show");
    //         console.log("show");
    //     })
    // }

    // const [id2,setId2] = useState();

    function showID(){
        console.log({id});
        // setId2({id})
    }

    return (

        <div className="caixaPersonagem">

          {/* {id2} */}

            <img className="imagem" src={imagem} alt="imagem nao aparece" />

            <div className="saibaMaisOuter">             
                <a onClick={showID} href="\"  rel="noopener noreferrer">
                    <p className="saibaMais">Saiba Mais</p>
                </a>
            </div>

            <div className="infos">
                <p>
                    {/* <span>Nome:</span> */}
                    {nome}
                </p>
                {/* <p>
                    <span>Espécie:</span>
                    {espécie}

                </p>
                <p>
                    <span>Localização:</span>
                    {localização}

                </p> */}
            </div>

        </div>

    );
}