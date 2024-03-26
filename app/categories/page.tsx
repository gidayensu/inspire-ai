"use client"

import CategoryCard from '@/components/UIs/CategoryCard';

const Categories: React.FC = () => {
  

  return (
    
    <main className="mt-5 mx-5 flex flex-col gap-4 justify-center items-center">
      
      <div className='grid grid-cols-2 md:grid-cols-1 gap-4 justify-center items-center md:ml-10 '>
      <CategoryCard name="hope" briefDescription="hope" image="hope"/>
      <CategoryCard name="hope" briefDescription="hope" image="hope"/>
      <CategoryCard name="hope" briefDescription="hope" image="hope"/>
      <CategoryCard name="hope" briefDescription="hope" image="hope"/>
      <CategoryCard name="hope" briefDescription="hope" image="hope"/>
      <CategoryCard name="hope" briefDescription="hope" image="hope"/>
      </div>
    </main>
    
    
  );
}

export default Categories;