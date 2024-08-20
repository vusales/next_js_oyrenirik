"use client";
import Link from 'next/link';
import React from 'react'; 


const GlobalError = ({error , reset}: {error:Error & { digest?: string } , reset:()=>void}) => {
  return (
    <html>
        <body>
            <div>message:  {error.message} </div>
            <button onClick={reset}>Try again</button>
            <Link href="/"> Back to Home</Link>
        </body>
    </html>
  )
}

export default GlobalError; 
