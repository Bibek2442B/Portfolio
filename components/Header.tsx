import {Data} from '@/types';
import data from '@/public/data/data.json';

interface HeaderSectionProps{
  item: string;
}
function HeaderSection({item}: HeaderSectionProps){
  return(
    <a href="#" rel="noopener noreferrer">
      <p className="mx-4 text-2xl">{item}</p>
    </a>
  )
}
export default function Header(){
  const details:Data = data;
  return(
    <header className="flex justify-between w-full p-4 bg-cyan-500 dark:bg-black">
      <a href="#" rel="noopener noreferrer">
        <h1 className="text-4xl font-bold mx-4">{details.name}</h1>
      </a>
      <div className="mx-4 flex">
        {details.sections.map((section:string) =>
          <HeaderSection key={section} item={section}/>
        )}
      </div>
    </header>
  );
}