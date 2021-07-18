import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import { OfflineAlert } from './Alert';
// import WelcomeScreen from './WelcomeScreen';
import './App.css';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: 'all',
    numberOfEvents: 32,
    warningText: '',
    // tokenCheck: false,
    // showWelcomeScreen: undefined,
  };

  async componentDidMount() {
    this.mounted = true;
    // const accessToken = localStorage.getItem('access_token');
    // const validToken =
    //   accessToken !== null ? await checkToken(accessToken) : false;
    // this.setState({ tokenCheck: validToken });
    // if (validToken === true) this.updateEvents();
    // const searchParams = new URLSearchParams(window.location.search);
    // const code = searchParams.get('code');

    // this.mounted = true;
    // if (code && this.mounted === true && validToken === false) {
    //   this.setState({ tokenCheck: true });
    //   this.updateEvents();
    // }

    if (!navigator.onLine) {
      this.setState({
        warningText:
          'You are currently using the app offline and viewing data from your last visit. Data will not be up-to-date.',
      });
    } else {
      this.setState({ warningText: '' });
    }
    if (this.mounted) {
      this.updateEvents();
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  // Filters events based on location and number given in user input
  updateEvents = (location, eventCount) => {
    const { currentLocation, numberOfEvents } = this.state;

    // if (location) {
    //   // If user selects a location from input
    //   this.setState({
    //     warningText: 'Please wait, events are loading...',
    //   });

    // If user selects a location from input
    if (location) {
      getEvents().then((response) => {
        // Applies new filter for location
        const locationEvents =
          location === 'all'
            ? response.events
            : response.events.filter((event) => event.location === location);
        const events = locationEvents.slice(0, numberOfEvents);
        return this.setState({
          events: events,
          currentLocation: location,
          locations: response.locations,
          // warningText: '',
        });
      });
    } else {
      getEvents().then((response) => {
        // Persists location filter from state
        const locationEvents =
          currentLocation === 'all'
            ? response.events
            : response.events.filter(
                (event) => event.location === currentLocation
              );
        const numEvents = eventCount || numberOfEvents;
        const events = locationEvents.slice(0, numEvents);
        if (this.mounted) {
          return this.setState({
            events: events,
            numberOfEvents: eventCount,
            locations: response.locations,
            // warningText: '',
          });
        }
      });
    }
  };

  render() {
    // if (this.state.showWelcomeScreen === undefined)
    //   return <div className="App" />;
    const { numberOfEvents, events, locations, warningText } = this.state;
    // return tokenCheck === false ? (
    //   <div className="App">
    //     <WelcomeScreen
    //       getAccessToken={() => {
    //         getAccessToken();
    //       }}
    //     />
    //   </div>
    // ) : (

    return (
      <div className="App">
        <OfflineAlert text={warningText} />
        <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>
        <CitySearch
          locations={locations}
          updateEvents={this.updateEvents}
          // numberOfEvents={this.state.numberOfEvents}
        />
        <NumberOfEvents
          numberOfEvents={numberOfEvents}
          updateEvents={this.updateEvents}
        />

        <EventList events={events} />
        {/* <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        /> */}
      </div>
    );
  }
}

export default App;
