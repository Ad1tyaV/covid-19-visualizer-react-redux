const initialState={
    totalData:null
}

const totalDataReducer = (state=initialState,action)=>{

    console.log(action);
    switch(action.type){
        case 'ADD_DATA':
            return {
                    ...initialState,totalData:action.payload
                }
        default:
            return state;        
    }

}

export default totalDataReducer;