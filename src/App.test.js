import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import PersonList from "./components/PersonList";

describe("App", () => {
  let appWrapper;

  beforeAll(() => {
    appWrapper = shallow(<App />);
  });

  it("should render Person List Component", () => {
    appWrapper.find(PersonList);
  });

  it("should have only one person list component", () => {
    const personList = appWrapper.find(PersonList);

    expect(personList).toHaveLength(1);
  });

  it("should have not null state", () => {
    const appState = appWrapper.state();

    expect(appState).not.toBeNull();
  });

  it("should have people property on the state", () => {
    const appState = appWrapper.state();

    expect(appState.people).toBeDefined();
  });

  it("should pass people props to PersonList", () => {
    const personList = appWrapper.find(PersonList);

    expect(personList.props().people).toEqual(appWrapper.state().people);
  });
});
