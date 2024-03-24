'use client'
import { useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import listeningImage from '../../components/images/music.jpeg';
import BottomNavBar from "@/components/nav/BottomNavBar";
// Define ThemeState as a union type using |
type ThemeState = "light" | "dark";
type LikeState = 'liked' | "notLiked";


const Welcome: React.FC = () => {
    let themeChangeHandler: (themeMode: ThemeState)=> void;
    let likedChangeHandler: (likeStatus: LikeState)=> void;

    themeChangeHandler = (themeMode)=> {
        setThemeIcon(themeMode)
    }

    likedChangeHandler = (likeStatus)=> {
        setLiked(likeStatus)
    }

    const [themeIcon, setThemeIcon] = useState<ThemeState>("light");
    const [liked, setLiked] = useState<LikeState>('notLiked');
    
    return (
        <main className="mx-5">
            <section className="mt-5 flex justify-between ">
                <div className="font-bold">
                    <h2 className="text-black text-[12px]  ">Welcome, Jane Doe</h2>
                    <p className="text-black text-[10px] text-opacity-40 ">Enjoy a relaxing moment</p>
                </div>
                <div className="">
                    {themeIcon === "light" && <MdOutlineLightMode className="text-black text-xl" onClick={()=>themeChangeHandler('dark')}/>}
                    {themeIcon === "dark" && <MdDarkMode className="text-black text-xl" onClick={()=>themeChangeHandler('light')}/>}
                </div>
            </section>
            <section className="flex flex-col mt-5">
                <div className="font-bold text-black text-[12px]">
                    <h2>Choose a category</h2>
                </div>
                <div className="flex flex-row gap-4 mt-3">
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-black bg-opacity-50  absolute rounded-lg h-12 w-28 mt-28 font-bold p-3 border ">
                        <div className="flex flex-row justify-between items-center">
                            <span>
                                    <p className="text-[12px]">Hope</p>
                            </span>
                            <span>
                                <FaLongArrowAltRight className="text-[10px] text-orange-400"/>
                            </span>
                        </div>
                        <span>
                            <p className="text-[8px] opacity-55">Hope, future, life</p>
                        </span>
                    </div>
                    
                    <div className="h-44 w-32 shadow-xl">
                    <img src={listeningImage.src} alt="image" className="h-full w-full object-cover rounded-xl"/>
                    </div>
                
                    
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <div className="bg-black bg-opacity-50  absolute rounded-lg h-12 w-28 mt-28 font-bold p-3 border-white border-opacity-50">
                        <div className="flex flex-row justify-between items-center">
                            <span>
                                    <p className="text-[12px]">Hope</p>
                            </span>
                            <span>
                                <FaLongArrowAltRight className="text-[10px] text-orange-400"/>
                            </span>
                        </div>
                        <span>
                            <p className="text-[8px] opacity-55">Hope, future, life</p>
                        </span>
                    </div>
                    
                    <div className="h-44 w-32 shadow-xl">
                    <img src={listeningImage.src} alt="image" className="h-full w-full object-cover rounded-xl"/>
                    </div>
                
                    
                </div>
              </div>  

            </section>
            <section className="flex flex-col mt-5">
                <div className="font-bold text-black text-[12px]">
                    <h2>Recommended for you</h2>
                </div>
                <div className="flex flex-col gap-2 mt-3">
                <div className="flex flex-row justify-center items-center">
                    <div className="h-16 w-72 shadow-xl border-2 border-black border-opacity-20 rounded-xl grid grid-cols-6 justify-between items-center">
                        <div className="h-12 w-12 col-span-2">
                        <img src={listeningImage.src} alt="image" className="h-full w-full object-cover rounded-lg ml-2"/>
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
                <div className="flex flex-row justify-center items-center">
                    <div className="h-16 w-72 shadow-xl border-2 border-black border-opacity-20 rounded-xl grid grid-cols-6 justify-between items-center">
                        <div className="h-12 w-12 col-span-2">
                        <img src={listeningImage.src} alt="image" className="h-full w-full object-cover rounded-lg ml-2"/>
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
                <div className="flex flex-row justify-center items-center">
                    <div className="h-16 w-72 shadow-xl border-2 border-black border-opacity-20 rounded-xl grid grid-cols-6 justify-between items-center">
                        <div className="h-12 w-12 col-span-2">
                        <img src={listeningImage.src} alt="image" className="h-full w-full object-cover rounded-lg ml-2"/>
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
                
              </div>  

            </section>
            <BottomNavBar/>
        </main>
    );
}
export default Welcome;
