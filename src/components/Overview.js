import React, { Component} from 'react';
import uniqid from 'uniqid';

class Overview extends Component {
    
    

    render () {
        const {task, tasks} = this.props;       

        return (
            <div>                
                <ul>
                    {tasks.map((task, index) => {
                        return (<li key={task.id}>{task} <button>Delete</button></li>)
                    })}            
                </ul>
            </div>
        )
    }
}

export default Overview;