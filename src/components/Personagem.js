
import '../styles/Personagem.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { useState } from 'react';


export default function Personagem({ 
    id, 
    status, 
    nome, 
    imagem, 
    genero, 
    espécie, 
    origem, 
    localizacao,
    numEpisodes 
}) {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (

        <div className="caixaPersonagem">

            <div className="infos">
                <p>              
                    {nome}
                </p>
            </div>

            <img className="imagem" src={imagem} alt="imagem nao aparece" />     

            <div className="divCollapse">
                <div style={{ marginBottom: '1rem'}}>
                    <Button className="buttonCollapse text-center w-100" color="info" onClick={toggle}
                        style={{ fontSize: '1.5rem', 
                                marginBottom: '1rem', 
                                borderRadius: '0 0 1rem 1rem'                              
                                }}>
                        Ver +</Button>
                    <Collapse className=" w-100" isOpen={isOpen}>
                        <Card style={{ borderRadius: '1rem'}}>
                            <CardBody  >
                                <p className="StatusOuter">
                                    <span>Status:</span>
                                    {status === "Alive" ?
                                        <div className="alive"></div>
                                        :
                                        <div className="dead"></div>
                                    }
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
                                    <span>Nº episódios:</span>
                                    {numEpisodes}
                                </p>
                                <p>
                                    <span>Origem:</span>
                                    {origem}
                                </p>
                                <p>
                                    <span>Localização:</span>
                                    {localizacao}
                                </p>  
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            </div>

        </div>

    );
}