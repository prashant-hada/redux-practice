import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[
        {
            id: "1",
            text: "hello world"
        }
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text : action.payload
            }

            state.todos.push(todo);
        },
        removeTodo : (state, action)=>{
            state.todos = state.todos.filter(todo=> todo.id !== action.payload)
        }
    }
})


//export these individual methods so that we can use them inside different components
export const { addTodo, removeTodo} = todoSlice.actions;

//export these as it will contain all the reducers and we need to give "store" our reducer.
export default todoSlice.reducer;