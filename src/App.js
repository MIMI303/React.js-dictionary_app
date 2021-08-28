
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import Header from './Components/Header/header';
import Definitions from './Components/Definitions/Definitions';

// imporotovana paketa "material-ui/core" koja ima mnostvo korisnih alata https://material-ui.com/

function App() {   //kreiranje state-a za reci, znacenja i kategorije odn jezika
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");


  //importovanje API pomocu npm i axios biblioteke za fetchovanje linkova; nakon toga kreiranje funkcije recnika
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);

      console.log(data);
      setMeanings(data.data)

    } catch (error) {
      console.log(error);
    }
  }
// poziv funkcije recnika 

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return <div className="App" style={{ height: '100vh', backgroundColor: "#282c34", color: "white" }}>
    <Container maxWidth="md" style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header category={category} setCategory={setCategory} word={word} setWord={setWord} />
      {meanings && (
      <Definitions word={word} meanings={meanings} category={category} />
      )}
    </Container>
  </div>

}

export default App;
