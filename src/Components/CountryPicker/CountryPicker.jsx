import React, {useState, useEffect} from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import Countries from '../../api/index';
import styles from './CountryPicker.module.css';

const CountryPicker = ({countryChangeHandler}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(()=>{
        const fetchmyAPI = async () =>{
            setFetchedCountries(await Countries());

        }
        fetchmyAPI();

    },[]);


    return(
        <FormControl className={styles.formControl}>
          <NativeSelect defaultValue="" onChange={(e)=> countryChangeHandler(e.target.value)}> 
              
              <option value="">Global</option>
              {fetchedCountries.map((country , i)=><option key={i} value={country}>{country}</option>)}
              
          </NativeSelect>
      </FormControl>
    
    );
};


export default CountryPicker;