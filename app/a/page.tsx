import Link from 'next/link';
import React from 'react'; 


const Page = () => {
  return (
    <div className='flex flex-col'>
        A sehifesi
        <Link href="/about">About sehifesi</Link>
    </div>
  )
}

export default Page; 