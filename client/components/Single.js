import React from 'react';
import {Link} from 'react-router';


const Single = React.createClass({
  render(){
      return(
        <div>
          <h1>Single</h1>
          <ul>
            {this.props.mock.map((agent)=> {return <li>{agent.name}</li>})}
          </ul>
        </div>
      )
  }
});

export default Single;
