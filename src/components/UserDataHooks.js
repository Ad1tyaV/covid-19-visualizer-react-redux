import React from 'react';
import { Provider, useStore, useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import userDataReducer from '../redux/reducers/userDataReducer';

export default function UserDataHooks() {

    const dispatch = useDispatch();

    useEffect(() => {
       const fetchData=async()=>{
           const data = await fetch('https://jsonplaceholder.typicode.com/users');
           const  jsonData = await data.json();
           jsonData.map((user)=>{dispatch({type:'AddUser',payload:user})})
       }
       fetchData();
    }, [])
    const userData = useSelector(state=>state.userDataReducer.users);
    
    return (
        <div>            
            {
                console.log(userData),
                userData.map(user=>(<h3>{user.email}</h3>))
            }
            <button onClick={()=>{dispatch({type:'RemoveUser'})}}>Remove User</button>
        </div>
    )
}
