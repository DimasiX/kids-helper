import React, {PropTypes} from 'react';

const Home = (props) => {
  return(
    <div className="home">
      <div className="blur-img">
        <div className="overflow"></div>
      </div>
      <h1 className="greetings">Welcome Home!</h1>
      <div className="home-content">
        <form onSubmit={props.addGame}>
          <input value={props.inputField} type="text" placeholder="Type Your Name!" onChange={props.input}/>
          <button type="submit" onClick={props.addGame}>Add On It!</button>
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

/*
Home.propTypes = {
  input: PropTypes.func.isRequired,
  addGame: PropTypes.func.isRequired
}
*/
export default Home;
