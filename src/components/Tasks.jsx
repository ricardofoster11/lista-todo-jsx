import React from "react";
import Tarefas_ from "./Task";

const Tasks = ({Tarefas}) => {    
    return (
        <>
            {Tarefas.map((Tarefas) => (
            <Tarefas_ Tarefas={Tarefas}/>
            ))}
        </>
    )
};

export default Tasks;