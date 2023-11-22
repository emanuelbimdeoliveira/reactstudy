import { useReducer } from "react";
import { useState } from "react";

export const useTasks = (taskName, taskId) => {

    const initialState = [
        {taskName: "tarefa", taskId: "isso"}
    ];

    const dispatchTasksReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const newTask = {
                    taskName,
                    taskId
                }    
                return [...state, newTask]; 
            case "DELETE":
                return state.filter((item) => {
                    return item.taskId != action.id;
                })
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(dispatchTasksReducer, initialState);

    return { dispatch, state };
}