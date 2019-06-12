import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
// Endpoint!


class App extends Component {
  constructor(){
    super()
    this.state = {
      // sushis: [],
      // randomSushis: [],
      plates: [],
      wallet: 100
    }
  }
  // state = {
  //   sushis : [];
  // }

 eatSushi = (sushiId,price) => {
   console.log('eat callback')
   // let newRandomSushis = this.state.randomSushis.map(sushi=>{
   //  return   sushi.id === sushiId? {...sushi, eaten:true} : sushi
   // })
   this.setState({
     // randomSushis: newRandomSushis,
     plates: [...this.state.plates, { }],
     wallet: this.state.wallet - price
   })
 }

  render() {
    console.log(this.state)
    return (
      <div className="app">
       <SushiContainer
       // sushis={this.state.randomSushis}
       // getSushis={this.getSushis}
       eatSushi = {this.eatSushi}
       wallet={this.state.wallet}
        />
        <Table plates={this.state.plates} wallet={this.state.wallet} />
      </div>
    );
  }
}

export default App;
