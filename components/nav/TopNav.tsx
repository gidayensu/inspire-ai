'use client'
import { useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

type ThemeState = "light" | "dark";

const TopNav: React.FC = () => {
    let themeChangeHandler: (themeMode: ThemeState)=> void;

    themeChangeHandler = (themeMode)=> {
        setThemeIcon(themeMode)
    }

    const [themeIcon, setThemeIcon] = useState<ThemeState>("light");
  
    return (
        <section className="mt-5 flex justify-between top-0 absolute z-20 ">
                <div className="font-bold">
                    <h2 className="text-white text-[12px]  ">Welcome, Jane Doe</h2>
                    <p className="text-white text-[10px] text-opacity-40 ">Enjoy a relaxing moment</p>
                </div>
                <div className="">
                    {themeIcon === "light" && <MdOutlineLightMode className="text-white text-xl" onClick={()=>themeChangeHandler('dark')}/>}
                    {themeIcon === "dark" && <MdDarkMode className="text-white text-xl" onClick={()=>themeChangeHandler('light')}/>}
                </div>
            </section>

    )
    }
export default TopNav;