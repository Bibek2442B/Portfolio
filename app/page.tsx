import Image from "next/image";
import {getAge} from '@/lib/utils';
export default function Home() {
  const age:number = getAge("2002-10-27")
  const reside:number = getAge("2019-10-22")
  return (
    <div className="flex flex-col flex-1 items-center justify-between bg-zinc-50 font-sans dark:bg-black">
      <header className="flex justify-between w-full p-4 bg-cyan-500 dark:bg-black">
        <a href="#" rel="noopener noreferrer">
          <h1 className="text-4xl font-bold mx-4">Bibek Gnawali</h1>
        </a>
        <div className="mx-4 flex">
          <a href="#" rel="noopener noreferrer">
            <p className="mx-4 text-2xl">About Me</p>
          </a>
          <a href="#" rel="noopener noreferrer">
            <p className="mx-4 text-2xl">Skills</p>
          </a>
          <a href="#" rel="noopener noreferrer">
            <p className="mx-4 text-2xl">Education</p>
          </a>
          <a href="#" rel="noopener noreferrer">
            <p className="mx-4 text-2xl">Projects</p>
          </a>
          <a href="#" rel="noopener noreferrer">
            <p className="mx-4 text-2xl">Experience</p>
          </a>
        </div>
      </header>
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
