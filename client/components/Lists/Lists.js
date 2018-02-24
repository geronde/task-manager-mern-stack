import React from 'react'


import Button from '../ui/Button'
import ListForm from './ListForm'
import List from './List'


class Lists extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
      showCreateListForm: false
    }    
  }
    toggleCreateListForm() {	
    this.props.actions.toggleAction(this.state.showCreateListForm)
  }

  render() {
    return (
      <main className="board">
      <section className="list-container">
      {this.props.lists.map((item,index) => <List list={item}
       parentIndex={index}
       targetParentIndex={index} 
       key={ index } 
       {...this.props} />)}
      <div className="list-create-form-container">
      {/* Create List Button */}
        <Button name="create List" className="create-list-button" title="Create a list" onClickAction={ this.toggleCreateListForm.bind(this) } />
        { this.props.toggle.toggleButton && <ListForm  isCreateList={true} {...this.props} />}
      </div>
      </section>
      </main>
    )
  }
}

export default Lists;