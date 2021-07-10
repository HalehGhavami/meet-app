import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });
  test('render Event Title', () => {
    expect(EventWrapper.find('.event-title')).toHaveLength(1);
  });

  test('render basic event information', () => {
    expect(EventWrapper.find('.basic-info')).toHaveLength(1);
  });

  test('have a show details button', () => {
    expect(EventWrapper.find('.show-details')).toHaveLength(1);
  });

  test('event details expand on click', () => {
    EventWrapper.setState({ expanded: false });
    EventWrapper.find('.show-details').simulate('click');
    expect(EventWrapper.state('expanded')).toBe(true);
  });
});
