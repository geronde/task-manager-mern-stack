import React from 'react'

import Input from '../ui/Input'
import Button from '../ui/Button'

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.isEditTask) {
      this.state = ({
        title: this.props.task.title,
        _id: this.props.task._id,
        onEditFocus: false
      })
    } else {
      this.state = {
        title: ""
      }
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.submitChanges = this.submitChanges.bind(this)
    this.removeTask = this.removeTask.bind(this)
    this.showEditForm = this.showEditForm.bind(this)
    this.exitOnBlur = this.exitOnBlur.bind(this)

  }

  onChangeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  submitChanges(e) {
    e.preventDefault()
    const projectId = this.props.match.params.projectId
    if (this.props.isEditTask) {
      this.props.actions.editTask({
        title: this.state.title
      }, projectId, this.props.list._id, this.state._id)
      this.props.actions.toggleEditingTask(true, this.props.task._id)
      document.querySelector('.overlay-inactive').classList.remove('overlay-active')

    } else {
      this.props.actions.createTask({
        title: this.state.title
      }, this.props.match.params.projectId, this.props.list._id)
      this.setState({
        title: ""
      })
    }
  }
  showEditForm(e) {
    e.preventDefault();
  //this.props.actions.toggleEditingTask(false,this.props.task._id)
  }
  removeTask(e) {
    this.props.actions.deleteTask(this.props.match.params.projectId, this.props.list._id, this.props.task._id)
    document.querySelector('.overlay-inactive').classList.remove('overlay-active')
  }

  exitOnBlur() {
    if (this.setRef && !this.setRef.contains(event.target)) {
      document.querySelector('.overlay-inactive').classList.remove('overlay-active')
      this.props.actions.toggleEditingTask(!this.state.onEditFocus, this.state._id)
    }

  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.exitOnBlur);
  }

  componentDidMount() {
    if (this.props.isEditTask) {
      document.addEventListener('mousedown', this.exitOnBlur);
      document.querySelector('.overlay-inactive').classList.add('overlay-active')
      this.autoSelect.select();

    }
  }

  render() {
    if (this.props.isEditTask) {
      return (
        <div className="edit-task-container" ref={ (input) => this.setRef = input }>
          <form className="edit-task" onSubmit={ this.submitChanges }>
            <Input type="text" name="title" inputRef={ (input) => this.autoSelect = input } value={ this.state.title } onChangeAction={ this.onChangeHandler } autoFocus />
          </form>
          <div className="options" id="options-buttons">
            <Button title="edit" onClickAction={ this.showEditForm } />
            <Button title="delete" onClickAction={ this.removeTask } />
          </div>
        </div>
      )
    } else {
      return (
        <form className="create-task-form" onSubmit={ this.submitChanges }>
          <Input type="text" name="title" placeholder="Add a task" value={ this.state.title } onChangeAction={ this.onChangeHandler } />
        </form>
      )
    }
  }
}

export default TaskForm