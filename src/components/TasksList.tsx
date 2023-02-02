import React from "react";
import { TaskType } from './model/Task';
import { Task } from "./Task";
import "./TasksList.css";

type TaskListprops = {
    tasks: TaskType[];
    deleteTask: (taskId: number) => void;
    editTask: (taskId: number) => void;
};

export const TasksList = ({tasks, deleteTask, editTask}: TaskListprops) => {
    return (
        <>
            {tasks.map((task) => (
            <Task task={task}
            key={task.id}
            deleteTask={deleteTask} 
            editTask={editTask}
            />))}
        </>
    )
}