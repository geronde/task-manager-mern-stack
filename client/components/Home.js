import React from 'react'

import ProjectsContainer from './Projects/ProjectsContainer'
import HeaderTitle from './ui/HeaderTitle'
class Home extends React.Component{
  render() {

    return(
    	<div className="home-wrapper">
    	<HeaderTitle/>
      <main className="home-main">
    	<ProjectsContainer {...this.props}/>
    	</main>
    	<footer>All rights are reserved</footer>
    	</div>
      )
  }
}

export default Home;