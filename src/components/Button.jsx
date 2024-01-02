import React from 'react'

function Button(props) {
  return (
    <div>
        <button class="btn rounded-none px-16">{props.label}</button>
        
    </div>
  )
}

export default Button