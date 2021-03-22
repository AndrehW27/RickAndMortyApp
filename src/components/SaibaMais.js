import '../styles/SaibaMais.css'

export default function SaibaMais({ id, imagem, nome, status, espécie, genero, origem, localizacao}) {

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
                    <p>
                        <span>Nome:</span>
                        {nome}
                    </p>
                    <p>
                        <span>Status:</span>
                        {status}
                    </p>
                    <p>
                        <span>Espécie:</span>
                        {espécie}
                </p>             
                    <p>
                        <span>Gênero:</span>
                        {genero}
                    </p>
                    <p>
                        <span>Origem:</span>
                        {origem}
                    </p>
                    <p>
                        <span>Localização:</span>
                        {localizacao}
                    </p>
                    <p>
                        <span>Id:</span>
                        {id}
                    </p>
                </div>
            </div>
      
    );
}