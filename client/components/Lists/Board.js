import React from 'react'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ListsContainer from './ListsContainer'
import Header from '../ui/Header'
class Board extends React.Component {
	render(){    
    return (
          <div className="board-wrapper">
          <div className="overlay-inactive"></div>
          <Header title={this.props.match.params.projectName}/>
        <ListsContainer {...this.props} />
            </div>
			)
	}
}
export default DragDropContext(HTML5Backend)(Board);