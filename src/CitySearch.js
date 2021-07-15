import React, { Component } from 'react';
import { InfoAlert } from './Alert';
class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: false,
    infoText: '',
  };

  // takes the value from the input and updates the state of query based on that value
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestions: true });
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (value === '') {
      this.setState({
        suggestions: [],
        query: '',
        showSuggestions: false,
      });
    }
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText:
          'We can not find the city you are looking for. Please try another city',
        suggestions: [],
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: '',
      });
    }
  };
  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
      infoText: '',
    });

    this.props.updateEvents(suggestion, 0);
  };

  render() {
    return (
      <div className="CitySearch">
        <input
          type="text"
          className="city"
          value={this.state.query}
          placeholder="Enter Event Location"
          onChange={this.handleInputChanged}
          onFocus={() => {
            this.setState({ showSuggestions: true });
          }}
        />
        {this.state.suggestions.length >= 1 ? (
          <ul
            className="suggestions"
            style={this.state.showSuggestions ? {} : { display: 'none' }}
          >
            {this.state.suggestions.map((suggestion) => (
              <li
                key={suggestion}
                onClick={() => this.handleItemClicked(suggestion)}
              >
                {suggestion}
              </li>
            ))}
            <li key={'all'} onClick={() => this.handleItemClicked('all')}>
              <b className="seeAllCities">See all cities</b>
            </li>
          </ul>
        ) : (
          <InfoAlert text={this.state.infoText} />
        )}
      </div>
    );
  }
}

export default CitySearch;
