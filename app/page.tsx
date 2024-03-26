'use client'
import PlayerUi from "@/components/UIs/PlayerUi";


function Home({ params }: { params: { inspire: string } }) {

  return (

    <PlayerUi params={{inspire:'test'}}/>
    )
}

export default Home;