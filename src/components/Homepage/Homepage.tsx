import React from 'react'
import Posts from '../posts/Posts'
import './HomePage.css'
import {IWriteBlog }from '../../types'
interface IhomeProps{
  writeblog:IWriteBlog[];
}

const Homepage:React.FC<IhomeProps> = ({writeblog}) => {
  return (  
    <>
    <div className="home">
    <Posts writeblog={writeblog}/>

    </div>
    </>
  )
}

export default Homepage