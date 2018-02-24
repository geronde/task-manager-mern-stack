import React from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes'
import Task from '../Task'
//import swap cards action

const taskDropTarget = {
  drop(props, monitor) {
    const item = monitor.getItem();
    if (item.parentIndex !== props.parentIndex) {
      return undefined
    }
    const data = {
      src: {
        listIndex: item.parentIndex,
        taskIndex: item.index,
      },
      target: {
        listIndex: props.parentIndex,
        taskIndex: props.index,
      },
    };
    item.actions.swapTask(data.src, data.target);
    item.actions.updateAfterMoveTask({data:item.tasks},item.match.params.projectId)

  },
  canDrop() {
    return true;
  },
};
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}


class DroppableTask extends React.Component {
  render(){
    const {isOver,connectDropTarget,task,index}=this.props
    return connectDropTarget(
      <div style={{opacity: isOver ? 0.5 : 1 }} >
      <Task title={task.title}
        index={index}
        {...this.props} />
        </div>
      )
  }
}

export default DropTarget(ItemTypes.TASK, taskDropTarget, collect)(DroppableTask);