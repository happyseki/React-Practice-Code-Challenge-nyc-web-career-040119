import React, { Fragment } from 'react'

const Sushi = (props) => {
// console.log(props.img)
// console.log(props.id)
  return (

    <div className="sushi">
      <div className="plate"
           onClick={/* Give me a callback! */ null}>
        {
          /* Tell me if this sushi has been eaten! */
          true ?
            null
          :
            <img src={props.img} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi
