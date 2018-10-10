import React from 'react'

class Tracker extends React.Component {
  state = { x: 0, y: 0}

  componentDidMount() {
    document.addEventListener('mousemove', this.move)
  }
  move = ({ clientX, clientY}) => {
    this.setState({ x: clientX, y: clientY})
  }

  render() {
    return(
      <div>
        { this.props.children(this.state) }
      </div>
    )
  }
}

export default Tracker