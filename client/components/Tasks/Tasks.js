import React from 'react'


import DroppableTask from './dnd/DroppableTask'
import TaskForm from './TaskForm'

class Tasks extends React.Component {
render(){
    return(
		<div className="tasks">
		{/* Lists of tasks */}
        {
        	this.props.tasks.task.map((list,key)=>
                (this.props.list._id===list._id) ?
                list.tasks.map((el,index)=>
                    <DroppableTask 
                    index={index}
                    task={el}
                    parentIndex={index}
                    key={index} {...this.props} />
                    ):null
            )
        }
	    {/* Task Create Form */}
         <div className="create-task-form-container">
         <TaskForm {...this.props}/>
         </div>
		</div>
		)
}
}

export default Tasks
