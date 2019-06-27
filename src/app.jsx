import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  
  render() {
    return (
      <h3>Future Twitchy App</h3>
    )
  }

};

ReactDOM.render(<App/>, document.getElementById('app'));



