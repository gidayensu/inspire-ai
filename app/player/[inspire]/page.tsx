'use client'

import PlayerUi from "@/components/UIs/PlayerUi";

function InspirePage({ params }: { params: { inspire: string } }) {


  return (
<PlayerUi params={{inspire:'test'}}/>
    )
}

export default InspirePage;