//import { render } from '@testing-library/react';
import React from 'react';

import Cards from './Components/Cards/Cards';
import Charts from './Components/Charts/Charts';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import {FetchData} from './api/index';
import './App.css';
import styles from './App.module.css';

import coronaImage from './Images/image.png';



class App extends React.Component{
  state = {
    data:{},
    country: '',
  }

  async componentDidMount(){
    const data = await FetchData();

    this.setState({ data });
  }

  countryChangeHandler = async (country) =>{
    const data = await FetchData(country);
    
    this.setState({data, country: country})
           
  }

  render() {
    const {data, country} = this.state;
  return (
    <div className={styles.App}>
      <img src={coronaImage} classname = {styles.img} alt="COVID-19"/>
     <Cards data = {data} /> 
     <CountryPicker countryChangeHandler={this.countryChangeHandler} /> 
     <Charts data = {data} country = {country} />
    </div>
  );
}}

export default App;
