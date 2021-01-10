import React, {ChangeEvent, useState} from "react";
import {filterValuesType} from "./App";


type taskType = {
    id: string
    title: string
    isDone: boolean

}
type propsType = {
    title: string
    tasks: taskType[]
    removeTask: ( taskID: string )=> void
    changeFilter: (value: filterValuesType)=> void
    addTask: (title:string )=> void
}

export function TodoList(props: propsType) {

    let [title, setTitle] = useState('')

    const addTask = () => {
        props.addTask(title)
        setTitle('')
    };
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {setTitle(e.currentTarget.value)};
    const onKeyPressHandler = (e: any) => { if (e.key === 'Enter') addTask()};
    const onAllClickHandler = () => {  props.changeFilter('all')};
    const onActiveClickHandler = () => {  props.changeFilter('active')};
    const onCompletedClickHandler = () => {  props.changeFilter('completed')};

        return <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}/>

                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {props.tasks.map(t =>{
                     const onClickHandler = ()=>{ props.removeTask(t.id)}
                    return <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={onClickHandler}>X</button>
                        </li>
                    }
                )}
            </ul>
            <div>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    }
