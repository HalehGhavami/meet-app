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
          <h3 className="event-location">{event.location}</h3>
          <h4 className="event__Overview--localDate">
            start: {event.start.dateTime} - Time Zone: {event.start.timeZone}
          </h4>
        </div>
        {this.state.expanded && (
          <div className="event-details">
            <h3>About event:</h3>
            <p className="description">{event.description}</p>
            <a href={event.htmlLink} target="_blank" rel="noreferrer">
              <button className="google-btn">
                See Details on Google Calendar
              </button>
            </a>
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
