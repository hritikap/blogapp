import React from 'react'
import { IGalleryBlog } from '../../types'
// import './Gallery.css'

interface Igallery{
    photos:IGalleryBlog
}
const Gallery :React.FC<Igallery>= ({photos}) => {
  return (
    <div >
        <img src={photos.url} alt="img" className="imgstyle" />
    </div>
  )
}

export default Gallery