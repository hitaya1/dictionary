import axios from 'axios';
import './App.css';
import {useEffect, useState} from 'react'
import { Container } from '@material-ui/core';
import Header from './components/Header/Header';

function App() {
  const [category, setCategory] = useState('en')
  const [word, setWord] = useState('')
  const [meanings, setMeanings] = useState([])
  const dictionaryAPI  = async () => {
    try {
      const data = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/plane');

      setMeanings(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(meanings)

  useEffect(() => {
    dictionaryAPI()
  }, [])

  //if you keep the brackets empty then useEffect is called whenever the component renders the first tim
  //but if we add dependencies, it's gonna be calld every time they change

  return (
    <div className="App" style={{height: '100vh', backgroundColor:'#282c34', color: 'white'}}>
      <Container maxWidth='md' style={{display: 'flex', flexDirection: 'column', height: '100vh'}}><Header category={category} seetCategory={setCategory}/></Container>
    </div>
  );
}

export default App;
