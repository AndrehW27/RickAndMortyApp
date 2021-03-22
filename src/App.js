import './styles/App.css';
// import { Button } from 'reactstrap';
// import NavBar from './components/NavBar';
import RickAndMorty from './components/RickAndMorty';
import Personagem from './components/Personagem';
import { useEffect, useState } from 'react';
import RnMApi from './components/RnMApi';
import Bottom from './components/Bottom';
import SaibaMais from './components/SaibaMais';

function App() {

  const [allDataState, setAlldataState] = useState([]);
  const [allCharacter, setAllCharacter] = useState([]);
  const [randomIdChar, setRandomIdChar] = useState([]);
  const [rickData, setRickData] = useState([]);

  useEffect(() => {
    // PEGANDO TODOS OS DADOS DA API
    const loadAllRnmData = async () => {
      let arrayAllData = await RnMApi.getAllRnmData();
      console.log(arrayAllData);
      setAlldataState(arrayAllData);

      // PEGANDO TODOS OS PERSONAGENS 
      let allcharacter = await arrayAllData[0].items.results;
      setAllCharacter(allcharacter);
      console.log(allcharacter);
      console.log(allcharacter[0].name);

      let random = Math.floor(Math.random() * allcharacter.length - 1);
      setRandomIdChar(random);

      setRickData(allcharacter[random]);


      // let rickData = allcharacter[0].items.results[0];  
      // console.log(rickData);
      // setRickData(rickData);

    }

    setTimeout(() => {
      loadAllRnmData();
    }, 1000);


  }, []);

  return (
    <div className="App">

      <RickAndMorty />

      <SaibaMais
        id={randomIdChar}
        imagem={rickData.image}
        nome={rickData.name}
        status={rickData.status}
        espécie={rickData.species}
        genero={rickData.gender}
      // origem={rickData.origin.name}
      // localizacao={rickData.location.name}     
      // origem={JSON.stringify(rickData.origin)}
      // localizacao={JSON.stringify(rickData.location)} 
      />

      {allDataState.length <= 0 &&
        <div className="Gif">
          <img src="https://media.giphy.com/media/l378BzHA5FwWFXVSg/giphy.gif" alt="lotr gif" />
          <p>Loading...</p>
        </div>
      }

      <div className="containerPersonagens">
        {allCharacter.map((item, key) => (
          <Personagem key={key} id={item.id} nome={item.name} imagem={item.image} espécie={item.species} localização={item.origin.name} />
        ))}
      </div>

      <Bottom />

    </div>
  );
}

export default App;
