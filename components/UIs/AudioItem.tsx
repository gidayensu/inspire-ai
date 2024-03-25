'use client'
import { useState } from "react";

import { FaHeart, FaRegHeart } from "react-icons/fa";

import listeningImage from '../../components/images/music.jpeg';

import Image from "next/image";



type LikeState = 'liked' | "notLiked";
type RecommendedProps = {
    title: string, 
    desc: string,
    image: string
}


const AudioItem = ({title, desc, image}: RecommendedProps) => {

    let likedChangeHandler: (likeStatus: LikeState)=> void;

    likedChangeHandler = (likeStatus)=> {
        setLiked(likeStatus)
    }


    const [liked, setLiked] = useState<LikeState>('notLiked');
    
    return (
            
            
                
                
                <div className="flex flex-row justify-center items-center ">
                    <div className="h-24 w-96 shadow-xl border-2 border-black gap-4 border-opacity-20 rounded-xl grid grid-cols-6 justify-between items-center">
                        <div className="h-20 w-20 col-span-2">
                        <Image src={listeningImage.src} width={500} height={500} alt="image" className="h-full w-full object-cover rounded-lg ml-2"/>
                        </div>
                        <span className="font-bold text-black col-span-3">
                            <p className="text-sm"> It is well</p>
                            <p className="text-[8px] opacity-45"> Things get better with time</p>
                        </span>
                        <div className="text-lg">
                            {liked === 'notLiked' && <FaRegHeart className="text-black opacity-80" onClick={()=>likedChangeHandler('liked')}/>}
                            {liked === 'liked' && <FaHeart className="text-red-500" onClick={()=>likedChangeHandler('notLiked')}/>}
                        </div>
                    </div>
                
                    
                </div>
                
            
           

    );
}
export default AudioItem;
