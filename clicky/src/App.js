import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    correct: 0
  };

  restart = () => {
    this.state.cards.forEach(card => {
      card.selected = false;
    });
    this.setState({correct: 0});
    return true;
  }


  clickCount = id => {

   
    this.state.cards.find((idk, i) => { //idk is the selected JSON file
      console.log(idk)
      if (idk.id === id) {
        if(cards[i].selected === false){
          cards[i].selected = true;
          this.setState({correct : this.state.correct + 1}, function(){
            console.log(this.state.correct);
            if(this.state.correct === this.state.cards.length)
            {
              alert("You've won!")
              this.restart();
            }
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.restart();
        }
      }
    });
  }
  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <Wrapper>
        <Header correct={this.state.correct} total={this.state.cards.length} >Guess the Babez game</Header>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={require("./babez-pics" + card.image)}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
