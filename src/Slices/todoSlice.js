import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const initialState={
todos:JSON.parse(localStorage.getItem('tasks'))||[],
status:'Incomplete',

}
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
    addTask:(state,action)=>{
     const task=action.payload;
     const id=nanoid();
     state.todos=[...state.todos,{id,task,complete:false}];
localStorage.setItem('tasks',JSON.stringify(state.todos))
    },
    deleteTask:(state,action)=>{
     const filteredTask=state.todos.filter((item)=>item.id!==action.payload);
     state.todos=filteredTask;
     localStorage.setItem('tasks',JSON.stringify(state.todos))
       },
       taskCompleted:(state,action)=>{
        const completedTask=state.todos.map((item)=>(item.id===action.payload)?{...item,complete:!item.complete}:item);
        state.todos=completedTask;
        localStorage.setItem('tasks',JSON.stringify(state.todos))
       }
    }
})
export const {addTask,deleteTask,taskCompleted}=todoSlice.actions
export default todoSlice.reducer;