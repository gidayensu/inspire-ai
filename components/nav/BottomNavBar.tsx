import { RiHomeSmile2Fill, RiHomeSmile2Line, RiUserSmileFill, RiUserSmileLine, RiHeart2Line, RiHeart2Fill, RiBox1Line, RiBox1Fill } from "react-icons/ri";

const BottomNavBar:React.FC = ()=> {
    return(
        <main className="bottom-0 h-12 bg-white text-black text-2xl sticky grid justify-center items-center">
            <div className=" w-full grid grid-cols-4 gap-10 opacity-80 mt-4">
                    <div className="home">
                        <RiHomeSmile2Fill/>
                    </div>

                    <div className="categories">
                            <RiBox1Line/>
                    </div>
                    <div className="liked">
                            <RiHeart2Line/>
                    </div>
                            <RiUserSmileLine/>
                    <div className="profile">

                    </div>
            </div>
        </main>
    );
}

export default BottomNavBar;