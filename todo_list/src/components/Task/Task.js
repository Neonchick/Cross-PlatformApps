import React from "react";
import './Task.css';

class Task extends React.Component {

    render() {
        return (
            <li className='task'>
                <div>
                    <h1 className='taskName'>{this.props.name}</h1>
                    {this.props.description}
                </div>
                <input
                    type='checkbox'
                    className='checkbox'
                    checked={this.props.completed}
                    onChange={(event) => this.props.onTaskChangeCompleted(this.props.id, event.currentTarget.checked)}
                />
            </li>
        )
    }
}

export default Task