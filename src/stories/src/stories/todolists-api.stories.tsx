import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "fe58a20b-6990-4fee-a414-1ab0afb5a9c0"
    }
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolist().then((res)=>{
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
      todolistAPI.createTodolist("title").then((res)=>{
            setState(res.data)
        })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
      const todolistId = 'c4c6b4a2-09f9-4ff5-ade9-0dbc3ffaca40'
                  todolistAPI.deleteTodolist(todolistId).then((res)=>{
                setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
       const todolistId='3066281e-d6db-49f0-be52-008d1249b2b3';
        todolistAPI.updateTodolist(todolistId,
            'New Title').then((res)=>{setState(res.data)})
    }, []);

    return <div> {JSON.stringify(state)}</div>
}
