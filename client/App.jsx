import React from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import _ from 'lodash';
import Stars from './stars.jsx';
import styled from 'styled-components';


const Name = styled.div`
  font-size: 21px;
  letter-spacing: .4px;
  line-height: 27px;
  font-family: Sailec;
  font-weight: 700;
  margin-bottom: 12px;
`;

const Category = styled.div`
@import url('https://fonts.googleapis.com/css?family=Oswald:300');
  font-family: Oswald;
  font-weight: 400;
  font-style: italic;
  font-size: 18px;
  line-height: 22px;
  font-stretch: condensed;
  letter-spacing: 1px;
  text-align: left;
  margin-bottom: 15px;
`;

const Review = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Space+Mono');
  display: inline-block;
  padding-left: 5px;
  font-family: Space Mono;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Taste = styled.div`
  font-size: 16px;
  text-transform: none;
  font-weight: bold;
  font-family: Sailec;
  margin-top: 20px;
  margin-bottom: 5px;
`;

const Description = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Comfortaa');
  display: inline-block;
  width: 65%;
  margin-top: 6px;
  font-family: Comfortaa;
  font-size: 15px;
`;
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
        {this.state.singleItem 
          ? 
          <div> 
            <Name>
            <div>{this.state.singleItem.name}</div>
            </Name>
            <Category>
            <div>{this.state.singleItem.category}</div>
            </Category>
            <Review>
            <div><Stars stars={parseInt(this.state.singleItem.stars)}/>  {this.state.singleItem.reviews}   reviews </div>
            </Review>
            <Taste>
            <div>{this.state.singleItem.taste}</div>
            </Taste>
            <Description>
            <div>{this.state.singleItem.description}</div>
            </Description>
          
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