import React from 'react'
import './TaskSuccess.css';
import Tick from './Tick-Square.svg';

const TaskSuccess = ({ isSuccess, setIsSuccess, show, setShow }: any) => {
    return (
        <div className='task-success-body'>
            <div className="icon">
                <img src={Tick} />
            </div>
            <div className="task-text" >new task has been created
                successfully</div>
            <button onClick={() => (
                setIsSuccess(false),
                setShow(false),
                window.location.reload()
            )} className="task-back">Back</button>
        </div>
    )
}

export default TaskSuccess
