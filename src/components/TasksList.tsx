import React from "react";
import { TaskType } from './model/Task';
import { Task } from "./Task";
import "./TasksList.css";

type TaskListprops = {
    tasks: TaskType[]
};

export const TasksList = ({tasks}: TaskListprops) => {
    return (
        <div>
            {tasks.map((task) => (
            <Task task={task}/>
          ))}
          <p>hello</p>
        </div>
    )
}