import React, { Component} from 'react';
import ReactDOM from 'react-dom';

export default class Header extends Component {
  constructor () {
    super();
    this.state = {
      name: 'David'
    };
  }
  clickedBtn = () => {
    console.log('Button Clicked')
  }
  render () {
    return (
      <div className="container">
        <header>
          <div className="left-menu">
            <div className="logo">Craigslist</div>
            <div className="city">
              New York
              <i className={`fas fa-chevron-down`} />
            </div>
          </div>

          <div className="right-menu">
            <div className="user-img">img</div>
            <div className="user-dropdown">
              my account
              <i className={`fas fa-chevron-down`} />
            </div>
            <div className="post-btn">post to classifieds</div>
          </div>
        </header>
      </div>
    )
  }
}

