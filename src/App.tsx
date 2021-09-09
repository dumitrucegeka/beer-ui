import './App.css';
import BeerList from './screens/beer-list/BeerList';
import { BEERS_MOCK } from './beers';
import Search from './components/Search';
import { ChangeEvent, useState } from 'react';

function App() {
  const [currentSearch, setCurrentSearch] = useState('');
  
  const handleSearch = (event: ChangeEvent) => {
    const searchedValue = (event.target as HTMLInputElement).value
    console.log({searchedValue})
    
    setCurrentSearch(searchedValue)
  }

  return (
    <div className="App">
      <h1>$PLACEHOLDER</h1>

      <Search selectedValue={currentSearch} onChange={handleSearch}></Search>
      
      <BeerList beers={BEERS_MOCK}></BeerList>
    </div>
  );
}

export default App;
