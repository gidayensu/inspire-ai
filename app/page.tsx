import listeningImage from '../components/images/music.jpeg';
import { IoIosArrowDropright } from "react-icons/io";

const Home: React.FC = () => {
  return (
    <div className="h-[100vh] bg-white w-auto flex flex-col  items-start">
      <div className='h-80 w-80 flex flex-col '>
      <h1 className='absolute text-white font-bold mt-64 ml-8 text-3xl'>
          Relax Here
      </h1>
        <img src={listeningImage.src} alt="image" className='rounded-b-3xl' />
      </div>
      
      <div>
      <h1 className=' text-black font-bold text-3xl p-4 ml-5'>
          Listen to Inspirational Audios To Relax 
      </h1>
      </div>
      <div>
        <button className='ml-8 flex justify-between items-center bg-black w-60 rounded-2xl h-12 text-sm p-4'>
          <p>Be inspired</p>
          <IoIosArrowDropright className='text-lg'/>
        </button>
      </div>
    </div>
  );
}

export default Home;
