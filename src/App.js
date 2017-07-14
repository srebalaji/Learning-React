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
        <br />
        <Button>I <Heart /> React</Button>
        <br />
        <Title text="Validation Text"/>
      </div>
    )
  }
}

const Child = (props) => <input type='text' onChange={props.params} />

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>
  }
}

const Title = (props) => <h4>{props.text}</h4>

Title.propTypes = {
  text(props, propName, component) {
    if (! (propName in props)) {
      return new Error(`missing ${propName}`)
    }
    if (props[propName].length < 5) {
      console.log(props[propName]);
      return new Error(`length is too short for ${propName}`)
    }
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
