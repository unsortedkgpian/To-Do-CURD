import './App.css'
import TopBar from './components/TopBar/TopBar.tsx';
import Expired from './components/Expired/Expired.tsx';
import AllTask from './components/All/AllTask.tsx';
import Completed from './components/Completed/Completed.tsx';
import addtasklogo from './assets/add.svg';
import View from './components/View/View.tsx';
import TodoVarient from './components/TodoVariant/TodoVarient.tsx';
import { useState } from 'react';



function App() {

    const [show, setShow] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    return (
        <>
            <div className="body">

                <TopBar />
                <div className="main-body" >
                    <div className="main-body-left">
                        <Expired />
                        <AllTask />
                        <Completed />
                        {show &&
                            <div className="formbox absolute border   z-40 top-[20vh] left-[50vw] translate-x-[-50%] translate-y-[-50%]">
                                <TodoVarient show={show}
                                    setShow={setShow}
                                    isSuccess={isSuccess}
                                    setIsSuccess={setIsSuccess} />
                            </div>
                        }
                        <button className="add-task" onClick={() => setShow(!show)}>
                            <img src={addtasklogo} />
                            <div className="add-task-text">Add Task</div>
                        </button>
                    </div>
                    <div className="main-body-right">
                        <View title="To do" colour="#5030E5" />
                        <View title="On Progress" colour="#FFA500" />
                        <View title="Done" colour="#76A5EA" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App


// useEffect()=> getData()
// async getData() -> fetch('/getall') divide into categories
// mongo.getMany()
// add task
// post -> /add
// req.body ->   Category, Title,content, deadline , pirotry
// mongo.insertOne(data)
