import React, { useState } from 'react';
import '../styles/CollapseEpisodes.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export default function CollapseEpisodes2({id, nome, episodio, date}) {

    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ marginBottom: '0.5rem' }}>
      <Button className="text-center w-100" color="info" onClick={toggle} >Episódio {episodio.slice(-2)}</Button>
      <Collapse className=" w-100" isOpen={isOpen}>
        <Card>
          <CardBody >            
            <p> <span>Nome: </span>{nome}</p>
            {/* <p>Episódio:{episodio}</p> */}
            <p><span>Data: </span> {date}</p>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

