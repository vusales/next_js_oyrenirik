"use client"; 
import React from 'react';
import { someFunc } from '@/app/test/actions';
import FormSubmitButton from '../FormSubmitButton';
import { useFormState } from 'react-dom';


const FormComponent = () => {
    const functionWithBind = someFunc.bind( null ,  8 ); 
    const [message,  formAction] = useFormState( functionWithBind , null);  
  return (
    <form action={formAction} >
        <input 
            type="text" 
            name="firstname" 
            required
            className="block w-50 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2"
        />
        <input 
            type="text" 
            name="lastname" 
            className="block w-50 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
        />
        <div className='my-2'>{message}</div>
        <FormSubmitButton />
    </form>
  )
}

export default FormComponent; 
