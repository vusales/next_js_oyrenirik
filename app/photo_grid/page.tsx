import React from 'react'; 
import photos from "@/data/photos"; 
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

const Page = (props: Props) => {
  return (
    <>
        <h1 className='text-4xl font-extrabold mb-3'>Photos grid</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                photos.map((photo )=>(
                    <Link 
                        key={photo.id} 
                        href={`/photo_grid/${photo.id}`}
                    >
                        <Image  
                            src={photo.url} 
                            alt={photo.name_photo}
                            width={500}
                            height={900}
                        />
                    </Link>
                ))
            }
        </div>
    </>
  )
}

export default Page; 