import React from 'react'
import {Link} from 'react-router-dom'


const Header = (props) => (
	<header className="board-header">
          <div className="board-title">
              <h1>
                Personal Project Manager
              </h1>
            <h3>A simple app to organize projects</h3>
          </div>
          <div className="board-menu">
            <nav>
              <ul>
                <li><Link to="/">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </nav>
            <div>  </div>
          </div>
           <div className="project-name">
            <h4>{props.title}</h4>
            </div>
        </header>
	)

export default Header;