import React from 'react'
import { DragSource } from 'react-dnd';
import ItemTypes from './dnd/ItemTypes';

import Button from '../ui/Button'
import TaskForm from './TaskForm'

const TaskSource = {
  beginDrag(props) {
    return props;
  }
};
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}


class Task extends React.Component {
  constructor(props){
  	super(props);
  	this.state={
  		        isEdited:false,
              showOptions:false
  	}
    this.showOptions=this.showOptions.bind(this)
  }

  showOptions(e){
    e.preventDefault();
    this.props.actions.toggleEditingTask(false,this.props.task._id)

  }

  render() {
    const editingStatement=this.props.tasks.editingTask && 
                          (this.props.tasks.id===this.props.task._id);
    const {connectDragSource, isDragging, task} = this.props
    
    return connectDragSource(

          <div className="task" style={{opacity: isDragging ? 0.0 : 1}}>
              <div className="task-info">
              <h4>{ task.title }</h4>
              <div className="options-container" onClick={this.showOptions}>
              <div className="options-button-container">
              <Button className="options-button"/>
              </div>
              </div>
              </div>
              { editingStatement ? <TaskForm 
              isEditTask={true} {...this.props} />:null}
              
            </div>)
  }
}


export default DragSource(ItemTypes.TASK, TaskSource, collect)(Task);