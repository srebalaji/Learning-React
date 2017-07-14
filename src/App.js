import React from 'react';

const App = () => <h1>This is stateless</h1>

class State extends React.Component {
  render() {
    let txt = this.props.txt
    let cat = this.props.cat
    return (
      <div>
        <h1>Stateful</h1>
        <h3>{txt}</h3>
        <h4>Cat: {cat}</h4>
        <b>Bold Tag</b>
      </div>
    )
  }
}

State.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

State.defaultProps = {
  txt: "This is the default text",
  cat: 10
}

export default State
