import React,{useRef,useEffect,useState} from 'react'
import { Line } from 'react-chartjs-2'
import '../App.css';
import Button from 'react-bootstrap/Button';

export default function LineChart(props) {


    //const graphObject = useRef({})
    const [graphObject,setGraphObject] = useState({})
    const [subtitle,setsubtitle] = useState("")

    const splitData=(nValue)=>{
        var dataArray=[]
        

        var newGraphObject={};
        newGraphObject.labels=[];
        newGraphObject.datasets=[];
        //console.log(nValue)
        var dataLength=nValue==0?props.data.length:nValue;
        for(var i=0;i<dataLength;i++){
            //console.log(props.data[i])
            newGraphObject.labels.push(props.data[i].x)
            dataArray.push(props.data[i].y);
        }
        newGraphObject.labels=newGraphObject.labels.reverse();
        dataArray=dataArray.reverse();
        newGraphObject.datasets.push({label:`${dataLength} days data`,data:dataArray,borderColor: "rgba(75,192,192,1)",backgroundColor:['rgba(75,192,192,0.2)']});
        console.log(newGraphObject);
        setGraphObject(newGraphObject);
        var pct=0;
        if(dataArray[0]==="0"){
            console.log(dataArray[dataArray.length-1]);
            console.log(dataArray[0]);
            pct=((dataArray[dataArray.length-1]-dataArray[0])/(parseInt(dataArray[0])+1))*100;
        }
        else{                        
            pct=((dataArray[dataArray.length-1]-dataArray[0])/(dataArray[0]??1))*100;    
        }
        var subtext = pct>0?`an increase of ${pct.toFixed(2)}%`:`a decrease of ${pct.toFixed(2)}%`;
        dataArray.length>300?setsubtitle(""):
        setsubtitle(`Over the past ${dataLength} days there was ${subtext}`);
    }

    useEffect(() => {
       props.modifiable?splitData(7):splitData(0)

    }, [props.data])
    

    return (
        <div>            
            <Line data={graphObject} /> 
            <center><h3>{subtitle}</h3></center>
            {
            props.modifiable?<>
                <center>
                <Button variant="primary" className="btn-primary" onClick={()=>{splitData(7)}}>7 Day</Button>&nbsp;&nbsp;
                <Button variant="primary" className="btn-primary" onClick={()=>{splitData(30)}}>30 Day</Button>
                </center>
                </>:
                <></>
            }
        </div>
    )
}
