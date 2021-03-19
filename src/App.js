import './styles/App.css';
// import { Button } from 'reactstrap';
// import NavBar from './components/NavBar';
import RickAndMorty from './components/RickAndMorty';
// import Personagens from './components/Personagens';
import Personagem from './components/Personagem';
import { useEffect, useState } from 'react';
import RnMApi from './components/RnMApi';

function App() {

  const [allDataState, setAlldataState] = useState([]);

  useEffect(() => {
    const loadAllRnmData = async () => {
      let arrayAllData = await RnMApi.getAllRnmData();
      console.log(arrayAllData);
      setAlldataState(arrayAllData);    
    }
    loadAllRnmData();
  }, []);

  return (
    <div className="App">
      <RickAndMorty />
      

      {/* <Personagens /> */}

      <div>
        {allDataState.map((item, key) => (    
            <Personagem key={key} nome={item.slug}/>         
        ))}
      </div>

      {/* <Personagem nome={allDataState.slug}/> */}

    </div>
  );
}

export default App;
