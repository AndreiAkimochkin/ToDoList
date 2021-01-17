import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

type ActionType = {
    type: string
    [key: string]: any
}

export type RemoveTodolistActionType = {
    type:'REMOVE-TODOLIST'
    id: string
}

export type AddTodolistActionType = {
    type: "ADD-TODOLIST"
    title: string
}

export type ChangeTodolistTitleActionType = {
    type: "CHANGE-TODOLIST-TITLE"
    id: string
    title: string
}

export type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER'
    id: string
    filter: FilterValuesType
}

type ActionsType = RemoveTodolistActionType | AddTodolistActionType | ChangeTodolistTitleActionType
| ChangeTodolistFilterActionType

export const todolistsReducer = (state: Array<TodolistType>, action: ActionsType): Array<TodolistType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(tl => tl.id != action.id)
        case "ADD-TODOLIST":
            let newTodolistId = v1();
            let newTodolist: TodolistType = {id: newTodolistId, title: action.title, filter: 'all'};
            return [...state, newTodolist];
        case "CHANGE-TODOLIST-TITLE":
            const todolist = state.find(tl => tl.id === action.id);
            if (todolist) {
                todolist.title = action.title;
                return [...state];
            }
            return state
        case 'CHANGE-TODOLIST-FILTER':{
            let todolist = state.find(tl => tl.id === action.id);
            if (todolist) {
                todolist.filter = action.filter;
                return [...state]
            }
            return state
}
        default:
            throw new Error('This type doesnt exist')
    }
}


export const RemoveTodolistAC = (todolistId: string) :RemoveTodolistActionType => {
    return {type:'REMOVE-TODOLIST', id: todolistId}
}

export const AddTodolistAC = (title: string) : AddTodolistActionType => {
    return {type: "ADD-TODOLIST", title}
}

export const ChangeTodolistTitleAC = (title: string, id: string ): ChangeTodolistTitleActionType => {
    return {type:"CHANGE-TODOLIST-TITLE", title, id}
}

export const ChangeTodolistFilterAC = (id: string, filter: FilterValuesType): ChangeTodolistFilterActionType=> {
    return {type:'CHANGE-TODOLIST-FILTER', id, filter }
}