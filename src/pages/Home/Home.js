import React from 'react'
import { InfoSection } from '../../components'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Home.config'

function Home() {
    return (
        <div>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
        </div>
    )
}

export default Home
