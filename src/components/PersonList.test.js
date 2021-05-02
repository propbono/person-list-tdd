import React from "react";
import { shallow } from "enzyme";
import PersonList from "./PersonList";

describe("PersonList", () => {
  it("should render ul element for the list", () => {
    const personListWrapper = shallow(<PersonList />);
    const peopleUlList = personListWrapper.find("ul");

    expect(peopleUlList).toHaveLength(1);
  });
});
