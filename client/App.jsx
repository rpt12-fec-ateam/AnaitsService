import React from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import _ from 'lodash';
import Stars from './stars.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      singleItem: null
    }
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
        let itemIndex = _.random(0, data.length) //use lodash
        console.log('Item Index', itemIndex)
        this.setState ({
          data: data,
          singleItem: data[itemIndex]
        });
        
      }
    });
  }
  componentDidMount() {
    this.get();
  }


  render() {
    return (
      <div className = "name">
      {console.log('Hello')}
        <h1>Description</h1>
        {this.state.singleItem 
          ? 
          <div> 

            <div>{this.state.singleItem.name}</div>
            <div>{this.state.singleItem.category}</div>
            
            <div> <Stars stars={parseInt(this.state.singleItem.stars)}/></div>
            <div>{this.state.singleItem.reviews}</div>
            <div>{this.state.singleItem.taste}</div>
            <div>{this.state.singleItem.description}</div>
          
          </ div> 
          : 
          null}


        {/* <div>{this.state.data.map((item, index) => 
          <div>
           <div key={index}>{item.name}</div>
           <div>{item.category}</div>
           <div>{item.stars}</div>
           <div>{item.reviews}</div>
           <div>{item.taste}</div>
           <div>{item.description}</div>
           </div>
        )}
        </div> */}
      </div>
    )
  }
}
 //export default App;
ReactDOM.render(<App/>, document.getElementById('app'));