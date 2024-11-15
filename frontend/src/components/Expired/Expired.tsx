import React, { useEffect, useState } from 'react'
import axios from 'axios'
import InfoCard from '../InfoCard/InfoCard'
import ExpiredIcon from './Expired.svg';

const Expired = () => {
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        console.log("here atleast");
        axios.get('http://localhost:8000/tasks')
            .then((response) => {
                console.log(response.data.data);
                setData(response.data.data);

            })

            .catch((error) => {
                console.log(error);
            })
    }, []);

    const count = data.filter(d => d.Category == 'Expired').length;

    return (
        <div className="expired">
            <InfoCard title="Expired Tasks" content={count} backgroundColor="#F42D20" icon={ExpiredIcon} />
        </div>
    )
}

export default Expired
