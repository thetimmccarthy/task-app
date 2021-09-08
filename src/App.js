import React, { Component} from 'react';
import './App.css';
import uniqid from 'uniqid';
import Overview from './components/Overview';

 class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: {text: '',
                id: uniqid()},
            tasks: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        let newTask = {text: this.state.task.text,
          id: this.state.task.id};
        this.setState({
            task: {text: '',
                id: uniqid()},
            tasks: [...this.state.tasks, newTask]
        });
        
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
      console.log(taskIdToDelete);  
      const filteredTasks = this.state.tasks.filter((task, index) => {
        return task.id !== taskIdToDelete;
      });
    
    this.setState({tasks: filteredTasks});

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
        <Overview task={task.text} tasks={tasks} handleDelete={this.handleDelete}/>
      </div>

    );
  }
}

export default App;
