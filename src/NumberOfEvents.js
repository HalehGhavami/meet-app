import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateEvents(null, value);
    this.setState({
      numberOfEvents: value,
    });
  };

  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className="numberOfEvents">
        <label>Number of Events: </label>
        <input
          className="event-number-input"
          type="number"
          id="numberOfEvents__input"
          value={numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
