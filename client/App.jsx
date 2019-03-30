import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    // console.log('DATA----->', data);
  }

  get () {
    $.ajax ({
      url: '/test',
      method: 'GET',
      error: (err) => {
        if (err) {
          console.log('Error', err);
        }
      },
      success: (data) => {
        console.log(data);
        this.setState ({
          data: data
        });
      }
    });
  }
  componentDidMount() {
    this.get();
  }

  render() {
    return (
      <div>
        <h1>Description</h1>
        <div>{this.state.data}</div>
      </div>
    )
  }
}
ReactDOM.render(
  <App></App>,document.getElementById('app')
)