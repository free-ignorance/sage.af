import styled from 'styled-components';
import React, { Component }  from 'react';
import { Link } from 'gatsby';

import PropTypes from 'prop-types';
import Scheme from "../style";
import SingleSpreadCard from "./SingleSpreadCard";

const CardSpreadContainerStyle = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 10%;
  margin-right: 10%;
`;


class Spread extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      past: {card:{}, flipped: false},
      present: {card:{}, flipped: false},
      future: {card:{}, flipped: false},
    };
  }

  componentDidMount() {
      try {
        fetch(`https://soothsaying-c436343ba6ff.herokuapp.com/cards/`)
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            this.setState({
              isLoaded: true,
              past: {card:result.data[0], flipped: false},
              present: {card:result.data[1], flipped: false},
              future: {card:result.data[2], flipped: false},
            });
          }, (error) => {
            this.setState({
              isLoaded: false,
              error
            });
          });
        } catch (error) {
          this.setState({
            isLoaded: false,
            error
          });
          console.log(error);
        }
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      // rendering the 3 cards from the spread
      return (
        <CardSpreadContainerStyle>
          <SingleSpreadCard card={this.state.past} type="Past" />
          <SingleSpreadCard card={this.state.present} type="Present" />
          <SingleSpreadCard card={this.state.future} type="Future" />
        </CardSpreadContainerStyle>
      );
    }
  }
}



export default Spread
