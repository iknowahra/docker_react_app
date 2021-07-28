import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {list.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
        <div className="container">
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <button
            type="submit"
            onClick={() => {
              setList((p) => [...p, value]);
              setValue('');
            }}
          >
            submit
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
