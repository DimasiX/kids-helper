import React, {Component} from 'react';

class Progress extends Component{
  render(){
    console.log(this.props.wish);
    return(
      <div className="progress">
        <div className="intro-progress">
          <h1>TRACK YOUR WISHES</h1>
        </div>
        {this.props.wish.map((wish, index)=>{
          return(
            <div className={"wish-progress "} key={index}>
              <div className={"achieve " + wish.achieved}><h1>ACHIEVED</h1></div>
              <h1>{wish.name}</h1>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Progress;
