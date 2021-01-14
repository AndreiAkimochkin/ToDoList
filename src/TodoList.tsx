import React, {ChangeEvent, useState} from "react";
import {filterValuesType} from "./App";


export type taskType = {
    id: string
    title: string
    isDone: boolean

}
type propsType = {
    title: string
    tasks: taskType[]
    removeTask: ( taskID: string, todolistID: string )=> void
    changeFilter: (value: filterValuesType, todolistID: string)=> void
    addTask: (title:string, todolistID: string )=> void
    changeTaskStatus: (id: string, isDone: boolean, todolistID: string)=>void
    filter: filterValuesType
    id: string

}

export function TodoList(props: propsType) {

    let [title, setTitle] = useState('')
    let [error, setError] =useState<null | string>(null)

    const addTask = () => {
        if(title.trim() !== '') {
            props.addTask(title, todolistID)
            setTitle('')
        } else {
            setError('Title is required')
        }
    };
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {setTitle(e.currentTarget.value)};
    const onKeyPressHandler = (e: any) => {
        setError(null)
        if (e.key === 'Enter')
            addTask()};
    const onAllClickHandler = () => {  props.changeFilter('all', id)};
    const onActiveClickHandler = () => {  props.changeFilter('active', tl.id)};
    const onCompletedClickHandler = () => {  props.changeFilter('completed', tl.id)};

        return <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}/>

                <button onClick={addTask}>+</button>
                {error && <div className='error-message'>{error}</div>}
            </div>
            <ul>
                {props.tasks.map(t =>{
                     const onClickHandler = ()=>{ props.removeTask(t.id)}
                     const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=> {
                         props.changeTaskStatus(t.id, e.currentTarget.checked)}
                    return <li key={t.id} className={t.isDone ? 'is-done' : ''}>
                            <input type="checkbox" checked={t.isDone} onChange={onChangeHandler}/>
                            <span>{t.title}</span>
                            <button onClick={onClickHandler}>X</button>
                        </li>
                    }
                )}
            </ul>
            <div>
                <button className={props.filter === 'all' ? 'active-filter' : ''}
                        onClick={onAllClickHandler}>All</button>
                <button className={props.filter === 'active' ? 'active-filter' : ''}
                    onClick={onActiveClickHandler}>Active</button>
                <button className={props.filter === 'completed' ? 'active-filter' : ''}
                    onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    }
