import React, { Component, Fragment } from 'react';

class App extends Component {
  state = {
    testArray: ["hello", "good afternoon", "good evening", "goodbye", "good day"],
    petArray: ["cat", "dog", "fish", "guinea pig", "rabbit", "parakeet"],
    yetAnotherArray: [1,2,3,4,5,6,7,8,9]
  }

  handleListChange = e => {
    const changeState = e.target.getAttribute("data-state");
    const updatedList = [...this.state[changeState]];
    updatedList[e.target.id] = e.target.value;
    this.setState({ [changeState]: updatedList });
  }

  handleListAppend = e => {
    e.preventDefault();
    const changeState = e.target.getAttribute("data-state");
    this.setState({ [changeState]: [...this.state[changeState], ""] });
  }

  handleListDelete = e => {
    e.preventDefault();
    const changeState = e.target.getAttribute("data-state");
    this.setState({ [changeState]: this.state[changeState].slice(0, e.target.id).concat(this.state[changeState].slice(parseInt(e.target.id)+1)) });
  }

  renderList = list => {
    return (
      <Fragment>
        <button
          data-state={list}
          style={{"width":"50%"}}
          onClick={this.handleListAppend}
        >Add</button>
        {
          this.state[list].map((greeting, idx) => {
            return (
              <div key={idx}>
                <input
                  style={{ "width": "50%" }}
                  data-state={list}
                  id={idx}
                  value={this.state[list][idx]}
                  onChange={this.handleListChange}
                />
                <button
                  style={{ "width": "20px" }}
                  data-state={list}
                  id={idx}
                  onClick={this.handleListDelete}
                >X</button>
              </div>
            )
          })
        }
      </Fragment>
    )
  }

  render() {
    return (
      <form style={{ "display": "flex", "flexDirection": "column" }} onSubmit={this.handleSubmit}>
        {this.renderList("testArray")}
        {this.renderList("petArray")}
        {this.renderList("yetAnotherArray")}
      </form>
    );
  }
}

export default App;
