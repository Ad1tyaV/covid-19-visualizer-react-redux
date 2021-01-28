export const update = (_state) =>{
    console.log(_state);
    console.log('here!');
    return async (dispatch)=>{                
        //const data = await fetch(`https://api.covidtracking.com/v1/states/${_state}/current.json`)
        const data = await fetch(`https://api.covidtracking.com/v1/states/${_state}/daily.json`);
        //console.log(`https://api.covidtracking.com/v1/states/${_state}/current.json`)
        var jsonData = await data.json();        
        dispatch({type:'update',payload:jsonData});
    }

}

export default update;