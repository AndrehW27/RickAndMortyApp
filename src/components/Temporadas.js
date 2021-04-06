import React, { useState } from 'react';
import '../styles/Temporadas.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export default function Temporadas({ id, nome2, episodio, date }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ marginBottom: '0.5rem' }}>
      <Button className="text-center w-100" color="info" onClick={toggle}> <p>Temporada: </p> </Button>
      <Collapse className=" w-100" isOpen={isOpen}>
        <Card>
          <CardBody className="cardBody">
            <p>Nome: </p>
            <p>{nome2}</p>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

