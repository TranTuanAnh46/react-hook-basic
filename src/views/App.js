import logo from './logo.svg';
import './App.scss';
import Nav from './Nav.js'
import { useState } from 'react';

const App = () => {
  let [name, setName] = useState('Eric');
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: "todo1", title: "Watching Hoi Dan IT Channel" },
    { id: "todo2", title: "Doing homework" },
    { id: "todo3", title: "Playing game" }
  ]);


  const handleEventClick = (event) => {

    if (!address) {
      alert(`Address is falsy or empty`)
      return;
    }

    let todo = { id: "abc", title: address }

    //đoạn này có nghĩa là copy các phần tử của array todos lên phía trước và chèn phần tử todo vào phía sau
    // toán từ ... là cho việc copy - search từ khóa spread syntax array trên google để đọc thêm 
    setTodos([...todos, todo])
    setAddress('')
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
        <div className="todos-container">
          {todos.map(todo => {
            return (
              <li className="todo-child" key={todo.id}>{todo.title}</li>
            )
          })}

        </div>
        <input type="text" value={address} onChange={(event) => { handleOnchangeInput(event) }}></input>
        <button type="button" onClick={(event) => { handleEventClick(event) }}>Click me</button>
      </header>
    </div>
  );
}

export default App;
