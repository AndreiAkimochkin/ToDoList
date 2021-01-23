import axios from 'axios'
type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    data: D
}

const instance =axios.create ({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        "API-KEY": "fe58a20b-6990-4fee-a414-1ab0afb5a9c0"
    }
})

export const todolistAPI = {
    getTodolist() {
        const promise = instance('todo-lists/')
        return promise
    },

    createTodolist(title: string){
        const promise = instance.post(`todo-lists/`,
        title)
        return promise
    },

    deleteTodolist(todolistId: string){
        const promise = instance.delete(`todo-lists/${todolistId}`,
       )
        return promise
    },

    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put(`todo-lists/${todolistId}`,
            title)
        return promise
    }
}
