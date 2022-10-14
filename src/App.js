import React, { useState } from "react";
import Tasks from "./components/Tasks";
import './App.css';
import AddTask from "./components/AddTask";

const App = () => {
  const [Tarefas, setTarefas] = useState([
    /*{
      id: '01',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '02',
      title: 'Ler Livros',
      completed: true,
    },
    {
      id: '03',
      title: 'Limpar a casa',
      completed: true,
    }*/
  ]);

  const handleTarefaAddition = (TarefasTitle) => {
      const newTarefas = [
          ...Tarefas, 
          {
            title: TarefasTitle,
            id: Math.random(10),
            completed: false,
          },
    ];
    
    setTarefas(newTarefas);
  
  };

  return (
    <>
      <div className="container">
        <AddTask handleTarefaAddition={handleTarefaAddition}/>
        <Tasks Tarefas={Tarefas}/>
      </div>  
    </>
  );
};

export default App;