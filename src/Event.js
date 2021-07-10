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
        <h2 className="event-title">{event.summary}</h2>
        <div className="basic-info">
          <h2 className="event-location">{event.location}</h2>
          <h3 className="event-Date">
            start: {event.start.dateTime} - Time Zone: {event.start.timeZone}
          </h3>
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
