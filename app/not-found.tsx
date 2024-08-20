import React from 'react'; 
import Link from 'next/link';

const NotFound = () => {
  return (
    <div>
        <h1>Səhifə tapılmadı</h1>
        <Link href="/">Keçid et əsas səhifəyə</Link>
    </div>
  )
}

export default NotFound; 
