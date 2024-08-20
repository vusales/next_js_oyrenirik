import Link from "next/link";
import { TestError } from "./_lib/errors";


async function getData(){
  // await new Promise(resolve=>setTimeout(resolve, 6000));
}

export default async function Home() {
  const data = await getData(); 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Əsas səhifə </p>
      <Link href="/about">About</Link>
      <Link href="/photo_grid">Photos of nature</Link>
    </main>
  );
}
