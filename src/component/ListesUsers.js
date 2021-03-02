import React,{useEffect, useState} from 'react'
import CardUser from './CardUser'

import axios from 'axios'
import {Form,FormControl}from 'react-bootstrap'


const ListesUsers = () => {
    const [users, setUsers] = useState([])
    const [filterName, setFilterName] = useState("");

    const getUsers=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.data)
        .then(el=>setUsers(el))
        .catch(error=>`this is ${error}`)
    }
    useEffect(() => {
        getUsers()
    }, [])

   
    return (
        <div >
            <div>
                <Form inline>
                    <FormControl 
                    onChange={(e)=>setFilterName(e.target.value)}
                    value={filterName}
                    type="text" 
                    placeholder="Search" 
                    className="mr-sm-2" />
                    
                    
                </Form>
            </div>
            <h1> Listes Of Users</h1>
            

            <div className="ListCards">
            {users.filter(user=>user.name.toLowerCase().includes(filterName.toLowerCase())).map(user=>
            <CardUser user={user} key={user.id} className="card-user" />)}

              
            </div>

           
                
            {/* <div className="ListUsers">
            {users.map(user=>
            // <Link to={} key={user.id}  >
                <Link to={{pathname:`/users/user/${user.id}`,state:{user:user}}}  key={user.id} className="card-user" >
                    <CardUser user={user}  />  
            </Link>
               )}
            </div> */}
              
              
            
        </div>
    )
}

export default ListesUsers
