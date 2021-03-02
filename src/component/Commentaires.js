import axios from 'axios';
import React,{useState,useEffect} from 'react'
import CardComment from './CardComment';
// import {Link}from 'react-router-dom'
import {Button}from 'react-bootstrap'

const Commentaires = ({match,history}) => {
    const [comments, setComment] = useState([]);
    const getComment=()=>{
        const url=`https://jsonplaceholder.typicode.com/comments/?postId=${match.params.id}`
    axios.get(url)
    .then(response=>response.data)
    .then(restdata=>setComment(restdata))
    }
    
    useEffect(() => {
        getComment()
    }, [])
    let x=comments.length
    return (
        <div>
            {/* <Link  >  */}
                 <Button 
                onClick={()=>history.goBack()}
                 variant="success">Go Back</Button>
                 {/* </Link> */}
        <h1>{x}</h1>
        <div className="ListCards"> 
            
            {comments.map(comment=> <CardComment comment={comment} />)}
        </div>
            
        </div>
    )
}

export default Commentaires
