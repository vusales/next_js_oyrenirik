import React from 'react';
import photos from '@/data/photos'; 
import Image from 'next/image';




const Page = ({params} : {params: {id:string}}) => {
    let photo =  photos.find((photo)=>photo.id == params.id) ; 

  return (
    <div className='flex flex-col justify-center items-center p-5'>
      <h1 className='text-4xl font-extrabold mb-3'>{photo?.name_photo} details page</h1>
       <Image
        src={photo?.url || ""}
        alt={photo?.name_photo || "nature photos"}
        height={500}
        width={500}
       />
       <p className='mt-2'>Some description can go here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vitae necessitatibus quas alias ullam! Totam tempora quae, ullam cum nisi, in deleniti molestias distinctio, eaque quidem sunt ad ut eveniet!</p>
    </div>
  )
}

export default Page ;