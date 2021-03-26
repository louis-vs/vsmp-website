import React from 'react';
import './App.css';
import logo from './images/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>coming soon...</p>
        <p itemScope itemType="https://schema.org/Person">
          contact <span itemProp="givenName">Guy</span> <span itemProp="familyName">Van Steene</span> at <a itemProp="email" href="mailto:guy@vsmp.co.uk" target="_blank" rel="noreferrer">guy@vsmp.co.uk</a>
        </p>
        <img src={logo} alt="Logo" />
      </header>
    </div>
  );
}

export default App;
