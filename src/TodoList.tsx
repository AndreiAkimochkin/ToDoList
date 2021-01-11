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
    changeTaskStatus: (id: string, isDone: boolean)=>void
    filter: filterValuesType
}

export function TodoList(props: propsType) {

    let [title, setTitle] = useState('')
    let [error, setError] =useState<null | string>(null)

    const addTask = () => {
        if(title.trim() !== '') {
            props.addTask(title)
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
