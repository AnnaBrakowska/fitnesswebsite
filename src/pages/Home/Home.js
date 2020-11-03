import React from 'react'
import { InfoSection } from '../../components'
import { homeConfig } from './Home.config'

function Home() {
    return (
        <div>
            <InfoSection {...homeConfig} />
        </div>
    )
}

export default Home
