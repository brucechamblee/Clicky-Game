import React, { Component } from "react";
import DogCard from "./components/DogCard";
import Container from "./components/Container";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import dogs from "./dogs.json";

let dogsClicked = []

class App extends Component {
  state = {
    dogs,
    topScore: 0,
    score: 0
  };

  shuffleDogs = id => {
    const dogShuffle = this.state.dogs.sort(() => Math.random() - 0.5);
    this.setState({
      dogs: dogShuffle
    });
    if (dogsClicked.includes(id)) {
      if (this.state.topScore < this.state.score) {
        this.setState({
          topScore: this.state.score
        });
      }
      this.setState({
        score: 0
      });
      dogsClicked = [];
    } else {
      dogsClicked.push(id);
      this.setState({
        score: this.state.score + 1
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <Container>
        <Nav topScore={this.state.topScore} score={this.state.score} />
        <Jumbotron>Clicky the Dog Game</Jumbotron>
        {this.state.dogs.map(dog => (
          <DogCard
            shuffleDogs={this.shuffleDogs}
            id={dog.id}
            key={dog.id}
            name={dog.dogName}
            image={dog.image}
            occupation={dog.occupation}
            location={dog.location}
          />
        ))}
      </Container>
    );
  }
}

export default App;
