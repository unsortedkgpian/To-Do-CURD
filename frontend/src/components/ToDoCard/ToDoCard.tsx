import { useState, useEffect } from 'react'
import './ToDoCard.css'
import axios from 'axios';

type ToDoCardProps = {
    id: string;
    category: string;
    title: string;
    content: string;
    deadline: string;
    priority: string;
    colour: string;
};

function formatDate(dateString: string): string {
    console.log(dateString);
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}


const ToDoCard = ({ id, category, title, content, deadline, priority, colour }: ToDoCardProps) => {

    const [col, setCol] = useState<string>('#D58D49');
    const [colbg, setColbg] = useState<string>('#DFA87433')
    const [currentPriority, setCurrentPriority] = useState<string>(priority);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentCategory, setCurrentCategory] = useState<string>(category);

    useEffect(() => {
        // Update col based on priority
        if (currentPriority === 'High') {
            setCol('#D8727D');
            setColbg('#D8727D1A')
        } else if (currentPriority === 'Low') {
            setCol('#D58D49');
            setColbg('#DFA87433');
        }
    }, [currentPriority]);


    useEffect(() => {
        // Update col based on priority
        if (priority === 'High') {
            setCol('#D8727D');
            setColbg('#D8727D1A')
        } else if (priority === 'Completed') {
            setCol('#68B266');
            setColbg('#83C29D33')
        }
    }, [priority]);


    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleCategoryChange = (newCategory: string) => {
        console.log(`Category changed to: ${newCategory}`);
        setCurrentCategory(newCategory);
        let pio: string;
        if (newCategory === 'Done') {
            pio = 'Completed'
        } else {
            pio = 'Low'
        }
        axios.put(`http://localhost:8000/tasks/${id}`, {
            Category: newCategory,
            Title: title,
            content,
            deadline,
            priority: pio,
        }).then(() => {
            console.log("put ");
        }).catch((err) => {
            console.log("error:", err);
        });

        window.location.reload();
    }

    return (
        <div className="info-card">

            <div className="info-card-overview">
                {
                    currentPriority == 'Completed' ?

                        <>
                            <div className="info-imp" style={{ color: col, background: colbg }}>{priority}</div>
                        </>
                        :
                        <select
                            value={currentPriority}
                            onChange={(e) => setCurrentPriority(e.target.value)}
                            className="priority-dropdown"
                            style={{
                                color: col,
                                backgroundColor: colbg,
                                border: 'none',


                            }}
                        >
                            <option value="High">High</option>
                            <option value="Low">Low</option>
                        </select>
                }
                <div className="info-imp-dots" onClick={toggleMenu}>
                    <div className='three-dots'></div>
                    <div className='three-dots'></div>
                    <div className='three-dots'></div>
                </div>
                {isMenuOpen && (
                    <div className="dropdown-menu visible">
                        <div
                            className="dropdown-menu-item"
                            onClick={() => handleCategoryChange('To do')}
                        >
                            To do
                        </div>
                        <div
                            className="dropdown-menu-item"
                            onClick={() => handleCategoryChange('Done')}
                        >
                            Done
                        </div>
                        <div
                            className="dropdown-menu-item"
                            onClick={() => handleCategoryChange('Expired')}
                        >
                            Expired
                        </div>
                        <div
                            className="dropdown-menu-item"
                            onClick={() => handleCategoryChange('On Progress')}
                        >
                            On Progress
                        </div>
                    </div>
                )}
            </div>

            <div className="info-card-title">{title}</div>
            <div className="info-card-content">{content}</div>
            <div className="info-card-deadline"><span className=' peak font-medium'>Deadline:</span> {formatDate(deadline)}</div>
        </div>
    )
}

export default ToDoCard
