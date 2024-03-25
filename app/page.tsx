"use client"
import listeningImage from '../components/images/music.jpeg';
import { IoIosArrowDropright } from "react-icons/io";
import { useRouter } from 'next/navigation';
import Image from 'next/image';


const Home: React.FC = () => {
  const router = useRouter();
  const welcomePageHandler = ()=> {
    router.push('/welcome')
  }

  return (
    <div className="h-[100vh] bg-white w-auto flex flex-col  items-start">
      <div className='h-80 flex flex-col'>
      <h1 className='absolute text-white font-bold mt-80 ml-8 text-3xl'>
          Relax Here
      </h1>
        <Image src={listeningImage.src} width={500} height={500} alt="calm guy image" className='rounded-b-3xl' />
      </div>
      
      <div >
      <h1 className=' text-black font-bold text-3xl p-4 ml-5'>
          Listen to Inspirational Audios To Relax 
      </h1>
      </div>
      <div>
        
        <button onClick={welcomePageHandler} className='ml-8 flex justify-between items-center bg-black w-60 rounded-2xl h-12 text-sm p-4'>
          <p>Be inspired</p>
          <IoIosArrowDropright className='text-lg'/>
        </button>
      </div>
    </div>
  );
}

export default Home;
