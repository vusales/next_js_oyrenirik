import { NextResponse , NextRequest } from "next/server";

export async function GET(
    req: NextRequest , 
    {params} : {params: {id:string}}
){
    return NextResponse.json({id: params.id}); 
}