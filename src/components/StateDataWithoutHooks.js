import React from 'react';
import { useEffect } from 'react';
import update from '../redux/actions/stateAction';
import { connect } from 'react-redux';
import {statesData} from './statesData';
import CaseVisualize from './CaseVisualize';
import addData from '../redux/actions/totalDataAction';
import TotalDataVisualizer from './TotalDataVisualizer';

function StateDataWithoutHooks(props) {

    useEffect(() => {        
       //To just pre-load Alabama
       var _state = document.getElementById('state_select').value;
       props.stateDispatch(_state);       
       props.totalDataDispatch();
    }, [])

    return (
        <div className="App-Content">            
            
            <center>
            <span style={{fontWeight:'500'}}>Pick a State</span>&nbsp;&nbsp;
            
            <select id="state_select" onChange={()=>{props.stateDispatch(document.getElementById('state_select').value)}}>                
                {
                    Object.keys(statesData.data()).map(
                        (element)=>{
                            return <option key={element} value={element}>{statesData.data()[element]}</option>
                        }
                    )                    
                }                                                   
            </select>    
            </center>
            <br/><br/>
            <React.Fragment>
            {console.log(props)}            
            {props.apiData  && <CaseVisualize data={props.apiData}/>}         
            {                      
                props.totalData && <TotalDataVisualizer data={props.totalData}/>
            }
            </React.Fragment>

        </div>
    )
}

const mapStateToProps = (state) =>{                
    return{        
        apiData : state.stateSelectReducer.stateData,    
        totalData : state.totalDataReducer.totalData    
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        //stateDispatch:(_state)=>dispatch(update('CA'))
        stateDispatch:(_state)=>dispatch(update(_state)),
        totalDataDispatch:()=>dispatch(addData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(StateDataWithoutHooks);
