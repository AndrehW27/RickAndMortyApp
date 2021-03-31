// import { useEffect, useState } from 'react';
import '../styles/SaibaMais.css'

       
export default function SaibaMais({ 
    numLocais, 
    numEpisodes, 
    numChar, 
    imagem, }) {

    return (
       
            <div className="modal" className="containerSabiaMais">
                <div className="imagemModalDiv">
                    <img className="imagemModal" src={imagem} alt="imagem nao aparece" />
                </div>
                <div className="infosModal">
                    <h3>Informções do site </h3>
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