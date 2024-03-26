'use client'
import { useState } from "react";


import CategoryCard from "@/components/UIs/CategoryCard";
import AudioItem from "@/components/UIs/AudioItem";

type ThemeState = "light" | "dark";
type LikeState = 'liked' | "notLiked";




const Home: React.FC = () => {
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
            
            <section className="flex flex-col mt-5">
                <div className="font-bold text-black text-[12px]">
                    <h2>Choose a category</h2>
                </div>
                <div className="flex flex-row gap-4 mt-3">
                <CategoryCard name="hope" briefDescription="hope" image="hope"/>
                <CategoryCard name="hope" briefDescription="hope" image="hope"/>

              </div>  

            </section>
            <section className="flex flex-col mt-5">
                <div className="font-bold text-black text-[12px]">
                    <h2>Recommended for you</h2>
                </div>
                <div className="flex flex-col gap-2 mt-3">
                <AudioItem title="hope" desc="hope" image="hope"/>
                <AudioItem title="hope" desc="hope" image="hope"/>
                <AudioItem title="hope" desc="hope" image="hope"/>
                
              </div>  

            </section>
             
        </main>
        
        </>
    );
}
export default Home;
