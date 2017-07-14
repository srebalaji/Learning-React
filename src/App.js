import React from 'react';

const App = () => "<h1>This is stateless</h1>"

class State extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: "This is default value",
      cat: 8
    }
  }

  update (e) {
    this.setState({txt: e.target.value})
  }

  render() {
    let txt = this.props.txt
    let cat = this.props.cat
    return (
      <div>
        <h1>Stateful</h1>
        <h3>{txt}</h3>
        <h4>Cat: {cat}</h4>
        <b>Bold Tag</b>
        <br /><br />
        Model: 
        <Child params={this.update.bind(this)} />
        <p>{this.state.txt}</p>
      </div>
    )
  }
}

const Child = (props) => <input type='text' onChange={props.params} />

State.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

State.defaultProps = {
  txt: "This is the default text",
  cat: 10
}

export default State
