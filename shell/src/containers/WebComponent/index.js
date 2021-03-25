import React from 'react'

const WebComponent = ({component, ...props}) => { 

  const Component = `${component}`
  return (
    <Component color='blue' />
  )
}

export default WebComponent