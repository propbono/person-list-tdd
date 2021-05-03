import React from "react";
import { shallow } from "enzyme";
import PersonList from "./PersonList";

describe("PersonList", () => {
  it("should render ul element for the list", () => {
    const personListWrapper = shallow(<PersonList />);
    const peopleUlList = personListWrapper.find("ul");

    expect(peopleUlList).toHaveLength(1);
  });

  it("renders no li elements when pass empty people list", () => {
    const people = [];
    const personListWrapper = shallow(<PersonList people={people} />);
    const peopleListItems = personListWrapper.find("li");

    expect(peopleListItems).toHaveLength(0);
  });

  it("renders one li element when pass one person", () => {
    const people = [{ firstName: "John", lastName: "Doe" }];
    const personListWrapper = shallow(<PersonList people={people} />);
    const peopleListItems = personListWrapper.find("li");

    expect(peopleListItems).toHaveLength(1);
  });

  it("renders li element per each person in the people props", () => {
    const people = [
      { firstName: "John", lastName: "Doe" },
      { firstName: "Greg", lastName: "Mozer" },
    ];
    const personListWrapper = shallow(<PersonList people={people} />);
    const peopleListItems = personListWrapper.find("li");

    expect(peopleListItems).toHaveLength(2);
  });
});
