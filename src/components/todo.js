import React from 'react'

export default class Todo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({
      name: event.target.value
    })
  }

  render () {
    return (
      <div className="todoListMain">
        <div className="header">
          <form>
            <input placeholder="Enter Task" onChange={this.handleChange} />
            <button type="submit">Add</button>
          </form>
        </div>
        <h2>What are you typing?!</h2>
        <p>{this.state.name}</p>
      </div>
    )
  }
}
