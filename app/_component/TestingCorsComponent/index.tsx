"use client";
import React, {
    useEffect ,  
    useState , 
} from 'react'; 

const TestingCorsComponent = () => {
  useEffect(()=>{
    getData();
  },[]); 


  const getData = async () => {
      try {
          const result = await fetch("http://localhost:5000/data");
          const data = await result.json();
          console.log("data", data); 
      } catch (error) {
          console.error("CORS error:", error);
      }
  }

  return (
    <div>
      <p className="mb-10">Bizim 5000 portundan gələn datamız </p>
    </div>
  )

}

export default TestingCorsComponent
