import React,{Component} from 'react';
import Header from "./HEADER/header.jsx";
import Chart from './BODY/body_container.jsx';
class ChartApp extends Component {
    state = {  } 
    render() { 
        return (
            
            <div className='container'>
               <Header/> 
               <Chart/>
            </div>

            
        );
    }
}
 
export default ChartApp;