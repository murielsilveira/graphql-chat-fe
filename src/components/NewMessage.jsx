import React from 'react'

const style = {
  marginTop: '20px',
}

export default class NewMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    const text = this.state.text.trim()
    if (text) {
      this.props.onNewMessage(text)
      this.setState({ text: '' })
    }
  }

  render(){
    return (
      <div style={style}>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type='text'
            onChange={this.handleInputChange}
            value={this.state.text}
          />
        </form>
      </div>
    )
  }
}
