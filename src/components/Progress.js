import React, {Component} from 'react';

class Progress extends Component{
  render(){
    return(
      <div className="progress-comp">
        <div className="intro-progress">
          <h1 className="h1">TRACK YOUR WISHES</h1>
        </div>
        <div className="wishes">
          {this.props.wish.map((wish, index)=>{
            return(
              <div className={"wish-progress "} key={index}>
                <div className={"achieve " + wish.achieved}>


                </div>
                <h1>{wish.name}</h1>
                <div className="checker">
                  <div className={"check arrow " + wish.achieved}><span onClick={() => this.props.setAchieved(index)}>&#10003;</span></div>
                  <div className={"check criss " + wish.achieved}><span onClick={() => this.props.setNotAchieved(index)}>&#215;</span></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Progress;
