import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { OfflineAlert } from './Alert';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    offline: false,
  };

  // offLineAlert = () => {
  //   if (navigator.onLine === false) {
  //     this.setState({
  //       offlineText:
  //         'You appear to be offline, this list is cached. Please connect to the internet for an updated list.',
  //     });
  //   } else {
  //     this.setState({
  //       offlineText: '',
  //     });
  //   }
  // };

  updateEvents = (location, eventCount) => {
    let locationEvents;
    getEvents().then((events) => {
      if (location === 'all' && eventCount === 0) {
        locationEvents = events;
      } else if (location !== 'all' && eventCount === 0) {
        locationEvents = events.filter((event) => event.location === location);
      } else if (location === '' && eventCount > 0) {
        locationEvents = events.slice(0, eventCount);
      } else if (location === '' && eventCount === '') {
        locationEvents = events;
      }
      this.setState({
        events: locationEvents,
        numberOfEvents: eventCount,
        offline: navigator.onLine ? false : true,
      });
    });
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events),
          offline: navigator.onLine ? false : true,
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
    window.removeEventListener('offline');
  }
  render() {
    return (
      <div className="App">
        {this.state.offline && (
          <OfflineAlert text="You are offline! The shown events have been loaded from the cache" />
        )}
        <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents}
        />
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          updateEvents={this.updateEvents}
        />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
