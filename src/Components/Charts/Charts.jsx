import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
//import fetchDailyData from '../../api';
import {Line , Bar} from 'react-chartjs-2';
//{data:{ confirmed, recovered, deaths}}
import styles from './Charts.module.css';

const Charts = ({data:{confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(()=> {
        const fetchAPI = async()=> {
           const initialData= await fetchDailyData() ;
           setDailyData(initialData);
            
        }
        
        fetchAPI();
    },[]);


    const lineChart = (
        dailyData[0]? (
              <Line 
              data={{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map((data) => data.confirmed),
                    label : 'Infected',
                    borderColor: 'purple',
                    
                    fill: true ,
                  },{
                    data: dailyData.map((data) => data.deaths),
                    label : 'deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgb(255, 0, 0, 0.5)',
                    fill: true ,
                  }]
              }}
              /> 
              ): null
       );

       const barChart =(
        confirmed
        ?(
            <Bar
            data={{
                labels: ['Infected' , 'Recoverd', 'Deaths'],
                datasets:[{
                    label:'People',
                    backgroundColor:[
                        'rgba(0, 0, 255, 0.5)',
                        'rgba(0, 255, 0, 0.5)',
                        'rgba(255, 0, 0, 0.5)',
                    ],
                    data:[confirmed.value, recovered.value, deaths.value]
                }]

            }}
            options={{
                legend:{display: false},
                title:{display: true, text:`current state in ${country}`},
            }}
             />

        ): null
    );
    return(
        <div className={styles.container}>
           {country ? barChart: lineChart} 
        </div>
    )
};


export default Charts;

