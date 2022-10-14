import React from 'react';
import './Task.css';

const Tarefas_ = ({Tarefas}) => {
    return ( 
        <>
        <div className='task-container'>
            {Tarefas.title}
        </div>
        </>
    );
}
 

export default Tarefas_;