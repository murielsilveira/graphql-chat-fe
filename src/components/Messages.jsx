import React from 'react'
import Message from './Message'

const style = {
  maxHeight: '60vh',
  overflowY: 'scroll',
}

const Messages = (props) => (
  <div style={style} ref={props.divRef}>
    {props.messages.map(message => <Message message={message} key={message.id}/>)}
  </div>
)

export default Messages
