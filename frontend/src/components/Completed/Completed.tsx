import React, { useEffect, useState } from 'react'
import InfoCard from '../InfoCard/InfoCard'
import CompletedIcon from './comp.svg';
import axios from 'axios'


const Completed = () => {
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
    const count = data.filter(d => d.Category == 'Done').length;
    const con = `${count}/${total}`;
    return (
        <div className="compe">
            <InfoCard title="Completed Tasks" content={con} backgroundColor="#E89271" icon={CompletedIcon} />
        </div>
    )
}

export default Completed
