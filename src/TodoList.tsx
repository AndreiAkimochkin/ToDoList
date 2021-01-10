import React from "react";
import {filterValuesType} from "./App";


type taskType = {
    id: number
    title: string
    isDone: boolean

}
type propsType = {
    title: string
    tasks: taskType[]
    removeTask: ( taskID: number)=> void
    changeFilter: (value: filterValuesType)=> void
}

export function TodoList(props: propsType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={()=>{props.removeTask(t.id)}}>X</button>
                </li>
            )}
        </ul>
        <div>
            <button onClick={()=>{props.changeFilter('all')}}>All</button>
            <button onClick={()=>{props.changeFilter('active')}}>Active </button>
            <button onClick={()=>{props.changeFilter('completed')}}>Completed</button>
        </div>
    </div>
}