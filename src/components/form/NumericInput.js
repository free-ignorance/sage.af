import styled from 'styled-components';
import React, { Component }  from 'react';

import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md"

const Wrap = styled.div`
	display: inline-grid;
	grid-template-columns: 1fr min-content;
	grid-template-areas: "input increment" "input decrement";
	overflow: hidden;
	button span {
		display: none;
	}
	button {
		background: none;
  border: none;

  display: grid;
 	 place-items: center;
	}
`;

const Increment = styled.button`
 	grid-area: increment;
  border-bottom: 1px black solid;
`;

const Decrement = styled.button`
	grid-area: decrement;
`;

const NumberInput = styled.input`
	grid-area: input;
	background: none;
	border: none;
	align-self: stretch;
	width: 6ch;
	border-style: solid;
	border-width: 0 1px 0 0;
`;

export function NumericInput({
  onIncrement,
  onDecrement,
  className,
  disabled,
  ...props
}) {
  return (
    <Wrap>
      <NumberInput
        disabled={disabled}
        type="numeric"
        {...props}
      />
      <Increment
        disabled={disabled}
        aria-label="Increment"
        onClick={onIncrement}
      >
        <span>+</span>
        <MdArrowDropUp />
      </Increment>
      <Decrement
        disabled={disabled}
        aria-label="Decrement"
        onClick={onDecrement}
      >
        <span>-</span>
        <MdArrowDropDown />
      </Decrement>
    </Wrap>
  )
}
