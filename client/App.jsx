import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //data: ''
    }
  }
  render() {
    return (
      <div>
        <h1>Description</h1>
      </div>
    )
  }
}
ReactDOM.render(
  <App></App>,document.getElementById('app')
)