"use client";
import React , {
    useEffect , 
}
from 'react'; 
import Link from 'next/link';

const error = ({
    error , 
    reset  , 
}: {
    error : Error & { digest?: string } , 
    reset: ()=>void 
}) => {

    useEffect(()=>{
        console.log("error" , error) ;
    },[error]); 

  return (
    <div>
        <div>message:  {error.message} </div>
        <button onClick={reset}>Try again</button>
        <Link href="/"> Back to Home</Link>
    </div>
  )
}

export default error; 
