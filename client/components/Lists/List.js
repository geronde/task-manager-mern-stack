import React from 'react'
import { DropTarget } from 'react-dnd';


import  ItemTypes  from '../Tasks/dnd/ItemTypes';


import Button from '../ui/Button'
import ListForm from './ListForm'

import TasksContainer from '../Tasks/TasksContainer'

const listTarget = {
  drop(props, monitor) {
    const item = monitor.getItem();
    if (item.parentIndex === props.targetParentIndex) {
      return undefined;
    }
      item.actions.shiftTask({
      index: item.parentIndex,
      taskIndex: item.index,
    }, {
        index: props.targetParentIndex
    });
          item.actions.updateAfterMoveTask({data:item.tasks},item.match.params.projectId)


  },

  canDrop(props) {
    return props.list.name && props.list.name.length;
  },
};
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}



class List extends React.Component {
  constructor(props) {
    super(props);
    
        this.editAction=this.editAction.bind(this)
        this.removeList=this.removeList.bind(this)
        
  }

  editAction(){
    this.props.actions.toggleEditing(false,this.props.list._id);
  }
  
  removeList(e){
    e.preventDefault();
    this.props.actions.deleteList(this.props.match.params.projectId,this.props.list._id)
  }

  render() {
    const {list, connectDropTarget}=this.props
    return connectDropTarget(
      <div className="list">
        <section className="list-name-container">
        <div className="list-name">
        <h3 onClick={this.editAction} >{list.name}</h3>
        <div className="delete-list-button-container">
        <Button className="delete-list-button" onClickAction={this.removeList} />
        </div>
        </div>
        {this.props.toggle.editing && (list._id===this.props.toggle.id) ? <ListForm isEditList={true} {...this.props} />:null }
        </section>
        <section className="tasks-container">
          <TasksContainer  {...this.props} />
        </section>
                                                         
      </div>
    )

  }
}

export default DropTarget(ItemTypes.TASK, listTarget, collect)(List);