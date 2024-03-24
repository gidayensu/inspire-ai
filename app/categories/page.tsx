"use client"
import { useRouter } from 'next/navigation';
import CategoryCard from '@/components/UIs/CategoryCard';
import BottomNavBar from '@/components/nav/BottomNavBar';
import TopNav from '@/components/nav/TopNav';

const Categories: React.FC = () => {
  const router = useRouter();
  const welcomePageHandler = ()=> {
    router.push('/welcome')
  }

  return (
    <>
    <main className="mt-5 mx-5 flex flex-col gap-4">
      
      <TopNav/>
      <div className='flex flex-wrap gap-4'>
      <CategoryCard name="hope" briefDescription="hope" image="hope"/>
      <CategoryCard name="hope" briefDescription="hope" image="hope"/>
      <CategoryCard name="hope" briefDescription="hope" image="hope"/>
      <CategoryCard name="hope" briefDescription="hope" image="hope"/>
      <CategoryCard name="hope" briefDescription="hope" image="hope"/>
      <CategoryCard name="hope" briefDescription="hope" image="hope"/>
      </div>
    </main>
    <BottomNavBar/>
    </>
  );
}

export default Categories;