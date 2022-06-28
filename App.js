import './App.css';
import Axios from 'axios';
import { useState, useEffect } from 'react'
import Coin from './components/Coin';


function App() {

  const [coinList, setCoinList] = useState([]);
  const [search, setSearch] = useState("");

useEffect(()=>{
  Axios.get("https://api.coinstats.app/public/v1/coins").then(res => setCoinList(res.data.coins))
  console.log(coinList)
}, [])

const searchedCoin = coinList.filter(coin =>{
  return coin.name.toLowerCase().includes(search.toLowerCase());
})


  return (
    <div className="App">
      <div className="cryptoHeader">
        <h1>Crypto Finder</h1>
        <input type="text" placeholder='Bitcoin...' onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="cryptoContainer">
{
  searchedCoin.map(c=>{
    return <Coin key={c.name} name={c.name} icon={c.icon} price={c.price} symbol={c.symbol}/>
  })
}
      </div>
    </div>
  );
}

export default App;
