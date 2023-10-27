

import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Scheme from "../../style";


const CloudContainer = styled.div`
  transform: scale(2,2);
  position: relative;
  margin-top: 7rem;

  width: 54px;
  height: 5px;

  background: ${Scheme.colors.blue.hex};
  border-radius: 10px;
  z-index: 10;

  div {
    box-shadow: inset -2px -3px 0 0 ${Scheme.colors.blue.hex};

    position: absolute;

    border-radius: 50%;
    width: 12px;
    height: 12px;
    
    left: -3px;
    bottom: 0;

    background: ${Scheme.colors.blue.hex};
    z-index: 10;
    
    &:first-child {
      & + div {
        webkit-transform: scale(1.6, 1.6);
        transform: scale(1.6, 1.6);
        margin: 0 0 4px 13px;
        z-index: 9;
        
        & + div {
          webkit-transform: scale(2.4, 2.4);
          transform: scale(2.4, 2.4);
          margin: 0 0 9px 32px;
          z-index: 8;
        
          & + div {
            -webkit-transform: scale(1.3, 1.3);
            transform: scale(1.3, 1.3);
            margin: 0 0 2px 50px;
            z-index: 7;
          }
        }
      }
    }
  }
`;
const CloudContainer2 = styled.div`
  -webkit-transform: scale(-2,2);
  transform: scale(-2,2);

  position: relative;
  margin-top: -5px;
  margin-left: 76px;

  width: 54px;
  height: 5px;

  background: ${Scheme.colors.red.hex};
  border-radius: 10px;
  z-index: 7;
    

  div {
    position: absolute;
    box-shadow: inset -2px -3px 0 0 ${Scheme.colors.red.hex};
    border-radius: 50%;
    width: 12px;
    height: 12px;
    
    left: -3px;
    bottom: 0;

    background: ${Scheme.colors.red.hex};
    z-index: 6;
    
    &:first-child {
      & + div {
        transform: scale(1.6, 1.6);
        margin: 0 0 4px 13px;
        z-index: 5;
        
        & + div {
          transform: scale(2.4, 2.4);
          margin: 0 0 9px 32px;
          z-index: 4;
        
          & + div {
            transform: scale(1.3, 1.3);
            margin: 0 0 2px 50px;
            z-index: 3;
          }
        }
      }
    }
  }
`;



const Cloud = () => (
  <div>
    <CloudContainer>
      <div></div><div></div><div></div><div></div>
    </CloudContainer>
    <CloudContainer2>
      <div></div><div></div><div></div><div></div>
    </CloudContainer2>
  </div>
);

export default Cloud;
