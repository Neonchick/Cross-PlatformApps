import React from "react";
import './TaskAdd.css'

class TaskAdd extends React.Component {

    constructor(props) {
        super(props)
        this.onAddClicked = this.onAddClicked.bind(this)
    }

    render() {
        return (
            <div>
                <div  className='addArea'>
                    <input id='name' className='addInput'/>
                    <button className='addButton' onClick={this.onAddClicked}>{'Add'}</button>
                </div>
                <textarea  id='description'/>
            </div>
        )
    }

    onAddClicked() {
        let name = document.getElementById('name');
        let description = document.getElementById('description');
        this.props.onAddTask(name.value, description.value);
        name.value = '';
        description.value = '';
    }

}

export default TaskAdd