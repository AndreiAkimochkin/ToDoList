import {FilterValuesType, TasksStateType, TodolistType} from "../App";
import {v1} from "uuid";

type ActionType = {
    type: string
    [key: string]: any
}

export type RemoveTasksActionType = {
    type:'REMOVE-TASK'
    todolistId: string
    taskId: string
}

export type AddTaskstActionType = {
    type: "ADD-TASK"
    todolistId: string
    title: string
}


type ActionsType = RemoveTasksActionType |AddTaskstActionType

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            let copyState = {...state}
            copyState[action.todolistId] = copyState[action.todolistId].filter(t => t.id != action.taskId);
            return  copyState
    }
        case "ADD-TASK": {
            let copyState ={...state}
            let task = {id: v1(), title: action.title, isDone: false};
            copyState[action.todolistId] = [task, ...copyState[action.todolistId]];
            return  copyState
    }

          default:
            throw new Error('This type doesnt exist')
    }
}


export const removeTaskAC = (todolistId: string, taskId: string ) : RemoveTasksActionType => {
    return {type:'REMOVE-TASK', todolistId, taskId}
}

export const addTaskAC = (todolistId: string, title: string) : AddTaskstActionType  => {
    return {type: "ADD-TASK", todolistId, title}
}
