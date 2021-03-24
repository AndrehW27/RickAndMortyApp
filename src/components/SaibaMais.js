// import { useEffect, useState } from 'react';
import '../styles/SaibaMais.css'

       
export default function SaibaMais({ numLocais, numEpisodes, numChar, idChar, imagem, nome, status, espécie, genero, origem, localizacao}) {



    // function closeModal(){
    //     // let modal = document.getElementById('modal');
    //     let modal = document.querySelector("modal");
    //     let botaoFechar = document.getElementById("botaoFechar");
    //     // let botaoFechar = document.getElementById('botaoFechar');
    //     botaoFechar.addEventListener("click",()=>{
    //         modal.classList.toggle("close");  
    //         console.log("close");      
    //     })
    // }

    return (
       
            <div className="modal" className="containerSabiaMais">
                <div className="imagemModalDiv">
                    <img className="imagemModal" src={imagem} alt="imagem nao aparece" />
                </div>
                <div className="infosModal">
                    <h3>Inforações do site </h3>
                    <p>
                        <span>Número de Personagens:</span>
                        {numChar}
                    </p>
                    <p>
                        <span>Número de Temporadas:</span>
                        4
                    </p>
                    <p>
                        <span>Número de Episódios:</span>
                        {numEpisodes}
                    </p>
                    <p>
                        <span>Número de Locais:</span>
                        {numLocais}
                </p>             

                </div>
            </div>
      
    );
}