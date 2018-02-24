import * as taskActions from '../actions/taskActions'

function taskReducer(state = {}, action) {

    switch (action.type) {
        case taskActions.TOGGLE:
            {
                var toggleState = Object.assign({}, state)
                toggleState.toggleButton = !toggleState.toggleButton
                return toggleState
            }
        case taskActions.TOGGLE_EDIT_TASK:
            {
                var editedState = Object.assign({}, state)
                editedState.editingTask = !editedState.editingTask
                editedState.id = action.id
                return { ...editedState }
            }

        case taskActions.GET_TASK:
            {

                return { ...state, task: action.payload.data }
            }
        case taskActions.CREATE_TASK:
            {
                return { ...state, task: action.payload.data }
            }
        case taskActions.UPDATE_TASK:
            {
                return { ...state, task: action.payload.data }
            }
        case taskActions.DELETE_TASK:
            {
                return { ...state, task: action.payload.data }

            }
        case taskActions.SWAP_TASK:
            {
                const { src, target } = action;
                const taskToSwap = state.task[src.listIndex].tasks[src.taskIndex]
                state.task[src.listIndex].tasks[src.taskIndex] = state.task[target.listIndex].tasks[target.taskIndex];
                state.task[target.listIndex].tasks[target.taskIndex] = taskToSwap;
                            return {...state}
                            
                
            }
        case taskActions.SHIFT_TASK:
            {
                const { srcListIndex, targetListIndex, srcTaskIndex } = action;
                if (srcListIndex !== targetListIndex) {
                   const moveToList = state.task[srcListIndex].tasks[srcTaskIndex]
                    state.task[srcListIndex].tasks.splice(srcTaskIndex, 1);
                    state.task[targetListIndex].tasks.push(moveToList);
                   
                }
                return { ...state } 
                
            }
        case taskActions.UPDATE_ON_MOVE_TASK:
        {
            return {...state, task:action.payload.data}
        }
        default:
            {
                return state;
            }
    }
}

export default taskReducer



/*
case taskActions.SHIFT_TASK:
		{
			 const { srcListIndex, targetListIndex, srcTaskIndex } = action;
             if (srcListIndex !== targetListIndex) {
        		const dndTask = Object.assign({},state.task[srcListIndex].tasks[srcTaskIndex]);
        			dndTask.task[srcListIndex].tasks.splice(srcTaskIndex, 1);
                    state.task[targetListIndex].task.push(dndTask);
        			return dndTask
                   }
		}
*/