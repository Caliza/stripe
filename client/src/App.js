import logo from './logo.svg';
import './App.css';
import StripeContainer from './components/StripeContainer';
import tongs from './assets/tongs.jpg'
import { useState } from 'react';

function App() {
  const [showItem, setShowItem]= useState(false )
  return (
    <div className="App">
      <h1>Store</h1>
      {showItem ? <StripeContainer/> : <><h3>$10.00</h3><img src={tongs} alt="Tongs "/><button onClick={() => setShowItem(true)}>Purchase Tong </button></>}
    </div>
  );
}

export default App;
