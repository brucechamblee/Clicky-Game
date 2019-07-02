import React, { Component } from "react";
import DogCard from "./components/DogCard";
import Container from "./components/Container";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import dogs from "./dogs.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    dogs,
    topScore: 0,
    score: 0,
    dogsClicked: []
  };

  removeDog = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const dogs = this.state.dogs.filter(dog => dog.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ dogs });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Container>
        <Nav>{this.state.topScore} {this.state.score}</Nav>
        <Jumbotron>Clicky the Dog Game</Jumbotron>
        {this.state.dogs.map(dog => (
          <DogCard
            removeDog={this.removeDog}
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
