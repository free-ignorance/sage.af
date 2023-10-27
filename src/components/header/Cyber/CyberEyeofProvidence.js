import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Scheme from "../../style";
import CyberLogo from "./logo/CyberLogo";


const BotTriangle = styled.div`
  left: 33.7vw;
  position: relative;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 300px 256px 300px;
  border-color: transparent transparent ${Scheme.colors.yellow.hex} transparent;
`;

const TopTriangle = styled.div`
  position: relative;
  left: -295px;
  top: 3.5px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 295px 250.5px 295px;
  border-color: transparent transparent ${Scheme.colors.background.hex} transparent;
`;

const Eye = styled.div`
  position: relative;
  top: 15px;
  left: -1.75vw;
  width: 1.5vw;
  height: 1.5vw;
  background-image: radial-gradient(circle, ${Scheme.colors.background.hex} 8%, ${Scheme.colors.yellow.hex} 18%, ${Scheme.colors.background.hex} 8%, ${Scheme.colors.yellow.hex} 35%, ${Scheme.colors.background.hex} 35%);
  border-radius: 0 55%;
  border: 2.5px solid ${Scheme.colors.yellow.hex};
  transform: rotate(-45deg);
  transform-origin: 100% 0;
  filter:blur(0.5px);
`;


const CyberEyeofProvidence = () => (
  <BotTriangle>
    <TopTriangle>
      <Eye />
      <CyberLogo />
    </TopTriangle>
  </BotTriangle>
);

export default CyberEyeofProvidence;