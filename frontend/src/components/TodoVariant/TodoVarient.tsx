import React, { useState } from 'react'
import './TodoVarient.css'
import icons from './icons.svg';
import Calendar from 'react-calendar'
import axios from 'axios'
import TaskSuccess from '../TaskSuccess/TaskSuccess'

const TodoVarient = ({ isSuccess, setIsSuccess, show, setShow }: any) => {

    const [cal, setCal] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [deadtext, setDeadtext] = useState('Deadline');

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [priority, setPriority] = useState('Low');



    const handleDateChange = (date: Date) => {
        console.log('Selected date:', date);

        setDeadtext(formatDate(date));
        setSelectedDate(date);
        setCal(false);
    };
    const formatDate = (date: Date) => {
        const day = String(date.getDate()).padStart(2, '0');  // Add leading zero if single digit
        const month = String(date.getMonth() + 1).padStart(2, '0');  // Month is zero-indexed, so add 1
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(title, content, priority, selectedDate);
        axios.post('https://to-do-curd.onrender.com/tasks', {
            Title: title,
            content,
            priority,
            deadline: selectedDate,
            Category: "To do"
        })
            .then((response) => {
                console.log(response);
                setTitle('');
                setContent('');
                setPriority('Low');
            })
            .catch((error) => {
                console.log(error);
            })
        console.log('Form submitted:', selectedDate);

    };


    return (
        <>
            <div className="todo-variant">
                <form onSubmit={handleSubmit}>
                    <div className="Todo-top-bar p-2 m-2 flex items-center w-[90%]">
                        <div className='display-flex  w-[90%] flex items-center  '>
                            <div className='todo-top-bar-circle flex items-center p-1 m-1'></div>
                            <div className="todo-add- font-bold">ADD TASK</div>
                        </div>
                        <img src={icons} />
                    </div>
                    <div className="todo-title-bar ">
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="h-32" placeholder='Title' />

                    </div>
                    <div className="todo-discription-bar">
                        <textarea value={content} onChange={(e) => setContent(e.target.value)}
                            className="h-32" placeholder='Description'></textarea>
                    </div>
                    <div className="todo-footer-bar">
                        <button className="deadline" onClick={() => setCal(!cal)} >{deadtext}</button>
                        <button type="submit" onClick={() => setIsSuccess(true)} className="todo-submit-btn">Assigned To</button>
                    </div>

                </form>
            </div>

            {cal && (
                <div className="calendar-overlay">
                    <div className="calendar-container">
                        <Calendar onClickDay={handleDateChange} />
                    </div>
                </div>
            )}
            {isSuccess && (
                <div className="task-suc">
                    <div className="task-suc-container">
                        <TaskSuccess show={show}
                            setShow={setShow}
                            isSuccess={isSuccess}
                            setIsSuccess={setIsSuccess} />
                    </div>
                </div>
            )}

        </>

    )
}

export default TodoVarient
