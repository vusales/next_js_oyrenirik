import { NextResponse , NextRequest } from "next/server";


export async function GET(req: Request ){
    let response =  await fetch("https://jsonplaceholder.typicode.com/posts"); 
    let data =  await response.json(); 
    return NextResponse.json({data}); 
}