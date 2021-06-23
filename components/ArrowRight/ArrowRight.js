import React from "react";
import { Icon } from "@chakra-ui/react";

const ArrowRight = (props) => (
  <Icon {...props}>
    <path
      d="M19 12l-6-6m6 6l-6 6m6-6H5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default ArrowRight;
