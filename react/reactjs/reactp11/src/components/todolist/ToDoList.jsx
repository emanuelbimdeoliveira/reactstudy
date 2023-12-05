import React from 'react'
import { useTasks } from '../../hooks/useTasks'
import { useState } from 'react';

const ToDoList = () => {
    const [taskName, setTaskName] = useState("");
    const [taskId, setTaskId] = useState("")

    const { dispatch, state } = useTasks(taskName, taskId);

  return (
    <>
        <h2>Lista de Tarefas</h2>
        {state &&
            <ul>
                {   
                    state.map((item) => (
                        <li key={item.taskId}><p>{item.taskName}</p> <button onClick={() => {dispatch({type: "DELETE", id: item.taskId})}}>Deletar</button></li>
                    ))
                }        
            </ul>
        }

        <form onSubmit={(event) => {event.preventDefault(); dispatch({type: "ADD"})}}>
            <input type="text" value={taskName} onChange={(event) => setTaskName(event.target.value)}/>
            <input type="text" value={taskId} onChange={(event) => setTaskId(event.target.value)}/>
            <input type="submit" value="Adicionar Tarefa" />
        </form>
    </>
  )
}

export default ToDoList