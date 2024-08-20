import React from 'react'

const Page = ({  
    params, 
  }: {
    params: { segment: string[] }
  }) => {
  return (
    <div>
        Dinamik deyisen segment: {params.segment}
    </div>
  )
}

export default Page; 
