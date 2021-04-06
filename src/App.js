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
import Temporadas from './components/Temporadas';
import Temporada1 from './components/Temporada1';



export default function App() {

  const toggle = () => setIsOpen(!isOpen);
  const [isOpen, setIsOpen] = useState(false);
  const [allDataState, setAlldataState] = useState([]);
  const [allCharacter, setAllCharacter] = useState([]);
  const [charData, setCharData] = useState([]);
  const [episodesData, setEpisodesData] = useState([]);
  const [season1, setSeason1] = useState([]);
  const [season2, setSeason2] = useState([]);
  const [season3, setSeason3] = useState([]);
  const [season4, setSeason4] = useState([]);
  const [allSeasons, setAllSeasons] = useState([]);

  useEffect(() => {
    // PEGANDO TODOS OS DADOS DA API
    const loadAllRnmData = async () => {
      let arrayAllData = await RnMApi.getAllRnmData();
      setAlldataState(arrayAllData);

      // PEGANDO TODOS OS PERSONAGENS 
      let allcharacter = await arrayAllData[0].items.results;
      setAllCharacter(allcharacter);
      console.log(allcharacter);

      let random = Math.floor(Math.random() * allcharacter.length - 1);
      setCharData(allcharacter[random]);

      // PEGANDO TODOS OS EPISODIOS
      let allEpisodes = await RnMApi.getAllEpisodes();
      setEpisodesData(allEpisodes);

      let combinedEpisodesArrays = [...allEpisodes[0].items.results, ...allEpisodes[1].items.results, ...allEpisodes[2].items.results]
      console.log(combinedEpisodesArrays);
      setEpisodesData(combinedEpisodesArrays);

      let season1Arr = combinedEpisodesArrays.filter((el) => el.episode.startsWith("S01"));
      setSeason1(season1Arr);
      // console.log(season1Arr);

      let season2Arr = combinedEpisodesArrays.filter((el) => el.episode.startsWith("S02"));
      setSeason2(season2Arr);
      // console.log(season2Arr);

      let season3Arr = combinedEpisodesArrays.filter((el) => el.episode.startsWith("S03"));
      setSeason3(season3Arr);
      // console.log(season3Arr);

      let season4Arr = combinedEpisodesArrays.filter((el) => el.episode.startsWith("S04"));
      setSeason4(season4Arr);
      // console.log(season4Arr);

      let allSeasonsArray = [{ ...season1Arr }, { ...season2Arr }, { ...season3Arr }, { ...season4Arr }]
      console.log(allSeasonsArray);
      setAllSeasons(allSeasonsArray);
      // console.log(allSeasons);
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

      <div >

        <div style={{ marginLeft: '6rem'}}>
          <Button className="text-center w-25" color="info" onClick={toggle}>
            <p style={{ fontSize: '2rem' }}>Temporadas </p>
          </Button>
          <Collapse className="w-100 " isOpen={isOpen}>
            <Card className="d-flex flex-row w-75 p-3">
              <CardBody className="w-25 cardBody">
                <div >
                  <h4> <span>Temporada 1</span> </h4>
                  {season1.map((item, key) => (
                    <Temporada1 key={key}
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
                    <Temporada1 key={key}
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
                    <Temporada1 key={key}
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
                    <Temporada1 key={key}
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

      <Bottom />

    </div>
  );
}







