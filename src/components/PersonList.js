import React from "react";

export default (props) => (
  <ul>
    {props.people
      ? props.people.map((person, i) => <li key={i.toString()}></li>)
      : undefined}
  </ul>
);
