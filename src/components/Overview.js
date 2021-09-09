import React, { Component} from 'react';
import Listitem from './Listitem';

class Overview extends Component {

    render () {
        const {task, tasks, handleDelete} = this.props;       

        return (
            <div>                
                <ul>

                    {tasks.map((task) => {
                        return <Listitem key={task.id} task={task} handleDelete={this.props.handleDelete} handleEditSubmit={this.props.handleEditSubmit} />
                    })}
                </ul>
            </div>
        )
    }
}

export default Overview;