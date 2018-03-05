import React, {Component} from 'react';

class Progress extends Component{
  render(){
    console.log(this.props.wish);
    return(
      <div className="progress">
        {this.props.wish.map((wish, index)=>{
          return(
            <div className="wish-progress" key={index}>
              <h1>{wish.name}</h1>
              <p>What I do to reach this goal:</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Progress;
