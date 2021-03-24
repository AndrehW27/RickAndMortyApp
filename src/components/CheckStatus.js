import { useState } from 'react';
import '../styles/CheckStatus.css';

export default function CheckStatus() {

    // const [vivo, setVivo] = useState(false);
    // const [morto, setMorto] = useState(false);

    // let ChangeAlive = () => {
    //     setVivo(true);
    //     console.log(vivo);
    // }

    // let vivovar = document.getElementById('vivo');
    // vivovar.addEventListener('change', () => {
    //     ChangeAlive();
    // })    

    return (
        <div className="containerStatus">
            <h2>Status:</h2>
            <p>Vivo</p>
            <input type="checkbox" id="vivo" name="vivo" value="vivo"></input>
            <p>Morto</p>
            <input type="checkbox" id="vivo" name="vivo" value="vivo"></input>
        </div>
    );
}