import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Scheme from "../../../style";

// centered circle that will be the moon
// it will show the current moon phase in cycle
const LunarFrame = styled.div`
  width: 100%;
  text-align: center;
`;


const LunarContainer = styled.div`
  margin-top: 1rem;
  text-align: center;
  width: 128px;
  height: 128px;
  margin: auto;
  border-radius: 50%;
  box-shadow: inset 0 0 16px 0 ${Scheme.colors.yellow.hex};
`;

const NewMoon = styled.div`
  background: ${Scheme.colors.purple.hex};
  overflow: hidden;
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

const WaxingCrescent = styled.div`
  background: ${Scheme.colors.purple.hex};
  overflow: hidden;
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

const FirstQuarter = styled.div`
background: ${Scheme.colors.purple.hex};
overflow: hidden;
border-radius: 50%;
width: 100%;
height: 100%;
`;

const WaxingGibbous  = styled.div`
background: ${Scheme.colors.purple.hex};
overflow: hidden;
border-radius: 50%;
width: 100%;
height: 100%;
`;

const FullMoon = styled.div`
  background: ${Scheme.colors.yellow.hex};
  overflow: hidden;
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

const WaningGibbous  = styled.div`
  background: ${Scheme.colors.yellow.hex};
  overflow: hidden;
  border-radius: 50%;
  width: 128px;
  height: 128px;
  box-shadow: inset -16px 0 0 0 ${Scheme.colors.purple.hex};
`;

const LastQuarter = styled.div`
background: ${Scheme.colors.yellow.hex};
overflow: hidden;
border-radius: 50%;
width: 100%;
height: 100%;
`;

const WaningCrescent = styled.div`
  background: ${Scheme.colors.purple.hex};
  overflow: hidden;
  border-radius: 50%;
  width: 128px;
  height: 128px;
  box-shadow: inset 16px 0 0 0 ${Scheme.colors.yellow.hex};
`;



const Phases = {
  new: {
    name: "New Moon",
    range: [0, 0.02]
  },
  waxingCrescent: {
    name: "Waxing Crescent",
    range: [0.02, 0.23]
  },
  firstQuarter: {
    name: "First Quarter",
    range: [0.23, 0.27]
  },
  waxingGibbous: {
    name: "Waxing Gibbous",
    range: [0.27, 0.48]
  },
  full: {
    name: "Full Moon",
    range: [0.48, 0.52]
  },
  waningGibbous: {
    name: "Waning Gibbous",
    range: [0.52, 0.73]
  },
  lastQuarter: {
    name: "Last Quarter",
    range: [0.73, 0.77]
  },
  waningCrescent: {
    name: "Waning Crescent",
    range: [0.77, 1]
  }
};


const renderMoon = () => {
  return <WaningGibbous />;
};



const Moon = () => (
  <LunarContainer>
    <LunarFrame>
    {renderMoon()} 

    </LunarFrame>
  </LunarContainer>
);

export default Moon;
