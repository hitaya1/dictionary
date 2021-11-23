import axios from 'axios';
import './App.css';
import {useEffect} from 'react'

function App() {
  const dictionaryAPI  = async () => {
    try {
      const data = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/plane');
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    dictionaryAPI()
  }, [])

  //if you keep the brackets empty then useEffect is called whenever the component renders the first tim
  //but if we add dependencies, it's gonna be calld every time they change

  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
