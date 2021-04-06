import React, { useState } from 'react';
import '../styles/Episodios.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export default function Episodios({ id, nome, episodio, date }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ marginBottom: '0.5rem' }}>
      <Button className="text-center w-100" color="info" onClick={toggle}> <p>Temporada: {nome}</p> </Button>
      <Collapse className=" w-100" isOpen={isOpen}>
        <Card>
          <CardBody >
            <p>Nome: {nome}</p>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

