import React ,{Component} from 'react';
 import {Bar} from 'react-chartjs-2';
class Chart extends Component {
    
    state = { 
        labels:['Mon','Tue','Wed','Thurs','Fri'],
        datasets:[
            {
              label:'Average Salary Amount USD($)',
              backgroundColor:'rgba(75,192,192,1)',
              borderColor:'rgba(0,0,0,1)',
              borderWidth:2,
              data:[34,65,78,89,35,56,66,84,21,67,87,78] 
        }
    ]
     } 
     // instal thes libraries to enable the chart
     // npm i react-chartjs-2
     //npm install chart.js
    render() { 
        return (
            <div className='body_container'>
            <div className='heading'>Spending - Last 7 days</div>
            <div className='chart'>
             <Bar 
            data={this.state} 
            option={
                {
                    title:{
                    display:true,
                    text:'Average Employee Salary per Month',
                    fontSize:20
                    },
                    legend:{
                        display:true,
                        position:'right',    
                    }
                }
                }
                /> 
            </div>
            </div>
        );
    }
}
 
export default Chart;