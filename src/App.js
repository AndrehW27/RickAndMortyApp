import './styles/App.css';
// import { Button } from 'reactstrap';
// import NavBar from './components/NavBar';
import RickAndMorty from './components/RickAndMorty';
import Personagem from './components/Personagem';
import { useEffect, useState } from 'react';
import RnMApi from './components/RnMApi';
import Bottom from './components/Bottom';
import SaibaMais from './components/SaibaMais';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import CheckStatus from './components/CheckStatus';

import Temporada from './components/Temporada';
import { Spinner } from 'reactstrap';
import Tab from './components/Tab';
import Locations from './components/Locations';

export default function App() {

  const toggle = () => setIsOpen(!isOpen);
  const [isOpen, setIsOpen] = useState(false);
  const [allDataState, setAlldataState] = useState([]);
  const [allCharacter, setAllCharacter] = useState([]);
  const [charData, setCharData] = useState([]);
  const [numChar, setNumChar] = useState([]);
  const [numLocais, setNumLocais] = useState([]);
  const [numEpi, setNumEpi] = useState([]);
  const [episodesData, setEpisodesData] = useState([]);
  const [season1, setSeason1] = useState([]);
  const [season2, setSeason2] = useState([]);
  const [season3, setSeason3] = useState([]);
  const [season4, setSeason4] = useState([]);
  const [allSeasons, setAllSeasons] = useState([]);
  const [loadingNumber, setLoadingNumber] = useState(0);

  const [locations1, setLocations1] = useState([]);
  // const [locations2, setLocations2] = useState([]);

  useEffect(() => {
    // PEGANDO TODOS OS DADOS DA API
    const loadAllRnmData = async () => {
      let arrayAllData = await RnMApi.getAllRnmData();
      setAlldataState(arrayAllData);


      // PEGANDO TODOS OS LOCAIS     
      let allLocations1 = await arrayAllData[1].items.results;
      setLocations1(allLocations1);

      let arraynumloc = await arrayAllData[1].items.info.count;
      setNumLocais(arraynumloc);


      // PEGANDO TODOS OS PERSONAGENS 
      let allcharacter = await arrayAllData[0].items.results;
      setAllCharacter(allcharacter);

      let arraynumchar = await arrayAllData[0].items.info.count;
      setNumChar(arraynumchar);

      let random = Math.floor(Math.random() * allcharacter.length - 1);
      setCharData(allcharacter[random].image);


      // PEGANDO TODOS OS EPISODIOS
      let arraynumepi = await arrayAllData[2].items.info.count;
      setNumEpi(arraynumepi);

      let allEpisodes = await RnMApi.getAllEpisodes();
      setEpisodesData(allEpisodes);

      let combinedEpisodesArrays = [...allEpisodes[0].items.results, ...allEpisodes[1].items.results, ...allEpisodes[2].items.results]
      setEpisodesData(combinedEpisodesArrays);
      let season1Arr = combinedEpisodesArrays.filter((el) => el.episode.startsWith("S01"));
      setSeason1(season1Arr);
      let season2Arr = combinedEpisodesArrays.filter((el) => el.episode.startsWith("S02"));
      setSeason2(season2Arr);
      let season3Arr = combinedEpisodesArrays.filter((el) => el.episode.startsWith("S03"));
      setSeason3(season3Arr);
      let season4Arr = combinedEpisodesArrays.filter((el) => el.episode.startsWith("S04"));
      setSeason4(season4Arr);
      let allSeasonsArray = [{ ...season1Arr }, { ...season2Arr }, { ...season3Arr }, { ...season4Arr }]
      setAllSeasons(allSeasonsArray);

    }

    setTimeout(() => {
      loadAllRnmData();
    }, 3000);

    // const increaseLoading = () => {
    //   for (let index = 1; index <= 50; index++) {
    //     setLoadingNumber(loadingNumber + 1);
    //     // console.log(loadingNumber);
    //   }
    // }

    // increaseLoading();

  }, []);

  return (

    <div className="App">

      {allDataState.length <= 0 &&
        <div className="Gif">
          <img src="RMGIF.gif" alt="lotr gif" />
          <p>Loading... {loadingNumber}%</p>
          <Spinner className="mt-2" color="info" />
        </div>
      }

      <RickAndMorty />

      <SaibaMais
        imagem={charData}
        numChar={numChar}
        numLocais={numLocais}
        numEpisodes={numEpi}

      />

      {/* <CheckStatus /> */}

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


      {/* TEMPORADAS */}
      <div className="temporadasContainer">
        <div style={{ marginLeft: '6rem' }}>
          <Button style={{ padding: '0.5rem 1.5rem', border: '2px solid rgb(104, 238, 51, 0.75)', boxShadow: '0px 0px 10px 1px rgba(104, 238, 51, 0.75)' }} className="text-center" color="info" onClick={toggle}>
            <p className="temporadas" >
              Temporadas
              <div style={{ marginLeft: '1.5rem' }} className="click"></div>
            </p>
          </Button>
          <Collapse className="w-100 " isOpen={isOpen}>
            <Card className="d-flex flex-row w-75 p-3">
              <CardBody className="w-25 cardBody">
                <div >
                  <h4> <span>Temporada 1</span> </h4>
                  {season1.map((item, key) => (
                    <Temporada key={key}
                      episodio={item.episode}
                      nome={item.name}
                      date={item.air_date}
                    />
                  ))}
                </div>
              </CardBody>
              <CardBody className="w-25 cardBody">
                <div >
                  <h4><span>Temporada 2</span></h4>
                  {season2.map((item, key) => (
                    <Temporada key={key}
                      episodio={item.episode}
                      nome={item.name}
                      date={item.air_date}
                    />
                  ))}
                </div>
              </CardBody>
              <CardBody className="w-25 cardBody">
                <div >
                  <h4><span>Temporada 3</span></h4>
                  {season3.map((item, key) => (
                    <Temporada key={key}
                      episodio={item.episode}
                      nome={item.name}
                      date={item.air_date}
                    />
                  ))}
                </div>
              </CardBody>
              <CardBody className="w-25 cardBody">
                <div >
                  <h4><span>Temporada 4</span></h4>
                  {season4.map((item, key) => (
                    <Temporada key={key}
                      episodio={item.episode}
                      nome={item.name}
                      date={item.air_date}
                    />
                  ))}
                </div>
              </CardBody>
            </Card>
          </Collapse>
        </div>

      </div>

      {/* <div className="Tab">
        <Tab />
      </div> */}


      {/* {locations1.map((item, key) => (
          <Locations key={key}          
            nome={item.name}
            tipo={item.type}
            dimensao={item.dimension}
          />
        ))} */}

      {/* {locations1.map((item, key) => (
        <div className="locationCss">
          {item.name}
        </div>

      ))} */}


      <div className="locationCss locationsContainer">
        {locations1.map((item) => (
          <div>
            {item.name}
          </div>
        ))}
      </div>




      <Bottom />

    </div>
  );
}







