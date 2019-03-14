import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <main>
            {this.props.children}
        </main>
      </div>
    );
  }
}

export default Home;