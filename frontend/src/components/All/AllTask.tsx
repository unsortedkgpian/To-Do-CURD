import React, { useEffect, useState } from 'react'
import axios from 'axios'
import InfoCard from '../InfoCard/InfoCard'
import AllIcon from './all.svg';

const AllTask = () => {

    const [data, setData] = useState<any>([]);
    useEffect(() => {
        console.log("here atleast");
        axios.get('https://to-do-curd.onrender.com/tasks')
            .then((response) => {
                console.log(response.data.data);
                setData(response.data.data);

            })

            .catch((error) => {
                console.log(error);
            })
    }, []);
    const total = data.length;
    const count = data.filter(d => d.Category == 'Expired' || d.Category == 'Done').length;
    const con = total - count;
    return (
        <div className="expired">
            <InfoCard title="All Active Tasks" content={con} backgroundColor="#E89271" icon={AllIcon} />
        </div>
    )
}

export default AllTask
