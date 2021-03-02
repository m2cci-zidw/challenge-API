import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Cardpost from './Cardpost'
import {Button}from 'react-bootstrap'
const Post = ({match,history}) => {
    const [posts, setPosts] = useState([])
   
    const getuser=()=>{
        
        const url =`https://jsonplaceholder.typicode.com/posts/?userId=${match.params.id}`
        axios.get(url)
        .then(response => response.data)
        .then(resData => setPosts(resData))
    }
    useEffect(() => {
        getuser()
        
    }, [])
    console.log(posts)
    return (
        <div>
            <Button 
                onClick={()=>history.goBack()}
                 variant="success">Go Back</Button>
            <h1>Liste of post</h1>
            <div className="ListCards"> 

            { posts.map(post=> <Cardpost post={post} key={post.id}/>)}
            </div>
            
        </div>
    )
}

export default Post
