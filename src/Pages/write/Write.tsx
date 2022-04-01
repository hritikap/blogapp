import React, { useRef } from 'react'
import './Write.css'
import {IWriteBlog} from '../../types'

interface IwriteProps{
  setWriteBlog:React.Dispatch<React.SetStateAction<IWriteBlog[]>>
  writeblog:IWriteBlog[]
}
const Write:React.FC<IwriteProps>=({setWriteBlog,writeblog})=> {
  const titleRef=useRef<HTMLInputElement | null>(null);
  const descRef=useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
setWriteBlog([...writeblog,{
  id:Date.toString(),
  title:(titleRef.current as HTMLInputElement).value,
  description:(descRef.current as HTMLTextAreaElement).value
}

]);
(titleRef.current as HTMLInputElement).value="";
(descRef.current as HTMLTextAreaElement).value='';
  }
  

  return (
    <div className="write">
      <img src="https://i.pinimg.com/originals/0d/8e/02/0d8e0215230f829053d078247b5d5bec.jpg"  alt="image" className="writeImg" />
        <form className="writeForm" onSubmit={(e)=>{handleSubmit(e)}}>
            <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
                <input type='file' id='fileInput'style={{display:'none'}}/>
                <input type='text' placeholder='Title' ref={titleRef} className='writeInput' autoFocus={true}/>

            </div>
            <div className="writeFormGroup">
                <textarea ref={descRef} placeholder='write something...'
                 className='writeInput writeText'></textarea>
            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}

export default Write