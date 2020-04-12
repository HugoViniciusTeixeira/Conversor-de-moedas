import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Conversor from './componentes/conversor'

class App extends Component {
  render(){ 
    return (
      <div className="App">
         <h1>Converter  <span id="moedas_title">Moedas</span></h1>
         

           <div className="linha">
            <Conversor></Conversor>
          </div>
           
          
     
     
      </div>


      
    );
  } 
}

export default App;
