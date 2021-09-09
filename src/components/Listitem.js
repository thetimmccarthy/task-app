import React, { Component } from 'react';

class Listitem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEdit: false, 
            task: this.props.task.text,
            id: this.props.task.id
        }
        this.updateEdit = this.updateEdit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = (event) => {
        this.setState({
            task: event.target.value
        })
    }
    updateEdit = () => {
        this.setState({
            isEdit: !this.state.isEdit
        });
    }

    deleteTask = (event) => {
            let id = parseInt(event.target.id);
            
            this.props.handleDelete(id);
            event.preventDefault();
    }

    editTask = (event) => {
        event.preventDefault();
        let id = parseInt(event.target.firstChild.id);
        
        let value = event.target.firstChild.value;
        
        this.props.handleEditSubmit(value, id);
        this.updateEdit();
    }
    
    handleClick = (event) => {    
        this.updateEdit();        
        event.preventDefault();
    }

    render() {
        const { task } = this.props
        let button;
        if (this.state.isEdit) {
            button = (
                <div>
                    <form onSubmit={this.editTask} >
                        <input type="text" id={this.state.id} value={this.state.task} onChange={this.onChange}/>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            )
            
        } else {
            button = (
                <div>
                    {task.text}
                    <button id={task.id} onClick={this.deleteTask}>Delete</button>
                    <button id={task.id} onClick={this.handleClick}> Edit </button>
                </div>
                
            )
        }
        
        return (
            <li key={task.id} id={task.id}>
            {button}
            </li>
        )
        
    }
}

export default Listitem;