const addData=()=>{
    
    return async(dispatch)=>{
        //const data = await fetch(`https://api.covidtracking.com/v1/us/daily.json`);        
		const data = await fetch(`https://raw.githubusercontent.com/Ad1tyaV/pyTestFiles/master/daily.json`);    
        var jsonData = await data.json();
        //console.log(jsonData);
        dispatch({type:'ADD_DATA',payload:jsonData})
    }

}

export default addData;