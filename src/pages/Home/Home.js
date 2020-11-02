import React from 'react'
import { InfoSection } from '../../components'
import { homeConfig } from './Home.config'

function Home() {
    return (
        <div>
            <InfoSection {...homeConfig} />
            {/* <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />  */}
        </div>
    )
}

export default Home
