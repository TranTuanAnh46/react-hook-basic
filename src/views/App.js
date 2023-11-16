import logo from './logo.svg';
import './App.scss';
const App = () => {
  let name = "Eric";
  let number = 2021
  let object = { name: `Tuan Anh`, age: `23` }
  let link = `https://viettuts.vn/java-string/lop-stringbuilder-trong-java`;
  return (
    <div className="App">
      {console.log(`check object : `, object)}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {name} in {number}!</h1>
        <a href={link} target='_blank'>Click here</a>
      </header>
    </div>
  );
}

export default App;
