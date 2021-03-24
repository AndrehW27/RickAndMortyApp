import React, { useState } from 'react';
import '../styles/CollapseEpisodes.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export default function CollapseEpisodes({id, nome, episodio}) {

    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <Button className="text-center w-100" color="info" onClick={toggle} >Season X</Button>
      <Collapse className=" w-100" isOpen={isOpen}>
        <Card>
          <CardBody >            
            <p>Nome:{nome}</p>
            <p>Episódio:{episodio}</p>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

