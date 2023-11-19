import logo from './logo.svg';
import './App.scss';
import Nav from './Nav.js'
import { useState } from 'react';

const App = () => {
  let [name, setName] = useState('Eric');
  const [address, setAddress] = useState('');

  const handleEventClick = (event) => {
    console.log(">>>>>>>>> click address ", address)
    setName(address)
    console.log(">>>>>>>>> click me ", name)
  }

  const handleOnchangeInput = (event) => {
    setAddress(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {name}!</h1>
        <input type="text" value={address} onChange={(event) => { handleOnchangeInput(event) }}></input>
        <button type="button" onClick={(event) => { handleEventClick(event) }}>Click me</button>
      </header>
    </div>
  );
}

export default App;
