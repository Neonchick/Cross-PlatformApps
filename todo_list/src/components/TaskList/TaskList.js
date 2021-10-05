import React from "react";
import Task from "../Task/Task"
import './TaskList.css';

class TaskList extends React.Component {

    render() {
        return (
            <ul className = 'taskList'>
                {this.props.tasks.map((task) => {
                    return <Task 
                        key = {task.id} 
                        id = {task.id} 
                        name = {task.name} 
                        description = {task.description} 
                        completed = {task.completed}
                        onTaskChangeCompleted = {this.props.onTaskChangeCompleted}
                        />
                })}
            </ul>
        )
    }

}

export default TaskList