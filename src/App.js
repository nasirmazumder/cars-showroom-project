import logo from './logo.svg';
import background from '../src/image/ladies-given-key.jpg'

import './App.css';
import Header from './Components/Header/Header';
import Cars from './Components/Header/Cars/Cars';
import ShowCars from './Components/Header/ShowCars/ShowCars';

function App() {
  return (
    <div style={{
      backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat',
      width: '100%'
    }} className="App">

      <Header></Header>
      <div >
        <Cars></Cars>
      </div>

    </div>
  );
}

export default App;
