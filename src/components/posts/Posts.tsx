import React,{useState,useEffect} from 'react'
import Post from '../post/Post'
import axios from 'axios';
import { IWriteBlog } from '../../types';
import './Posts.css'
interface IPosts{
  writeblog:IWriteBlog[];
}


const Posts:React.FC<IPosts>= ({writeblog}) => {
  
  return (
    
    <div className="posts">
      {
        writeblog.map((blog)=>(
          <Post key={blog.id} blog={blog}/>
        ))
      }
      
    </div>
  )
}

export default Posts