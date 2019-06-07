import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import db from './sushis/db.json'
// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  // state = {
  //   sushis = [];
  //
  // }
  render() {

    let s1 = db.sushis[Math.floor(Math.random()*(db.sushis.length))];
    let s2 = db.sushis[Math.floor(Math.random()*(db.sushis.length))];
    let s3 = db.sushis[Math.floor(Math.random()*(db.sushis.length))];
    let s4 = db.sushis[Math.floor(Math.random()*(db.sushis.length))];
    let sushis = [s1, s2, s3, s4]
    // console.log(sushis)
    return (
      <div className="app">
       <SushiContainer sushis={sushis} />
        <Table />
      </div>
    );
  }
}

export default App;
