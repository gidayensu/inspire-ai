'use client'

import { RiUser6Fill, RiUser6Line } from "react-icons/ri";
import { AiOutlinePlayCircle, AiFillPlayCircle } from "react-icons/ai";
import { GoHome, GoHomeFill,  } from "react-icons/go";
import { BiCategory, BiHeart, BiSolidHeart, BiSolidCategory } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

type BottomNavUrl = '/' | '/profile' | '/favorites' | '/categories' | '/player';


const BottomNavBar:React.FC = ()=> {
    const path = usePathname();

    
    const router = useRouter();
    let navStateHandler : (navUrl: BottomNavUrl) =>void;
    
    navStateHandler = (navUrl) => {
        
        router.push(navUrl)
    }

    
    return(
        <div className = "fixed bottom-0 left-0 right-0 top-auto z-50" >
        <div className="bottom-0 h-16 bg-white text-black text-2xl w-full grid justify-center sticky items-center">
          <div className="w-full grid grid-cols-5 gap-6 opacity-80 items-center justify-center">
            <div className="home">
              {path !== '/' ? <GoHome onClick={() => navStateHandler('/')}/> : <GoHomeFill/>}
            </div>
  
            <div className="categories">
              {!path.startsWith('/categories') ? <BiCategory onClick={() => navStateHandler('/categories')}/> : <BiSolidCategory />}
            </div>
  
            <div className="player text-[40px]">
              {!path.startsWith('/player') ? <AiOutlinePlayCircle onClick={() => navStateHandler('/player')}/> : <AiFillPlayCircle />}
            </div>
  
            <div>
              {!path.startsWith('/favorites') ? <BiHeart onClick={() => navStateHandler('/favorites')}/> : <BiSolidHeart />}
            </div>
  
            <div className="profile">
              {!path.startsWith('/profile') ? <RiUser6Line onClick={() => navStateHandler('/profile')}/> : <RiUser6Fill />}
            </div>
          </div>
        </div>
      </div>
    );
}

export default BottomNavBar;