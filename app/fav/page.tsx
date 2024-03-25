import AudioItem from "@/components/UIs/AudioItem";
import TopNav from "@/components/nav/TopNav";
import BottomNavBar from "@/components/nav/BottomNavBar";

function Fav({ params }: { params: { category: string } }) {    
  return (
    <>
    <div className="mb-3 mx-5">
     <TopNav />
     </div>
  <main className="mx-5 flex flex-col gap-2">
     
     <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-black text-4xl">
          YOUR FAVOURITES
        </h2>
        <p className="opacity-50 text-black  text-[12px] text-center">
          <span className="font-bold ">Did you know?</span> listening to words of encouragement can help improve your mood!
        </p>
     </div>
    <AudioItem title="hope" desc="hope" image="hope"/>
    <AudioItem title="hope" desc="hope" image="hope"/>
    <AudioItem title="hope" desc="hope" image="hope"/>
    <AudioItem title="hope" desc="hope" image="hope"/>
    
    </main>
    <div>
      <BottomNavBar/>
    </div>
    </>
    )
}
export default Fav;