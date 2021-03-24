import './styles/App.css';
// import { Button } from 'reactstrap';
// import NavBar from './components/NavBar';
import RickAndMorty from './components/RickAndMorty';
import Personagem from './components/Personagem';
import { useEffect, useState } from 'react';
import RnMApi from './components/RnMApi';
import Bottom from './components/Bottom';
import SaibaMais from './components/SaibaMais';
import CollapseEpisodes from './components/CollapseEpisodes';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import CheckStatus from './components/CheckStatus';
// import PaginacaoTeste from './components/PaginacaoTeste';

function App() {

  // const [idState, setIDState] = useState(0);

  // function setId() {
  //     setIDState()
  // }

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [allDataState, setAlldataState] = useState([]);
  const [allCharacter, setAllCharacter] = useState([]);
  // const [randomIdChar, setRandomIdChar] = useState([]);
  const [charData, setCharData] = useState([]);
  const [episodesData, setEpisodesData] = useState([]);
  const [numChar, setNumChar] = useState([]);

  useEffect(() => {
    // PEGANDO TODOS OS DADOS DA API
    const loadAllRnmData = async () => {
      let arrayAllData = await RnMApi.getAllRnmData();
      // console.log(arrayAllData);
      setAlldataState(arrayAllData);

      // PEGANDO TODOS OS PERSONAGENS 
      let allcharacter = await arrayAllData[0].items.results;
      setAllCharacter(allcharacter);
      // console.log(allcharacter);
      // console.log(allcharacter[0]);
      // console.log(allcharacter[0].name);

      let random = Math.floor(Math.random() * allcharacter.length - 1);
      setCharData(allcharacter[random]);

      // PEGANDO TODOS OS EPISODIOS
      let allepisodes = await arrayAllData[2].items.results;
      setEpisodesData(allepisodes);
      // console.log(allepisodes);
      // console.log(allepisodes[0]);
      // console.log(allepisodes[0].name);

      // let numchar = arrayAllData[0].items.info.count;
      // setNumChar(numchar);
      // console.log(numchar);
      // console.log(numChar.items.info.count);

    }

    setTimeout(() => {
      loadAllRnmData();
    }, 0);


  }, []);

  return (
    <div className="App">

      {allDataState.length <= 0 &&
        <div className="Gif">
          <img src="https://media.giphy.com/media/l378BzHA5FwWFXVSg/giphy.gif" alt="lotr gif" />
          <p>Loading...</p>
        </div>
      }

      <RickAndMorty />

      <SaibaMais
        imagem={charData.image}
        // numChar={numchar.items.info.count}
        // numLocais={allDataState[1].items.info.count}
        // numEpisodes={allDataState[2].items.info.count}
      />

      <CheckStatus />

      <div className="containerPersonagens">
        {allCharacter.map((item, key) => (
          <Personagem key={key} 
          id={item.id} 
          nome={item.name} 
          status={item.status} 
          genero={item.gender} 
          imagem={item.image} 
          espécie={item.species} 
          origem={item.origin.name} 
          localizacao={item.location.name} 
          numEpisodes={item.episode.length} 
          />
        ))}
      </div>

      {/* <PaginacaoTeste /> */}

      <div style={{ marginTop: '1rem' }}>
        <Button className="text-center w-50" color="info" onClick={toggle} style={{ marginLeft: '22rem' }}>Todas Temporadas</Button>
        <Collapse className=" w-50" style={{ marginTop: '1rem', marginLeft: '22rem' }} isOpen={isOpen}>
          <Card>
            <CardBody >
              {episodesData.map((item, key) => (
                <CollapseEpisodes key={key} 
                id={item.id} 
                nome={item.name} 
                episodio={item.episode} />
              ))}
            </CardBody>
          </Card>
        </Collapse>
      </div>

      <Bottom />

    </div>
  );
}

export default App;
