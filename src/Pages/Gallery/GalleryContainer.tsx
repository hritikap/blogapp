import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Gallery from './Gallery'
import "./Gallery.css"

interface Iphotos{
    albumId?:number;
    id:number;
    title?:string;
    url:string;
    thumbnailUrl?:string;
}

const GalleryContainer:React.FC = () => {

const[photo,setPhoto]=useState<Iphotos[]>([])

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((res)=>setPhoto(res.data.slice(0,25)))
    .catch((err)=>console.log(err))
})

  return (
   <div className='galleryImg'>
{
    photo.map((gallery)=>{
      return <Gallery key={gallery.id} photos={gallery} />
    })
}
   </div>
  )
}

export default GalleryContainer