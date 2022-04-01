import React from 'react'
import "./Post.css"
import {IWriteBlog} from '../../types'

interface Ipost{
  blog:IWriteBlog;
}
const Post:React.FC<Ipost> = ({blog}) => {

  
  return (
    <div className="post">
        <img src="https://i.pinimg.com/originals/0d/8e/02/0d8e0215230f829053d078247b5d5bec.jpg" alt="image" className="postimg" />
    <div className="postInfo">
        <div className="postCats">
            <span className="postcat">Music</span>
            
            <span className="postcat"></span>
        </div>
            <span className="postTitle">{blog.title} </span>
    </div>
    
    <p className="postDesc">
    {blog.description}
    </p>
    </div>
  )
}

export default Post