'use client'
import { FaLongArrowAltRight } from "react-icons/fa";
import listeningImage from '../../components/images/music.jpeg';
import Image from "next/image";

type CategoryProps = {
    name: string,
    briefDescription: string, 
    image: string,
}

const CategoryCard = ({name, briefDescription, image}: CategoryProps) => {
    return (
            <section className="flex flex-col">
                
                <div className="flex flex-row gap-4 ">
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-black absolute rounded-lg h-12 w-28 md:w-[500px] md:h-24 mt-28 font-bold p-3  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-100">
                        <div className="flex flex-row md:mx-32 justify-between items-center">
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
                    
                    <div className="h-48 w-40 md:w-[600px] shadow-xl">
                    <Image src={listeningImage.src} alt="image" width={500} height={500} className="h-full w-full object-cover rounded-xl"/>
                    </div>
                
                    
                </div>
                
              </div>  

            </section>
        
    );
}
export default CategoryCard;
