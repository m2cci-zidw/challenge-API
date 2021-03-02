import React from 'react'
import {Card}from 'react-bootstrap'


const CardComment = ({comment}) => {
    return (
        <div>
            <Card style={{ width: '15rem' , height:'400px' }}>
                <Card.Body>
                    <Card.Title>{comment.name}</Card.Title>
                   
                    <Card.Title>{comment.body}</Card.Title>
                    
                 </Card.Body>
                 

                 
             </Card>
            
        </div>
    )
}

export default CardComment
