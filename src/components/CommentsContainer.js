import React from 'react'
import CommentsList from './CommentsList'

const commentsData = [
    {
        name : "John Doe",
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
        replies : [{
            name : "John Doe",
            text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
            replies : []
                
        },
        {
            name : "John Doe",
            text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
            replies : [{
                name : "John Doe",
                text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
                replies : [{
                    name : "John Doe",
                    text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
                    replies : [{
                        name : "John Doe",
                        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
                        replies : []
                            
                    },
                    {
                        name : "John Doe",
                        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
                        replies : []
                            
                    }]
                        
                }]
                    
            }]
                
        }]
            
    },
    {
        name : "John Doe",
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
        replies : [{
            name : "John Doe",
            text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
            replies : [{
                name : "John Doe",
                text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
                replies : []
                    
            },]
                
        },]
            
    },
    {
        name : "John Doe",
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
        replies : []
            
    },
    {
        name : "John Doe",
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
        replies : []
            
    },
    {
        name : "John Doe",
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
        replies : []
            
    },
    
]

const CommentsContainer = () => {
  return (
    <div className='m-2 px-2'>
        <h1 className='text-2xl font-bold my-6'>Comments:</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;