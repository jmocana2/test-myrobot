import React, { Component } from 'react';
import New from '../../views/New';
import { StyledHome } from './style';

class Home extends Component {
  render() {
    return (
      <StyledHome>
        <header className="header">
          <h1>Periodico nacional TestMyRobot</h1>
        </header>
        <main>
          <New />
          <ul className="list-news">
            <li className="item-new">
              <New />
            </li>
            <li className="item-new">
              <New />
            </li>
            <li className="item-new">
              <New />
            </li>
            <li className="item-new">
              <New />
            </li>
            <li className="item-new">
              <New />
            </li>
            <li className="item-new">
              <New />
            </li>
            <li className="item-new">
              <New />
            </li>
            <li className="item-new">
              <New />
            </li>
          </ul>          
        </main>
        <footer className="footer">
          &copy;Ediciones TestMyRobot
        </footer>
      </StyledHome>
    );
  }
}

export default Home;