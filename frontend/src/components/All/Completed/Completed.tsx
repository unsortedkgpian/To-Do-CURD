import React from 'react'
import InfoCard from '../InfoCard/InfoCard'
import CompletedIcon from './comp.svg';
import axios from 'axios'

const Completed = () => {



    return (
        <div className="expired">
            <InfoCard title="Completed Tasks" content="2/7" backgroundColor="#70A1E5" icon={CompletedIcon} />
        </div>
    )
}

export default Completed
