import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import { v1 } from 'uuid';


export type filterValuesType = 'all' | 'active' | 'completed'

function App() {
    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "GraphQL", isDone: true},
        {id: v1(), title: "SAGA", isDone: false}
    ]);

let [filter, setFilter] = useState<filterValuesType>('all')
let tasksForTodoList =tasks;
if (filter === "active") {
    tasksForTodoList=tasks.filter(t=> t.isDone === false)
}
if (filter === "completed") {
        tasksForTodoList=tasks.filter(t=> t.isDone === true)
    }

function removeTask(id:string) {
let filteredTasks=tasks.filter(t=> t.id !== id)
    setTasks(filteredTasks)
}

function addTask (title:string) {
    let task = {id: v1(), title, isDone: false};
    let newTask = [task, ...tasks]
    setTasks(newTask)
}

function changeFilter(value: filterValuesType) {
    setFilter(value)
}

function changeTaskStatus(id: string, isDone: boolean){
    let task = tasks.find(t=>t.id === id)
    if(task) {
        task.isDone = isDone;
        setTasks([...tasks])
    }
}


    return (
        <div className="App">
            <TodoList title='What to learn'
                      tasks={tasksForTodoList}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeTaskStatus={changeTaskStatus}
                      filter={filter}
            />
                </div>
    );
}

export default App;
