import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PersonList from './components/PersonList';

describe('App', () => {
  it('renders the App component', () => {
    const appWrapper = shallow(<App />);
  });  

  it('should render Person List Component', () => {
    const appWrapper = shallow(<App />);
    appWrapper.find(PersonList);
  });

  it('should have only one person list component', () => {
    const appWrapper = shallow(<App />);
    const personList = appWrapper.find(PersonList);

    expect(personList).toHaveLength(1);
  });

  it('should have a state', () => {
    const appWrapper = shallow(<App />);
    const appState = appWrapper.state();
  });

  it('should have not null state', () => {
    const appWrapper = shallow(<App />);
    const appState = appWrapper.state();

    expect(appState).not.toBeNull();
  });
});