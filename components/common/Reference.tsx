import { blue, paleBlue } from "constants/colors";
import React from "react";
import styled from "styled-components";

interface Item {
  name: string;
  href: string;
}

interface Props {
  items: Item[];
}
const Reference: React.FC<Props> = ({ items }) => {
  return (
    <React.Fragment>
      <h3>Reference</h3>
      <ul>
        {items.map(({ href, name }) => (
          <li key={href}>
            <a href={href}>{name}</a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Reference;
