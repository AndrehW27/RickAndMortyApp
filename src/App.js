import './styles/App.css';
// import { Button } from 'reactstrap';
// import NavBar from './components/NavBar';
import RickAndMorty from './components/RickAndMorty';
import Personagem from './components/Personagem';
import { useEffect, useState } from 'react';
import RnMApi from './components/RnMApi';
import Bottom from './components/Bottom';

function App() {

  const [allDataState, setAlldataState] = useState([]);
  const [allCharacter, setAllCharacter] = useState([]);

  useEffect(() => {
    // PEGANDO TODOS OS DADOS DA API
    const loadAllRnmData = async () => {
      let arrayAllData = await RnMApi.getAllRnmData();
      console.log(arrayAllData);
      setAlldataState(arrayAllData);

      // PEGANDO TODOS OS PERSONAGENS 
      let allcharacter = arrayAllData[0].items.results;
      setAllCharacter(allcharacter);
      console.log(allcharacter);

    }

    setTimeout(() => {
      loadAllRnmData();
    }, 1000);

    
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

      <div className="containerPersonagens">
        {allCharacter.map((item, key) => (
          <Personagem key={key} nome={item.name} imagem={item.image} espécie={item.species} localização={item.origin.name} />
        ))}
      </div>

      <Bottom />

    </div>
  );
}

export default App;
