import { useEffect, useState } from "react"

import { server } from "../../app/server"

async function fetchTodos(){
    try{
        const todos = await server.get('todos')
        return todos.data
    }
    catch{
        console.log('Network Erro')
        return []
    }
}

export function useTodos(){
    const [todos, setTodos] = useState([])

    async function getAndSetTodos(){
        const todos = await fetchTodos()
        setTodos(todos)
    }

    useEffect(() =>{
        getAndSetTodos()
    }, [])

    return {todos: todos, setTodos: setTodos}
}
