import React, { Component} from 'react';
import './App.css';
import uniqid from 'uniqid';
import Overview from './components/Overview';

 class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            task: {
              text: '',
              id: 0
              },
            tasks: [],
            count: 0
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        let newTask = {text: this.state.task.text,
          id: this.state.task.id};
        this.setState({
            
            task: {text: '',
                id: this.state.count + 1},
            tasks: [...this.state.tasks, newTask],
            count: this.state.count + 1
        });
    }
    
    handleEditSubmit = (newTask, id) => {
      let updatedTasks = this.state.tasks.map((task) => {
        if (task.id === id) {
          task.text = newTask
        }
        return task
      });
      
      this.setState({tasks: updatedTasks});
    }

    handleChange = (event) => {
      
        this.setState({
            task: {
                text: event.target.value,
                id: this.state.task.id
            }
        })
    }

    handleDelete = (taskIdToDelete) => {
      
      const filteredTasks = this.state.tasks.filter((task) => {
        return task.id !== taskIdToDelete;
      });
      
      this.setState({tasks: filteredTasks,});

    }
  render () {
    
    const {task, tasks} = this.state;
    
    return (

      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="task">Enter task:</label>
          <input type="text" id="task" name="task" value={task.text} required onChange={this.handleChange} /> 
          <input type="submit" value="Submit" />
        </form>
        <Overview task={task.text} tasks={tasks} handleDelete={this.handleDelete} onChange={this.handleChange} onSubmit={this.handleSubmit} handleEditSubmit={this.handleEditSubmit}/>
      </div>

    );
  }
}

export default App;
