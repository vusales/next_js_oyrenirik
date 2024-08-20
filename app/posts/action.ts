"use server" ; 

import { revalidatePath, revalidateTag } from "next/cache";

export async function addPost(){

    // diger butun emeliyyatler

    revalidateTag("posts");
    revalidatePath("/");  
}