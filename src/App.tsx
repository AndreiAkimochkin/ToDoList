import React from 'react';
import './App.css';
import {TodoList} from "./TodoList";

function App() {

    const tasks1 = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false}
    ];

    const tasks2 = [
        {id: 1, title: "A", isDone: true},
        {id: 2, title: "B", isDone: true},
        {id: 3, title: "S", isDone: false}
    ];

    return (
        <div className="App">
            <TodoList title='What to learn' tasks={tasks1}/>
            <TodoList title='Song' tasks={tasks2}/>
        </div>
    );
}

export default App;
