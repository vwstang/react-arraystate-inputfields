import React, { Component } from 'react';

class App extends Component {
  state = {
    testArray: ["hello","good afternoon", "good evening", "goodbye", "good day"]
  }

  handleChange = e => {
    const testArray = [...this.state.testArray];
    testArray[e.target.id] = e.target.value;
    this.setState({ testArray })
  }

  handleAdd = e => {
    e.preventDefault();
    this.setState({ testArray: [...this.state.testArray, ""] });
  }

  handleDel = e => {
    e.preventDefault();
    this.setState({ testArray: this.state.testArray.slice(0, e.target.id).concat(this.state.testArray.slice(parseInt(e.target.id)+1)) });
  }

  render() {
    return (
      <form style={{ "display": "flex", "flexDirection": "column" }}>
        <button
          style={{"width":"50%"}}
          onClick={this.handleAdd}
        >Add</button>
        {
          this.state.testArray.map((greeting, idx) => {
            return (
              <div key={idx}>
                <input
                  style={{"width":"50%"}}
                  id={idx}
                  value={this.state.testArray[idx]}
                  onChange={this.handleChange}
                />
                <button
                  style={{ "width": "20px" }}
                  id={idx}
                  onClick={this.handleDel}
                >X</button>
              </div>
            )
          })
        }
      </form>
    );
  }
}

export default App;
