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
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        this.setState({
            task: {text: '',
                id: uniqid()},
            tasks: [...this.state.tasks, event.target.task.value]
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
  render () {
    const {task, tasks} = this.state;
    return (

      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="task">Enter task:</label>
          <input type="text" id="task" name="task" value={task.text} required onChange={this.handleChange} /> 
          <input type="submit" value="Submit" />
        </form>
        <Overview task={task.text} tasks={tasks} />
      </div>

    );
  }
}

export default App;
