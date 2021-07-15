import React, { Component } from 'react';
// import { mockData } from './mock-data';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {},
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
    const { event } = this.props;
    return (
      <div className="event">
        <h2 className="event__Overview--name">{event.summary}</h2>
        <div className="basic-info">
          <h2 className="event-location">{event.location}</h2>
          <h3 className="event__Overview--localDate">
            start: {event.start.dateTime} - Time Zone: {event.start.timeZone}
          </h3>
        </div>
        {this.state.expanded && (
          <div className="event-details">
            <h2>About event:</h2>
            <a href={event.htmlLink} target="_blank" rel="noreferrer">
              <button className="google-btn">
                See Details on Google Calendar
              </button>
            </a>
            <p className="description">{event.description}</p>
          </div>
        )}

        <button className="details-btn" onClick={this.toggleExpanded}>
          {!this.state.expanded ? 'Show Details' : 'Hide Details'}
        </button>
      </div>
    );
  }
}

export default Event;
