const initialState={
    stateData:null,    
}

const stateSelectReducer = (state=initialState,action) =>{
    //console.log(state);
    console.log(action);
    switch(action.type){
        case 'update':
            console.log(action.payload);
            return{                
                ...initialState,stateData:action.payload
            }
        
            default:
                return state;
    }
}

export default stateSelectReducer;