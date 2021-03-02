import React from 'react'
import {Card,Button}from 'react-bootstrap'
import {Link}from 'react-router-dom'

const Cardpost = ({post}) => {
    return (
        <div>
            <Card style={{ width: '15rem' , height:'400px' }}>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                   
                    <Card.Title>{post.body}</Card.Title>
                    
                 </Card.Body>
                 <Link to={`/Commentaires/${post.id}`} > 
                 <Button 
                
                 variant="success">test</Button>
                 </Link>

                 
             </Card>
        </div>
    )
}

export default Cardpost
