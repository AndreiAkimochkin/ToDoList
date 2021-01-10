import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";


export type filterValuesType = 'all' | 'active' | 'completed'

function App() {
    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "GraphQL", isDone: true},
        {id: 5, title: "SAGA", isDone: false}
    ]);

let [filter, setFilter] = useState<filterValuesType>('all')
let tasksForTodoList =tasks;
if (filter === "active") {
    tasksForTodoList=tasks.filter(t=> t.isDone === false)
}
if (filter === "completed") {
        tasksForTodoList=tasks.filter(t=> t.isDone === true)
    }

function removeTask(id:number) {
let filteredTasks=tasks.filter(t=> t.id !== id)
    setTasks(filteredTasks)
}

function changeFilter(value: filterValuesType) {
    setFilter(value)
}




    return (
        <div className="App">
            <TodoList title='What to learn'
                      tasks={tasksForTodoList}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
                </div>
    );
}

export default App;
