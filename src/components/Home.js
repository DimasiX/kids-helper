import React from 'react';

const Home = (props) => {
  return(
    <div className="home">
      <div className="blur-img">
        <div className="overflow"></div>
      </div>
      <h1 className="greetings">Welcome Home!</h1>
      <div className="home-content">
        <form onSubmit={props.addGame}>
          <input type="text" placeholder="Type Your Name!"/>
          <button type="submit">Add On It!</button>
        </form>

        <ul>
          {
            props.games.map((game, index)=>{
              return(
                <li key={index}>{game}</li>
              )
            })
          }
        </ul>


      </div>
    </div>
  )
}

export default Home;
