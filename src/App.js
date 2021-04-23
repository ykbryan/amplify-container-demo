import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import API from '@aws-amplify/api';
import Amplify from "@aws-amplify/core";

import awsConfig from "./aws-exports";
Amplify.configure(awsConfig);


function App() {
  useEffect(() => {
    getMessage();
  }, [])
  
  async function getMessage() {
    const apiName = awsConfig.aws_cloud_logic_custom[0].name;
    await API.get(apiName, '/', {})
      .then(data => {
        console.log(data)
      }).catch(error => {
        console.log(error.response);
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
