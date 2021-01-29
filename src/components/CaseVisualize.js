import React,{useState, useEffect, useRef} from 'react'
import { Chart } from 'react-charts'
import LineChart from './LineChart'

function CaseVisualize(props) {

    //console.log(props)
    const [nthDate, setNCases] = useState([])
    const newList=useRef([])

    useEffect(() => {
        //console.log(props.data)
        
        newList.current=[];
        props.data.map((element)=>(            
            newList.current.push({x:element.date, y:element.positive})
        ))        
        //console.log(newList.current);
        setNCases(newList.current);
        //console.log(nthDate); 
    }, [props.data])    
       
    return (
        
        <div className="chart" style={{width:700}}>
            {/* {console.log(nthDate)}  */}
           {/* {JSON.stringify(nthDate)} */}
           {
               
               nthDate.length==0?<></>:
               <>
               <LineChart data={nthDate} modifiable={true}/>
               <LineChart data={nthDate} modifiable={false}/>
               </>
               
               
            }

           
        </div>
    )
}

export default CaseVisualize
