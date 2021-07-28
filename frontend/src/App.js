import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');

  const changeHandler = (event) => {
    setValue(event.currentTarget.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    axios.post('/api/value', { value: value }).then((response) => {
      if (response.data.success) {
        console.log('response', response);
        setList([...list, response.data]);
        setValue('');
      } else {
        alert('fail to save on database');
      }
    });
  };

  useEffect(() => {
    axios.get('/api/hi').then((response) => {
      console.log('response', response);
    });
  }, []);

  useEffect(() => {
    axios.get('/api/values').then((response) => {
      console.log('response', response);
      setList(response.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {list.map((v, i) => (
            <li key={i}>{v.value}</li>
          ))}
        </ul>
        <div className="container">
          <input
            placeholder="input comments..."
            value={value}
            onChange={changeHandler}
          />
          <button
            type="submit"
            onClick={() => {
              submitHandler();
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
