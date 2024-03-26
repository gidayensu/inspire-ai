'use client'
import { useState, useEffect, useRef } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { PiDotsThreeVertical } from "react-icons/pi";
import { RiPlayListFill } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import listeningImage from '../../components/images/music.jpeg';
import Image from "next/image";
import { useRouter } from "next/navigation";

type LikeState = 'liked' | "notLiked";
type RecommendedProps = {
    title: string, 
    desc: string,
    image: string
}

type AudioLink = string;
type AudioMenu = boolean;


const AudioItem = ({title, desc, image}: RecommendedProps) => {
    const router = useRouter();
    const [liked, setLiked] = useState<LikeState>('notLiked');
    const [audioMenu, setAudioMenu] = useState<AudioMenu>(false);
    const audioMenuRef = useRef(null);

    useEffect(() => {
        let handleClickOutside: (event:any)=> void;
        let handleEscapePress: (event: any)=> void;
        handleClickOutside = (event) => {
            // if (audioMenuRef.current && !audioMenuRef.current.contains(event.target)) {
            if (audioMenuRef.current ) {
                setAudioMenu(false);
            }
        };

         handleEscapePress = (event) => {
            if (event.key === 'Escape') {
                setAudioMenu(false);
            }
        };

        const outside = document.addEventListener("mousedown", handleClickOutside);
        const escape = document.addEventListener("keydown", handleEscapePress);
        
        return ()=> {
            outside 
            escape
        }

    }, []);

    const likedChangeHandler = (likeStatus: LikeState) => {
        setLiked(likeStatus);
    }

    const audioLinkHandler = (audioLink: AudioLink) => {
        router.push(audioLink);
    }

    const audioMenuHandler = () => {
        setAudioMenu(prev => !prev);
    }

    return (        
        <div className="flex flex-row justify-center items-center " >
            <div className="h-24 max-w-96 shadow-xl border-2 border-black gap-4 border-opacity-20 rounded-xl grid grid-cols-7 justify-between items-center" >
                <div className="h-20 w-20 col-span-2" onClick={()=>audioLinkHandler('/player/1')}>
                    <Image src={listeningImage.src} width={500} height={500} alt="image" className="h-full w-full object-cover rounded-lg ml-2"/>
                </div>
                <span className="font-bold text-black col-span-3" onClick={()=>audioLinkHandler('/player/1')}>
                    <p className="text-sm"> It is well</p>
                    <p className="text-[8px] opacity-45"> Things get better with time</p>
                </span>
                <div className="text-lg flex flex-row">
                    {liked === 'notLiked' && <FaRegHeart className="text-black opacity-80" onClick={()=>likedChangeHandler('liked')}/>}
                    {liked === 'liked' && <FaHeart className="text-red-500" onClick={()=>likedChangeHandler('notLiked')}/>}
                </div>
                <div className="text-black relative flex justify-center items-center z-30 text-2xl">
                    <div onClick={audioMenuHandler}>
                        <PiDotsThreeVertical/>
                    </div>
                    {audioMenu && 
                        <div ref={audioMenuRef} className="audio-menu w-20 h-20 border border-black  bg-white border-opacity-30 absolute shadow-xl rounded-md flex flex-col justify-center items-start pl-2">
                            <p className="text-[10px] flex flex-row justify-center items-center gap-1 -mb-2 "> <MdOutlineWatchLater/> Listen later</p>
                            <p className="text-[10px] flex flex-row justify-center items-center gap-1 -mb-2"> <RiPlayListFill/> Listen next</p>
                            <p className="text-[10px] flex flex-row justify-center items-center gap-1 -mb-2"> <FaRegHeart/> Add to fav</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default AudioItem;
