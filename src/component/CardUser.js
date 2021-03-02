import React  from 'react'
// import {useState,useEffect} from 'react'
// import axios from 'axios'
import{Card,Button}from 'react-bootstrap'
import {Link} from 'react-router-dom'

const CardUser = ({user,match}) => {
    // const [post, setPost] = useState([])

    // const getuser=()=>{
    //     // const url=`https://jsonplaceholder.typicode.com/users/${match.params.id}`
    //     const url =`https://jsonplaceholder.typicode.com/posts/?userId=${match.params.id}`
    //     axios.get(url)
    //     .then(response => response.data)
    //     .then(resData => setPost(resData))
    // }
    // useEffect(() => {
    //     getuser()
        
    // }, [])

   
    return (
        <div >
            <div>
                
            <Card style={{ width: '15rem' , height:'200px' }}>
                <Card.Body>
                    <Card.Title>{user.id}</Card.Title>
                   
                    <Card.Title>{user.name}</Card.Title>
                    
                 </Card.Body>
                 

                 <Link to={`/Post/${user.id}`} > 
                 <Button 
                
                 variant="success">Success</Button>
                 </Link>
             </Card>
             {/* <Link to={{pathname:`/users/user/${user.id}`,state:{user:user}}}  key={user.id} className="card-user" >
                    <CardUser user={user}  />  
            </Link> */}
             </div>
        </div>
    )
}

export default CardUser


