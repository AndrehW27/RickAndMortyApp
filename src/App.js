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
import Temporadas from './components/Temporadas';
import CollapseEpisodes2 from './components/CollapseEpisodes2';


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

  useEffect(() => {
    // PEGANDO TODOS OS DADOS DA API
    const loadAllRnmData = async () => {
      let arrayAllData = await RnMApi.getAllRnmData();
      setAlldataState(arrayAllData);

      // PEGANDO TODOS OS PERSONAGENS 
      let allcharacter = await arrayAllData[0].items.results;
      setAllCharacter(allcharacter);

      let random = Math.floor(Math.random() * allcharacter.length - 1);
      setCharData(allcharacter[random]);

      // PEGANDO TODOS OS EPISODIOS
      let allEpisodes = await RnMApi.getAllEpisodes();
      setEpisodesData(allEpisodes);

      let combinedEpisodesArrays = [...allEpisodes[0].items.results, ...allEpisodes[1].items.results, ...allEpisodes[2].items.results]
      console.log(combinedEpisodesArrays);

      let season1 = combinedEpisodesArrays.filter((el) => el.episode.startsWith("S01"));
      setSeason1(season1);
      console.log(season1);

      let season2 = combinedEpisodesArrays.filter((el) => el.episode.startsWith("S02"));
      setSeason2(season2);
      console.log(season2);

      let season3 = combinedEpisodesArrays.filter((el) => el.episode.startsWith("S03"));
      setSeason3(season3);
      console.log(season3);

      let season4 = combinedEpisodesArrays.filter((el) => el.episode.startsWith("S04"));
      setSeason4(season4);
      console.log(season4);
    }

    setTimeout(() => {
      loadAllRnmData();
    }, 0);


  }, []);

  // let season1 = episodesData.filter((temporada) => temporada.startsWith("N"));

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

      {/* <div style={{ marginBottom: '0.5rem' }}>
        <Button className="text-center w-100" color="info" onClick={toggle} >Seasons teste </Button>
        <Collapse className=" w-100" isOpen={isOpen}>
          <Card>
            <CardBody > */}
              {/* SEASON 1     */}
              {/* <div style={{ marginTop: '1rem' }}>
                <Button className="text-center w-25" color="info" onClick={toggle} style={{ marginLeft: '6rem' }}>Season 1</Button>
                <Collapse className=" w-25" style={{ marginTop: '1rem', marginLeft: '6rem' }} isOpen={isOpen}>
                  <Card>
                    <CardBody >
                      {season1.map((item, key) => (
                        <CollapseEpisodes key={key}
                          id={item.id}
                          nome={item.name}
                          episodio={item.episode}
                          date={item.air_date}
                        />
                      ))}
                    </CardBody>
                  </Card>
                </Collapse>
              </div>
            </CardBody>   
          </Card>
        </Collapse>
      </div> */}



      {/* SEASON 1     */}
      <div style={{ marginTop: '1rem' }}>
        <Button className="text-center w-25" color="info" onClick={toggle} style={{ marginLeft: '6rem' }}>Season 1</Button>
        <Collapse className=" w-25" style={{ marginTop: '1rem', marginLeft: '6rem' }} isOpen={isOpen}>
          <Card>
            <CardBody >
              {season1.map((item, key) => (
                <CollapseEpisodes key={key}
                  id={item.id}
                  nome={item.name}
                  episodio={item.episode}
                  date={item.air_date}
                />
              ))}
            </CardBody>
          </Card>
        </Collapse>
      </div>

      {/* SEASON 2     */}
      <div style={{ marginTop: '1rem' }}>
        <Button className="text-center w-25" color="info" onClick={toggle} style={{ marginLeft: '6rem' }}>Season 2</Button>
        <Collapse className=" w-25" style={{ marginTop: '1rem', marginLeft: '6rem' }} isOpen={isOpen}>
          <Card>
            <CardBody >
              {season2.map((item, key) => (
                <CollapseEpisodes2 key={key}
                  id={item.id}
                  nome={item.name}
                  episodio={item.episode}
                  date={item.air_date}
                />
              ))}
            </CardBody>
          </Card>
        </Collapse>
      </div>




      <Bottom />

    </div>
  );
}






      // let season = []
      // for (let index = 0; index < combinedEpisodesArrays.length; index++) {
      //   season.push(combinedEpisodesArrays[index]);   
      //   setSeasons(season);        
      // }
      // console.log(season);
