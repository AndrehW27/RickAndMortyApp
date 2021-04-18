import React, { useState } from 'react';
import '../styles/Temporada.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export default function Temporada({ nome, date, episodio }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div  style={{ marginBottom: '0.5rem' }}>
      <Button className="text-center w-100" color="info" onClick={toggle}> <p>{episodio} </p> </Button>
      <Collapse className=" w-100" isOpen={isOpen}>
        <Card>
          <CardBody className="cardBody">
            <p> <span>Nome:</span>  {nome}</p>
            <p> <span>Quando foi ao ar:</span>  {date}</p>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

