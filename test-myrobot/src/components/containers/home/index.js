import React, { Component } from 'react';
import New from '../../views/New';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Periodico nacional TestMyRobot</h1>
        </header>
        <main>
          <New />
        </main>
        <footer>
          &copy;Ediciones TestMyRobot
        </footer>
      </React.Fragment>
    );
  }
}

export default Home;