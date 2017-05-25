import React, { Component } from 'react'
import logo from './logo.svg'
import Messages from './components/Messages'
import NewMessage from './components/NewMessage'
import { currentUser, stubMessages, newId } from './data/fakeData'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: stubMessages,
      user: currentUser
    }
  }

  handleNewMessage = (message) => {
    this.setState({
      messages: this.state.messages.concat({
        id: newId(),
        text: message,
        user: currentUser
      })
    })
  }

  componentDidUpdate() {
    this.messagesDiv.scrollTop = this.messagesDiv.scrollHeight
  }

  render() {
    const { messages } = this.state

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Chat with someone</h2>
        </div>
        <Messages messages={messages} divRef={messagesDiv => { this.messagesDiv = messagesDiv }}/>
        <NewMessage onNewMessage={this.handleNewMessage}/>
      </div>
    )
  }
}
