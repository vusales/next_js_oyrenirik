import React from 'react'; 
import Modal from '@/app/_component/Modal';
import photos from '@/data/photos';
import Image from 'next/image';

const Page = ({params}: {params:{id:string}}) => {

  const photo = photos.find((item)=>item.id == params.id); 

  return (
    <Modal
    >
      <Image 
          src={photo?.url || "/1.jpg"}
          width={500}
          height={900}
          alt={ photo?.name_photo|| "nature photo"}
      />
      <p className='mt-2'>{photo?.id + "" + photo?.name_photo}</p>
    </Modal>  
  )
}

export default Page; 