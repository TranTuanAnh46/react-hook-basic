import logo from './logo.svg';
import './App.scss';
import Nav from './Nav.js'
const App = () => {
  let name = "Eric";

  const handleEventClick = (event) => {
    console.log(">>>>>>>>> click me ", event.target.value)
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {name}!</h1>
        <input type="text" value={"Erric"} onClick={(event) => { handleEventClick(event) }}></input>
        <button type="button" onClick={(event) => { handleEventClick(event) }}>Click me</button>
      </header>
    </div>
  );
}

export default App;
