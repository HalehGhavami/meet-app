import React, { Component } from 'react';
// import { mockData } from './mock-data';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };

    this.toggleExpanded = this.toggleExpanded.bind(this);
  }
  toggleExpanded() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    let event = this.props.event;
    return (
      <div>
        <h2 className="event-title">{event.title}</h2>
        <div className="basic-info">
          <span>{event.startdate}</span>
          <span>{event.location}</span>
          {this.state.expanded === true && (
            <p className="event-details">{event.description}</p>
          )}
        </div>
        <button className="show-details" onClick={this.toggleExpanded}>
          {!this.state.expanded ? 'Show Details' : 'Hide Details'}
        </button>
      </div>
    );
  }
}

export default Event;
