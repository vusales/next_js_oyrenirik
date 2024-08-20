"use client";
import React from 'react';
import { useFormStatus } from 'react-dom';

const FormSubmitButton = () => {
  const {pending} = useFormStatus(); 

  return (
    <button 
        type="submit" 
        aria-disabled={pending}
        className='p-3 bg-slate-700 text-white text-lg mt-3 rounded-md'
    > Submit button</button>
  )
}

export default FormSubmitButton;
