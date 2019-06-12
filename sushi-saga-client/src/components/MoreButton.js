import React from 'react'

const MoreButton = (props) => {
// button onClick should trigger a function from parent
    return <button onClick={props.getSushis}>
            More sushi!
          </button>
}

export default MoreButton
