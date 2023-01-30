import { Card } from './Card';

import { useEffect, useState } from 'react';
import './App.css';

const App = () =>{
  // note get api_id and api key from "https://developer.edamam.com/edamam-docs-recipe-api-v1"
  const API_ID = "" ;
  const API_KEY = "" ;
  const [searchTerm, setSearchTerm] = useState("") ;
  const [data, setdata] = useState([]); 
  function handleSubmit (e) {
    getData(searchTerm);
    e.preventDefault(); 
    
  }

  const getData = async (searchTerm) => {
    const response = await fetch(`https://api.edamam.com/search?q=${searchTerm}&app_id=${API_ID}&app_key=${API_KEY}`);
    const json = await response.json() ;
    setdata(json.hits);
    console.log(json.hits)
  }

  useEffect(() =>{
    getData("") ;
  }, [])
  
  return (
    <div className='App'>
      <form onSubmit= {handleSubmit} className='search-form'>
        <input className='search-input' type="text" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} />
        <button className='search-button' type="submit">Search</button>
      </form>
      <div className='container'>
        {data.map((d, a) => {
        return <Card key={a} data={d}  />
        })}
      </div>
      
    </div>
  );
}

export default App;
