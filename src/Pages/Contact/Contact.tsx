import React from 'react'
import './Contact.css'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
const schema = yup
  .object()
  .shape({
    email: yup.string().email("enter valid email").required("field is required"),
    message: yup.string().required("field is required"),
  })
  .required();
const Contact = () => {
  const {register,handleSubmit, formState:{errors}}=useForm({
    resolver:yupResolver(schema),mode:"onBlur"
  });
  const submitEvent=handleSubmit((data)=>{
    alert("form validation successfull. see console for result");
      console.log(data);
      
  })
  
  return (
    <div className="aboutForm">
    <div className="aboutcontact">
        CONTACT US
    </div>
    <form className='form' onSubmit={submitEvent}>
        <div className="aboutFormgroup">

        <input type='text' className='aboutText'{...register('email')} placeholder='email address'/>
        <div>
          {errors.email?.message}
        </div>
        <div className="aboutFormMessage ">

        <textarea   placeholder='message'{...register('message')} className='aboutText aboutMessage '/>
        <div>
          {errors.message?.message}
        </div>
        </div>
        <button className='aboutSubmit'>Submit</button>
        </div>
    </form>
</div>
  )
}

export default Contact