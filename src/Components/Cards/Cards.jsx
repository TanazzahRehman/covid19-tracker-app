import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './Cards.module.css';
import Countup from 'react-countup';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return 'Loading....';
    }
    if(!recovered){
        return 'Loading....';
    }
    if(!deaths){
        return 'Loading....';
    }
    //if(!lastUpdate){
        //return 'Loading....';
    //}
    return(
      <div className={styles.container}>
        <Grid container spacing = {3} justify = "center">
            <Grid item component = {Card} xs = {12} md = {3}  className={styles.infected}>
                <CardContent>
                    <Typography color = "textSecondary" gutterBottom> Infected </Typography>
                    <Typography variant ="h5"  > 
                     <Countup
                      start = {0}
                      end = {confirmed.value}
                      duration = {2.5}
                      separator = ","
                     /> 
                    </Typography>
                    <Typography color = "textSecondary" >{new Date(lastUpdate).toDateString()} </Typography>
                    <Typography variant = "body2" > Number of active cases of COVID </Typography>
                </CardContent>

            </Grid>
            <Grid item component = {Card} xs = {12} md = {3} className={styles.recovered}>
                <CardContent>
                    <Typography color = "textSecondary" gutterBottom> Recovered </Typography>
                    <Typography variant ="h5" > 
                    <Countup
                      start = {0}
                      end = {recovered.value}
                      duration = {2.5}
                      separator = ","
                     />  </Typography>
                    <Typography color = "textSecondary" > {new Date(lastUpdate).toDateString()} </Typography>
                    <Typography variant = "body2" > Number of recovered cases of COVID </Typography>
                </CardContent>

            </Grid>
            <Grid item component = {Card} xs = {12} md = {3} className={styles.deaths}>
                <CardContent>
                    <Typography color = "textSecondary" gutterBottom> Deaths </Typography>
                    <Typography variant ="h5" >
                     <Countup
                      start = {0}
                      end = {deaths.value}
                      duration = {2.5}
                      separator = ","
                     /> 
                   </Typography>
                    <Typography color = "textSecondary" >  {new Date(lastUpdate).toDateString()} </Typography>
                    <Typography variant = "body2" > Number of fatalities of COVID </Typography>
                </CardContent>

            </Grid>
     
        </Grid>
      </div>
    )
};


export default Cards;