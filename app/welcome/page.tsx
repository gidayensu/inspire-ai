'use client'
import { useState } from "react";

import BottomNavBar from "@/components/nav/BottomNavBar";
import CategoryCard from "@/components/UIs/CategoryCard";
import AudioItem from "@/components/UIs/AudioItem";
import TopNav from "@/components/nav/TopNav";
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
        <>
        <main className="mx-5">
            <TopNav/>
            <section className="flex flex-col mt-5">
                <div className="font-bold text-black text-[12px]">
                    <h2>Choose a category</h2>
                </div>
                <div className="flex flex-row gap-4 mt-3">
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
              </div>  

            </section>
            <section className="flex flex-col mt-5">
                <div className="font-bold text-black text-[12px]">
                    <h2>Recommended for you</h2>
                </div>
                <div className="flex flex-col gap-2 mt-3">
                <AudioItem/>
                <AudioItem/>
                <AudioItem/>
                
              </div>  

            </section>
           
        </main>
        <BottomNavBar/>
        </>
    );
}
export default Welcome;
