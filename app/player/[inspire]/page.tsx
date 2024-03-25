'use client'
import AudioItem from "@/components/UIs/AudioItem";
import TopNav from "@/components/nav/TopNav";
import BottomNavBar from "@/components/nav/BottomNavBar";
import listeningImage from '../../../components/images/music.jpeg';
import Image from "next/image";
import { useState } from "react";

type ReadRec = "recommended" | "read";
export default function Page({ params }: { params: { inspire: string } }) {

  const [readRec, setReadRec] = useState<ReadRec>("recommended");
    let readRecHandler: (readRecValue: ReadRec)=> void;

    readRecHandler = (readRecValue)=> {
      setReadRec(readRecValue);
    }


  return (
    <main className="mb-3 mx-5">
    <div className="">
     <TopNav />
     </div>
     <div className="">
     <div className="flex flex-col justify-center items-center">
     <div className="h-96 w-80 mt-4">
        <Image src={listeningImage} alt="main image" className="w-full h-full object-cover rounded-3xl"/>
      </div>
        <div className="w-64 h-1 bg-red-500 mt-4 rounded-full">
        </div>
        
      </div>
      <div className="flex flex-col gap-2  mt-5 justify-center items-center ">
        <div className="grid grid-cols-2 justify-center items-center rounded h-12 w-64 -ml-12">
        <h2 className={`${readRec==='recommended' ? 'bg-red-500 h-10 rounded  text-white': ''}  w-32 flex justify-center items-center ml-8 font-bold text-black text-left text-[12px]`} onClick={()=>readRecHandler('recommended')}>RECOMMENDED</h2>
        
        <h2 className={`${readRec==='read' ? 'bg-red-500 h-10 rounded  text-white': ''}  w-32 flex justify-center items-center ml-8 font-bold text-black text-left text-[12px]`} onClick={()=>readRecHandler('read')}>READ</h2>
        
        </div>
          {readRec === 'recommended' && <div className="flex flex-col gap-2 w-80">
          <AudioItem title="hope" desc="hope" image="hope"/>
          <AudioItem title="hope" desc="hope" image="hope"/>
          </div>}
          {readRec === 'read' && <div className="border h-52 w-80 border-black border-opacity-50 rounded-2xl ">
            <p className="text-black p-4">
                There are many things that happen in the world. You shold never give up because things do not  go as you desire. Eventually. Things will work it. It is hard
                yes, but it will get better with time. Keep moving. 
            </p>
          </div>}
        </div>
        </div>
    <div>
      <BottomNavBar/>
    </div>
    </main>
    )
}