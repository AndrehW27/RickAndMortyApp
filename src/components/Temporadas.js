import React, { useState } from 'react';
import '../styles/CollapseEpisodes.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export default function Temporadas({ id, nome, episodio, date }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ marginBottom: '0.5rem' }}>
      <Button className="text-center w-100" color="info" onClick={toggle} >Seasons teste </Button>
      <Collapse className=" w-100" isOpen={isOpen}>
        <Card>
          <CardBody >
            teste
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

