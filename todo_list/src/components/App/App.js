import './App.css';
import TaskList from '../TaskList/TaskList';
import TaskAdd from '../TaskAdd/TaskAdd';
import React from "react";

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            nextId: 6,
            tasks: [
                { id: 1, name: "ДЗ по тестированию", description: "Протестировать функцию НОД", completed: false },
                { id: 2, name: "ДЗ на НИС", description: "Прочитать про Arduino", completed: true },
                { id: 3, name: "Дз по машинному обучению", description: "Сделать задания на основы python и numpy", completed: true },
                { id: 4, name: "Дз по курс по выбору", description: "Написать TODO лист на React", completed: false },
                { id: 5, name: "Экзамен по Английскому", description: "Подготовится к Speaking и Writing", completed: false },
            ]
        }

        this.onTaskChangeCompleted = this.onTaskChangeCompleted.bind(this);
        this.onAddTask = this.onAddTask.bind(this);
    }

    render() {
        return (
            <div className = 'mainComponent'>
                <TaskList tasks={this.state.tasks} onTaskChangeCompleted={this.onTaskChangeCompleted} />
                <TaskAdd onAddTask={this.onAddTask} />
            </div>
        )
    }


    onTaskChangeCompleted(id, completed) {
        this.setState((state) => {
            return {
                tasks: state.tasks.map((task) => (task.id === id) ? Object.assign(task, { completed: completed }) : task)
            };
        });
    }

    onAddTask(name, description) {
        this.setState((state) => {
            let newTask = { id: state.nextId, name: name, description: description, completed: false };
            let newState = Object.assign([], state.tasks);
            newState.push(newTask);
            return {
                nextId: state.nextId + 1,
                tasks: newState
            };
        });
    }

}

export default App