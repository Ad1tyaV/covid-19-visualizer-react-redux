import React from 'react';
import { useEffect } from 'react';
import { AddUser, RemoveLastUser } from '../redux/actions';
import { connect } from 'react-redux';



function UserData(props) {

    useEffect(() => {
        const fetchData= async()=>{
            const data = await fetch('https://jsonplaceholder.typicode.com/users');
            var jsonData = await data.json();            
            jsonData.map((user)=>(props.addUser(user)));
        }
        fetchData();
    }, [])



    return (
        <div>
            
            {props.users.map(user=>{return <h3>{user.id} - {user.name}</h3>})}
            <button onClick={()=>{props.RemoveLastUser()}}>Remove First Entry</button>
                        
        </div>
    )
}

const mapStateToProps = state => {
    return {        
        users:state.userDataReducer.users
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addUser:(userObject)=>dispatch(AddUser(userObject)),
        RemoveLastUser:()=>dispatch(RemoveLastUser())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserData)