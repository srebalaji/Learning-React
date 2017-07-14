import React from 'react';

const App = () => <h1>This is stateless</h1>

class State extends React.Component {
  render() {
    return (
      <div>
        <h1>Stateful</h1>
        <b>Bold Tag</b>
      </div>
    )
  }
}

export default State
