import React from "react";
import styled from "styled-components";

import brand from "../../../public/brand.png";

const Brand = () => {
  return <Image src={brand} alt="brand Logo" />;
};

export default Brand;

const Image = styled.img`
  height: 100%;
  margin: auto 0;
`;
