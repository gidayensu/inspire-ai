'use client'
import { useState } from "react";
import { RiUser6Fill, RiUser6Line } from "react-icons/ri";
import { GoHome, GoHomeFill,  } from "react-icons/go";
import { BiCategory, BiHeart, BiSolidHeart, BiSolidCategory } from "react-icons/bi";
import { useRouter } from "next/navigation";

type BottomNavState = "home selected" | "pro selected" | "fav selected" | "cat selected";


const BottomNavBar:React.FC = ()=> {
    const [navState, setNavState] = useState<BottomNavState>('home selected');
    const router = useRouter();
    let navStateHandler : (navItemState: BottomNavState) =>void;
    
    navStateHandler = (navItemState) => {
        setNavState(navItemState);
        if(navItemState==='home selected') {
            router.push('/')
        }

        if(navItemState==='cat selected') {
            router.push('/categories')
        }
    }

    
    return(
        <main className="bottom-0 h-12 bg-white text-black text-2xl w-full  grid justify-center fixed items-center shadow-xl">
            <div className=" w-full grid grid-cols-4 gap-10 opacity-80 mt-4">
                    <div className="home">
                    {navState !== 'home selected' ? <GoHome onClick={()=>navStateHandler('home selected')}/> 
                    : <GoHomeFill/>}
                        
                    </div>

                    <div className="categories">
                    {navState !== 'cat selected' ? <BiCategory onClick={()=>navStateHandler('cat selected')}/> 
                      : <BiSolidCategory />}
                    
                            
                    </div>
                    <div >
                            {navState !== 'fav selected' ? <BiHeart onClick={()=>navStateHandler('fav selected')}/> : <BiSolidHeart />}
                             
                    </div>
                    {navState !== 'pro selected' ? <RiUser6Line onClick={()=>navStateHandler('pro selected')}/> 
                        : <RiUser6Fill />}
                            
                    <div className="profile">

                    </div>
            </div>
        </main>
    );
}

export default BottomNavBar;