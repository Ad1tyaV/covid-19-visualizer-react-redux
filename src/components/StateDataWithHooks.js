import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateUser } from '../redux/actions';
import update from '../redux/actions/stateAction';
//import stateSelectReducer from '../redux/reducers/stateSelectReducer';

function StateDataWithHooks() {
    const dispatch = useDispatch();
    const stateData = useSelector((state)=>{return state});
    return (
        <div>
            <React.Fragment>            
            {console.log(stateData)}
            {
                
                stateData.stateData &&
                stateData.stateData.map(state=>{
                    return <h4>{state.state}</h4>
                })
            }
            </React.Fragment>
            
            <select onChange={()=>{dispatch(update('CA'))}}>
                <option value="CA">CA</option>
                <option value="NY">NY</option>
                <option value="PA">PA</option>
                <option value="NJ">NJ</option>
            </select>            
        </div>
    )
}

export default StateDataWithHooks
