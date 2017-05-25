import React from 'react'

const style = {
  padding: '10px'
}

const Message = ({ message }) => (
  <div style={style}>
    {message.text} - {message.user.name}
  </div>
)

export default Message
