'use client'

import { RiUser6Fill, RiUser6Line } from "react-icons/ri";
import { GoHome, GoHomeFill,  } from "react-icons/go";
import { BiCategory, BiHeart, BiSolidHeart, BiSolidCategory } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

type BottomNavUrl = '/' | '/profile' | '/favorites' | '/categories';


const BottomNavBar:React.FC = ()=> {
    const path = usePathname();

    
    const router = useRouter();
    let navStateHandler : (navUrl: BottomNavUrl) =>void;
    
    navStateHandler = (navUrl) => {
        
        router.push(navUrl)
    }

    
    return(
        <div className="bottom-0 h-12 bg-white text-black text-2xl w-full  grid justify-center fixed items-center shadow-xl ">
            <div className=" w-full grid grid-cols-4 gap-10 opacity-80 mt-4">
                    <div className="home">
                    {path !== '/' ? <GoHome onClick={()=>navStateHandler('/')}/> 
                    : <GoHomeFill/>}
                        
                    </div>

                    <div className="categories">
                    {!path.startsWith('/categories') ? <BiCategory onClick={()=>navStateHandler('/categories')}/> 
                      : <BiSolidCategory />}
                    
                            
                    </div>
                    <div >
                            {!path.startsWith('/favorites')  ? <BiHeart onClick={()=>navStateHandler('/favorites')}/> : <BiSolidHeart />}
                             
                    </div>
                   
                            
                    <div className="profile">
                    {!path.startsWith('/profile')  ? <RiUser6Line onClick={()=>navStateHandler('/profile')}/> 
                        : <RiUser6Fill />}
                    </div>
            </div>
        </div>
    );
}

export default BottomNavBar;