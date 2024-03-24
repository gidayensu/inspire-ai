'use client'
import { useState } from "react";
import { RiUser6Fill, RiUser6Line } from "react-icons/ri";
import { GoHome, GoHomeFill,  } from "react-icons/go";
import { BiCategory, BiHeart, BiSolidHeart, BiSolidCategory } from "react-icons/bi";

type BottomNavState = {
    home : "home selected" | "home not selected",
    categories: "cat selected" | "cat not selected",
    fav: "fav selected" | "fav not selected",
    profile: "pro selected" | "pro not selected",
}

type allNavState = "home selected" | "home not selected" | "pro selected" | "pro not selected" | "fav selected" | "fav not selected" |"cat selected" | "cat not selected"
const BottomNavBar:React.FC = ()=> {
    const [navState, setNavState] = useState<BottomNavState>({
        home: "home selected",
        categories: "cat not selected",
        fav: "fav not selected",
        profile: "pro not selected",
    });

    let navStateHandler : (navItemState: allNavState) =>void;
    
    navStateHandler = (navItemState) => {
        navItemState === 'home selected' || navItemState === 'home not selected' ? setNavState((prevState)=> ({...prevState, home: navItemState, categories: 'cat not selected', fav: 'fav not selected', profile: 'pro not selected'}) ): navState;
        navItemState === 'cat selected' || navItemState === 'cat not selected' ? setNavState((prevState)=> ({...prevState, categories: navItemState, home: 'home not selected', fav: 'fav not selected', profile: 'pro not selected'}) ): navState;
        navItemState === 'fav selected' || navItemState === 'fav not selected' ? setNavState((prevState)=> ({...prevState, fav: navItemState, home: 'home not selected', categories: 'cat not selected', profile: 'pro not selected'}) ): navState;
        navItemState === 'pro selected' || navItemState === 'pro not selected' ? setNavState((prevState)=> ({...prevState, profile: navItemState, home: 'home not selected', categories: 'cat not selected', fav: 'fav not selected'}) ): navState;
        
    }

    console.log(navState.categories)
    return(
        <main className="bottom-0 h-12 bg-white text-black text-2xl w-full  grid justify-center fixed items-center shadow-xl">
            <div className=" w-full grid grid-cols-4 gap-10 opacity-80 mt-4">
                    <div className="home">
                    {navState.home === 'home not selected' ? <GoHome onClick={()=>navStateHandler('home selected')}/> 
                    : <GoHomeFill onClick={()=>navStateHandler('home not selected')}/>}
                        
                    </div>

                    <div className="categories">
                    {navState.categories === 'cat not selected' ? <BiCategory onClick={()=>navStateHandler('cat selected')}/> 
                      : <BiSolidCategory onClick={()=>navStateHandler('cat not selected')}/>}
                    
                            
                    </div>
                    <div >
                            {navState.fav === 'fav not selected' && <BiHeart onClick={()=>navStateHandler('fav selected')}/>}
                            {navState.fav === 'fav selected' && <BiSolidHeart onClick={()=>navStateHandler('fav not selected')}/>}
                    </div>
                    {navState.profile === 'pro not selected' ? <RiUser6Line onClick={()=>navStateHandler('pro selected')}/> 
                        : <RiUser6Fill onClick={()=>navStateHandler('pro not selected')}/>}
                            
                    <div className="profile">

                    </div>
            </div>
        </main>
    );
}

export default BottomNavBar;