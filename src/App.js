import "./App.css";
import React from "react";

class StarWars extends React.Component {
  constructor() {
    super()
    this.state = {
      loadedchar: false,
      id: null,
      name: null,
      height: null,
      homeworld: null,
      image: null
    }
  }
  getNewChar() {
    console.log("hi")
    var randomNumber = Math.ceil(Math.random() * 88);
    const url =`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${randomNumber}.json`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(`${randomNumber}`)
      console.log(data)
      this.setState({
        loadedchar: true,
        id: data.id,
        name: data.name,
        height: data.height,
        homeworld: data.homeworld,
        image: data.image
      })
    })
  }
  render() {
    return (
      <div>
        <div>
          {
            this.state.loadedchar &&
            <div>
                <h3 id="Id">{this.state.id}</h3>
                <img src={this.state.image} alt="" />
                <h1>{this.state.name}</h1>
                <p>Height- {this.state.height}</p>
                <p><a href={this.state.homeworld}>Home World</a></p>
            </div>
          }
        </div>
        <button type="button" onClick={() => this.getNewChar()} className="btn">
          Randomise Character
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
