export const AddUser = (userObject) =>{
    return {
        type:'AddUser',
        payload:userObject
    }
}

export const UpdateUser = (userId,oldValue,newValue)=>{
    return {
        type:'UpdateUser',
        payload:{"userID":userId,"oldValue":oldValue,"newValue":newValue}
    }
}

export const RemoveLastUser = ()=>{
    return {
        type:'RemoveUser',
        payload:{}
    }
}