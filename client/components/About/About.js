import React from 'react'
import Header from '../ui/Header'
class About extends React.Component {
	render(){
		return(
			<div className="about-wrapper">
				<Header title="About"/>
				<main className="about-main">
					<section className="about">
						<h4>This Project was developed using : </h4>
						<ul>
							<li>React</li>
							<li>React Router v4</li>
							<li>Redux</li>
							<li>Redux-Thunk</li>
							<li>React Dnd</li>
							<li>Webpack</li>
							<li>Express as an API Server</li>
							<li>MongoDB</li>
							<li>Mongoose</li>
						</ul>
					</section>
					<div className="support">
					    <p>It works on most of modern browsers. However, it's currently only functional on desktops/Tablets due to swap/move tasks feature.</p>
					    <p>Note: Since this is a demo of the application, the database is locked in read mode only. So making any CUD(create-update-delete) operations isn't possible in this demo. </p>
					</div>
				</main>
				<aside className="status">
					
						<ul className="status-tag">
							<li>Status</li>
							<li>In Progess</li>
							<li><i></i></li>
						</ul>
						<ul className="github-repo-tag">
						    
							<li><i></i></li>
							<li>github</li>
							
						</ul>
				</aside>
			</div>
			)
	}
}
export default About