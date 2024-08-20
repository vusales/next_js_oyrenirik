import React from 'react'; 

export const revalidate = 3600 ; 

interface PostItem {
  "userId": number 
  "id": number 
  "title": string
  "body": string
}

async function getPosts () {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts",
        {next: { tags: ["posts"] }}
    ); 

    if(!res.ok){
        throw new Error("Xəta baş verdi!"); 
    }
    let result =  res.json(); 
    return result ; 
}


const Page = async () => {
  let post =  await getPosts(); 
  
  return (
    <div>
      <h1 className='text-4xl font-extrabold mb-3'>Posts</h1>
      {
        post&&post.length>0&&post.map(( postItem : PostItem  , index:number)=>(
          <div className='mb-2 border-solid' key={postItem.id}>
            <p className='text-lg text-gray-500'>
              {index + ") "} 
              {postItem.title}
            </p>
            
          </div>
        ))
      }
    </div>
  )
}

export default Page; 
