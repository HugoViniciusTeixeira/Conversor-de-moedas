import React, { Component } from 'react';
import './conversor.css'


export default class Conversor extends Component{

    constructor(props){
        super(props);

        this.state = {
            moedaA_valor: "",
            moedaB_valor: "",
            item: "",
            item2: ""

        }

        this.converter = this.converter.bind(this);
        this.alterarItem = this.alterarItem.bind(this);
        this.alterarItem2 = this.alterarItem2.bind(this);
    }

    alterarItem = (event) => {
        this.setState({item: event.target.value})
        
    }
    alterarItem2 = (event) => {
        this.setState({item2: event.target.value})
        
    }


    converter(){
        let cotacao_desejada = `${this.state.item2}`
        let moeda1 = `${this.state.item}`;
        let moeda2 = `${this.state.item2}`;

        let url = `https://api.exchangeratesapi.io/latest?base=${cotacao_desejada}&symbols=${moeda1}`;
       
        fetch(url)
        .then(res=>{
           
            return res.json();
        })
        .then(json=>{
           
            //convertertendo objeto em array
            let configuracao_geral = json;
            let cotacao =  Object.values(configuracao_geral.rates)  
            
            //calculando o valor da moeda convertida
            let moedaB_valor = (  parseFloat(this.state.moedaA_valor / cotacao[0])).toFixed(2);
            this.setState({ moedaB_valor })
            
        })
        
       
    }
    

    

    render(){
    return(
        

        <div className="conversor">
            <div>
            
            <label htmlFor="cambio">DE:</label>
            <select id="cambio" value={this.state.item} onChange={this.alterarItem}>
                <option></option>
                <option value="BRL">Real</option>
                <option value="USD">Dolar Americano</option>
                <option value="CAD">Dolar Canadense</option>
                <option value="CHF">Franco Suiço</option>
                <option value="GBP">Libra Esterlina</option>
                <option value="SEK">Coroa Sueca</option>
                <option value="EUR">Euro</option>
                <option value="HKD">Dólor de Hong Kong</option>
                <option value="ISK">Coroa Islandesa</option>
                <option value="PHP">Peso Filipino</option>
                <option value="DKK">Coroa Dinamarquesa</option>
                <option value="HUF">Florim Húngaro</option>
                <option value="CZK">Coroa Checa</option>
                <option value="RON">Leu Romeno</option>
                <option value="IDR">Rupia Indonésia</option>
                <option value="INR">Rupia Indiana</option>
                <option value="RUB">Rublo Russo</option>
                <option value="HRK">Kuna Croata</option>
                <option value="JPY">Iene</option>
                <option value="THB">Bate</option>
                <option value="MYR">Ringgit Malaio</option>
                <option value="BGN">Lev búlgaro</option>
                <option value="TRY">Lira turca</option>
                <option value="CNY">Renminbi</option>
                <option value="NOK">Coroa Norueguesa</option>
                <option value="NZD">Dólar neozelandês</option>
                <option value="ZAR">Rand</option>
                <option value="MXN">Peso Mexicano</option>
                <option value="SGD">Dólar de Singapura</option>
                <option value="AUD">Dólar australiano</option>
                <option value="ILS">Novo Shekel Israelense</option>
                <option value="KRW">Won Sul-Xoreano</option>
                <option value="PLN">Zloti</option>

            </select>
            <label htmlFor="cambio2">PARA:</label>
            <select id="cambio2" value={this.state.item2} onChange={this.alterarItem2}>
            <option></option>
                <option value="BRL">Real</option>
                <option value="USD">Dolar Americano</option>
                <option value="CAD">Dolar Canadense</option>
                <option value="CHF">Franco Suiço</option>
                <option value="GBP">Libra Esterlina</option>
                <option value="SEK">Coroa Sueca</option>
                <option value="EUR">Euro</option>
                <option value="HKD">Dólor de Hong Kong</option>
                <option value="ISK">Coroa Islandesa</option>
                <option value="PHP">Peso Filipino</option>
                <option value="DKK">Coroa Dinamarquesa</option>
                <option value="HUF">Florim Húngaro</option>
                <option value="CZK">Coroa Checa</option>
                <option value="RON">Leu Romeno</option>
                <option value="IDR">Rupia Indonésia</option>
                <option value="INR">Rupia Indiana</option>
                <option value="RUB">Rublo Russo</option>
                <option value="HRK">Kuna Croata</option>
                <option value="JPY">Iene</option>
                <option value="THB">Bate</option>
                <option value="MYR">Ringgit Malaio</option>
                <option value="BGN">Lev búlgaro</option>
                <option value="TRY">Lira turca</option>
                <option value="CNY">Renminbi</option>
                <option value="NOK">Coroa Norueguesa</option>
                <option value="NZD">Dólar neozelandês</option>
                <option value="ZAR">Rand</option>
                <option value="MXN">Peso Mexicano</option>
                <option value="SGD">Dólar de Singapura</option>
                <option value="AUD">Dólar australiano</option>
                <option value="ILS">Novo Shekel Israelense</option>
                <option value="KRW">Won Sul-Xoreano</option>
                <option value="PLN">Zloti</option>

            </select>
            </div>

            <h2> {this.state.item}  -> {this.state.item2}</h2>
            <input id="entrada_usuario" type="Number" onChange={(event)=>{this.setState({moedaA_valor:(event.target.value)})}}></input><br/><br/>
            <input  className='button_converter' type="button" value="Converter" onClick={this.converter}></input>
            <h2>{this.state.moedaB_valor}</h2>
            
           
        </div>
    )
}
}