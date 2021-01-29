import React,{useEffect, useState} from 'react';
import LineChart from '../components/LineChart';

function TotalDataVisualizer(props) {

    const [plotData, setplotData] = useState(null)

    useEffect(() => {       
        //console.log(props.data);
        var newList=[]
        props.data.map((element)=>(
            newList.push({x:element.date, y:element.positive})
        ));
        setplotData(newList);
    }, [props.data])

    return (
        <div className="chart" style={{width:700}}>
            { 
                plotData &&                 
                    <><hr/><center><h3>World Wide Data</h3></center><LineChart data={plotData} modifiable={true}/><LineChart data={plotData} modifiable={false}/></>
            }
        </div>
    )
}

export default TotalDataVisualizer
