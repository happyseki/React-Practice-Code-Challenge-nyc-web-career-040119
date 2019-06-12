import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
const API = "http://localhost:3000/sushis"

class SushiContainer extends React.Component {
   state={
     sushis: [],
     randomSushis: [],
   }

   componentDidMount(){
     fetch(API)
     .then(res => res.json())
     .then(sushis => this.setState({
       sushis: sushis
      })
    )
 }

 getSushis = () =>{
   let sushis = this.state.sushis
   let randomSushis = []
   for(let i=4; i>0; i--){
     let sushi = sushis[Math.floor(Math.random() * sushis.length)]
     randomSushis.push({eaten: false, ...sushi})
   }
   this.setState({
     randomSushis: randomSushis,

   })
 }

 eatSushiNew = (id, price) =>{
   let newRandomSushis = this.state.randomSushis.map(sushi=>{
    return   sushi.id === id? {...sushi, eaten:true} : sushi
   })
   this.setState({
     randomSushis: newRandomSushis,

   })
   this.props.eatSushi(id, price)
 }
   renderSushis = () =>{
    return this.state.randomSushis.map(sushi => {

      return (
        <Sushi
        image={sushi.img_url}
        name={sushi.name}
        price={sushi.price}
        id={sushi.id}
        eaten={sushi.eaten}
        eatSushi={this.eatSushiNew}
        wallet={this.props.wallet}
        />
      )
    })
  }
  render(){
      return (
        <Fragment>
          <div className="belt">
          {this.renderSushis()}
            <MoreButton getSushis={this.getSushis} />
          </div>
        </Fragment>
      )
  }
}

export default SushiContainer
