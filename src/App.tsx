import React, {useState} from 'react';
import './App.css';
import {taskType, TodoList} from "./TodoList";
import { v1 } from 'uuid';


export type filterValuesType = 'all' | 'active' | 'completed'

type todoListType = {
    id: string
    title: string
    filter: filterValuesType
}
type taskStateType = {
    [key: string]: taskType[]
}

function App() {

    const todolistsID1 = v1();
    const todolistsID2 = v1();

    let [tasks, setTasks] = useState<taskStateType>({
            [todolistsID1]: [
                {id: v1(), title: "HTML", isDone: true},
                {id: v1(), title: "JS", isDone: true},
                {id: v1(), title: "React", isDone: false}
            ],
            [todolistsID2]: [
                {id: v1(), title: "SAGA", isDone: true},
                {id: v1(), title: "GraphQL", isDone: true},
                {id: v1(), title: "VUE", isDone: false}
            ]
        }
    )


    let [todolists, setTodolists] = useState<todoListType[]>([
        {id: todolistsID1, title: "What to learn", filter: 'all'},
        {id: todolistsID2, title: "What to buy", filter: 'all'},
    ]);


    function removeTask(id: string, todolistID: string) {
        let todolistTasks = tasks[todolistID]
        tasks[todolistID] = todolistTasks.filter(t => t.id !== id)
        setTasks({...tasks})
    }

    function addTask(title: string, todolistID: string) {
        let task = {id: v1(), title, isDone: false};
        let todolistTasks = tasks[todolistID]
        tasks[todolistID] = [task, ...todolistTasks]
        setTasks({...tasks})
    }

    function changeFilter(value: filterValuesType, todolistID: string) {
        let todolist = todolists.find(tl => tl.id === todolistID);
        if (todolist) {
            todolist.filter === value
            setTodolists([...todolists])
        }

        function changeTaskStatus(id: string, isDone: boolean, todolistID: string) {
            let todolistTasks = tasks[todolistID]
            let task = todolistTasks.find(t => t.id === id)
            if (task) {
                task.isDone = isDone;
                setTasks({...tasks})
            }
        }


        return (
            <div className="App">
                {
                    todolists.map(tl => {
                        let allTodolistTask = tasks[tl.id]
                        let tasksForTodoList = allTodolistTask;
                        if (tl.filter === "active") {
                            tasksForTodoList = allTodolistTask.filter(t => t.isDone === false)
                        }
                        if (tl.filter === "completed") {
                            tasksForTodoList = allTodolistTask.filter(t => t.isDone === true)
                        }

                        <TodoList key={tl.id}
                                  id={tl.id}
                                  title={tl.title}
                                  tasks={tasksForTodoList}
                                  removeTask={removeTask}
                                  changeFilter={changeFilter}
                                  addTask={addTask}
                                  changeTaskStatus={changeTaskStatus}
                                  filter={tl.filter}
                        />
                    })
                }
            </div>
        )
    }
}

export default App;
