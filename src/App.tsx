import React from "react";
import "./App.css";
import { Task } from "./components/Task";
import { TaskFormModal } from "./components/TaskFormModal";
import { data } from "./data/tasks";
import { Header } from './components/Header';
import { TaskType } from './components/model/Task';
import { TasksList } from "./components/TasksList";
import { useState } from "react";
import { Test } from "./components/Test";


const App = () => {
  const title = "To do list";
  const [taskToEdit, setTaskToEdit] = useState<TaskType | null> (null);
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState(data);

  const updateTaskState = (taskId: number) => {
    
    console.error("I need to be implemented");
  };
                                          
  const addOrEditTask = (event: any, taskToEditId?: number, form?: any) => {
    event.preventDefault();
    if (taskToEditId != null) {
      const taskToEdit = tasks.find(task => task.id === taskToEditId);
      if (taskToEdit) {
        taskToEdit.title = event.target.title.value;
        taskToEdit.description = event.target.description.value;
      }
      setTaskToEdit(null)
    } else {
        const newTasks: TaskType =  {
          done: false,
          id: tasks[tasks.length-1].id + 1,
          title: event.target.title.value,
          description: event.target.description.value,
        }
        setTasks([...tasks, newTasks]);
      };  
    }

  const editTask = (taskId: number) => {
    const copyTask = tasks.find(task => task.id === taskId);
    if(copyTask){
      setTaskToEdit(copyTask);
    };

    setShowModal(true);
  
  };

  const deleteTask = (taskId: number) => {
    setTasks((avent) => avent.filter((task) => task.id !== taskId))
    // setTasks((perv) => perv.filter((task) => task.id !== taskId))
  };

  return (
    <div className="main">
      <Header
      title= {title}
      />
      
      <Test test="blabla" />
      <TasksList tasks= {tasks}
      editTask={editTask}
      deleteTask={deleteTask} />
      <button
        className="add-task-btn"
        onClick={() => setShowModal(true)}
        >
        +
      </button>
      <TaskFormModal
        show={showModal}
        handleClose={()=>{
          setShowModal(false)
        }

        }
        addOrEditTask={addOrEditTask}
        initialValues={
          taskToEdit != null
            ? {
                id: taskToEdit.id,
                title: taskToEdit.title,
                description: taskToEdit.description,
              }
            : undefined
        }
      />
    </div>
  );
};

export default App;
