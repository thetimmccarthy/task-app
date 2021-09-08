import React, { Component} from 'react';

class Overview extends Component {
    
    deleteTask = (event) => {
        let id = event.target.id;
        this.props.handleDelete(id);
        event.preventDefault();
    }

    render () {
        const {task, tasks} = this.props;       

        return (
            <div>                
                <ul>
                    {tasks.map((task, index) => {                        
                        return (<li key={task.id} id={task.id} >{task.text} <button id={task.id} onClick={this.deleteTask}>Delete</button></li>)
                    })}            
                </ul>
            </div>
        )
    }
}

export default Overview;