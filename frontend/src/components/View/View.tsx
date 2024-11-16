import React, { useEffect, useState } from 'react'
import './View.css'
import ToDoCard from '../ToDoCard/ToDoCard'
import axios from 'axios'

type InfoCardProps = {
    title: string;
    colour: string;
};

const View = ({ title, colour }: InfoCardProps) => {

    const [data, setData] = useState<any>([]);
    const [filteredData, setFilteredData] = useState<any>([])

    const filterByCategory = (category: string) => {
        console.log("inside filter category")
        if (category) {
            // console.log(Category)
            console.log(category)
            const filteredData = data.filter((d: any) => d.Category == category);
            setFilteredData(filteredData);
            console.log(filteredData);
        } else {
            setFilteredData(data); // Show all if no category is selected
        }

        console.log({ filteredData });
    }

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

    useEffect(() => {
        console.log("beofre filter data")
        filterByCategory(title);
    }, [data, title]);

    return (
        <div className="item-view">
            <div className="title-box" >
                <div className="title-box-circle " style={{ backgroundColor: colour }}></div>
                <div className="title-box-circle-title">{title}</div>
                <div className="title-box-circle-title-number">{filteredData.length}</div>
            </div>
            <div className="divider" style={{ backgroundColor: colour }}></div>

            <div className="cards-container">
                {
                    filteredData.map((d: any) => < ToDoCard key={d._id} id={d._id} category={d.Category} title={d.Title} content={d.content} deadline={d.deadline} priority={d.priority} colour={colour} />)

                }
            </div>
        </div>
    )
}

export default View
