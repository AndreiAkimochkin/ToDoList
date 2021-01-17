import {FilterValuesType, TasksStateType, TodolistType} from "../App";
import {v1} from "uuid";

type ActionType = {
    type: string
    [key: string]: any
}

export type RemoveTaskActionType = {
    type:'REMOVE-TASK'
    todolistId: string
    taskId: string
}

export type AddTaskActionType = {
    type: "ADD-TASK"
    todolistId: string
    title: string
}

export type ChangeTaskStatusActionType = {
    type: "CHANGE-TASK-STATUS"
    taskId: string
    todolistId: string
    isDone: boolean
}

export type ChangeTaskTitlesActionType = {
    type: "CHANGE-TASK-TITLE"
    taskId: string
    todolistId: string
    title: string
}


type ActionsType = RemoveTaskActionType |AddTaskActionType | ChangeTaskStatusActionType | ChangeTaskTitlesActionType

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
        case "CHANGE-TASK-STATUS": {
            let copyState = {...state}
            let todolistTasks = copyState[action.todolistId];
            let task = todolistTasks.find(t => t.id === action.taskId);
            //изменим таску, если она нашлась
            if (task) {
                task.isDone = action.isDone;
            }
            return copyState
        }
        case "CHANGE-TASK-TITLE": {
            let copyState = {...state}
            let todolistTasks = copyState[action.todolistId];
            let task = todolistTasks.find(t => t.id === action.taskId);
            //изменим таску, если она нашлась
            if (task) {
                task.title = action.title;
            }
            return copyState
        }

          default:
            throw new Error('This type doesnt exist')
    }
}


export const removeTaskAC = (todolistId: string, taskId: string ) : RemoveTaskActionType => {
    return {type:'REMOVE-TASK', todolistId, taskId}
}

export const addTaskAC = (todolistId: string, title: string) : AddTaskActionType  => {
    return {type: "ADD-TASK", todolistId, title}
}

export const changeTaskStatusAC=(taskId: string, isDone: boolean, todolistId: string): ChangeTaskStatusActionType => {
    return { type: "CHANGE-TASK-STATUS",taskId, isDone, todolistId}
}

export const changeTaskTitleAC=(taskId: string, title: string, todolistId: string): ChangeTaskTitlesActionType=> {
    return { type: "CHANGE-TASK-TITLE", taskId, title, todolistId}
}