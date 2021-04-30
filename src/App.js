import React, { useState } from 'react';
import logo from './assets/Logo.svg';
import './styles.css'

function App() {
  const [code, setCode] = useState("");
  const [local, setLocal] = useState("");
  const [content, setContent] = useState(null);

  const maskCode = (code) => {
    code = code.replace(/\D/g, '');

    return code;
  }

  const handleSearch = () => {

  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section className="header">
          <span className="title">
            Sistema de consulta Conta Contrato
          </span>
          <span className="subtitle">Consulte sua conta contrato Celpe, Coelba ou Cocern</span>
        </section>
      </header>
      <section className="container">
        <section className="search">
          <select name="local" id="local" value={local} onChange={(event) => setLocal(event.target.value)}>
            <option value="">Local</option>
            <option value="celpe">Celpe</option>
            <option value="coelba">Coelba</option>
            <option value="cocern">Cocern</option>
          </select>

          <input className="code" type="text" name="code" placeholder="Conta Contrato" value={code} onChange={(event) => setCode(maskCode(event.target.value))} />

          <button className="submit" type="button" onClick={handleSearch}>Buscar</button>
        </section>
        <section className="content">{content}</section>
      </section>
    </div>
  );
}

export default App;
