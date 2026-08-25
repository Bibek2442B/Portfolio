import Image from "next/image";
import {getAge} from '@/lib/utils';
import Header from '@/components/Header';
export default function Home() {
  const age:number = getAge("2002-10-27")
  const reside:number = getAge("2019-10-22")
  return (
    <div className="flex flex-col flex-1 items-center justify-between bg-zinc-50 font-sans">
      <Header/>
      <main className="flex flex-1 w-full p-10 flex-col items-start justify-start">
        <div className="flex">
          <Image
            src="/images/BibekPic.jpeg"
            alt="User Profile"
            width={120}
            height={120}
            className="rounded-full object-cover w-auto"
          />
          <p className="text-2xl mx-10 my-4">
            I am Bibek Gnawali. I am {age} years old. I am originally from Nepal and have been residing in Portugal for {reside} years.
          </p>
        </div>

      </main>
      <footer>

      </footer>
    </div>
  );
}
