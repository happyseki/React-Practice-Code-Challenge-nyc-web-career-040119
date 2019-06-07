import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  // console.log(props.sushis[0])
  return (
    <Fragment>
      <div className="belt">
      {props.sushis.map(sushi=>{return <Sushi name={sushi.name} id={sushi.id} price={sushi.price} img={sushi.img_url}/>})}
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer
