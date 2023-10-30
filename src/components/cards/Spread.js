import styled from 'styled-components';
import React, { Component }  from 'react';
import { Link } from 'gatsby';

import PropTypes from 'prop-types';
import Scheme from "../style";

const CardSpreadContainerStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-left: 10%;
  margin-right: 10%;
`;

const CardContainerStyle = styled.div`
  display: inline-block;
  align-self: flex-end;
  max-width: 256px;
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background: ${Scheme.colors.background.hex};
  border: 2px solid ${Scheme.colors.purple.hex};
  filter: drop-shadow(10px 5px 4px ${Scheme.colors.purple.hex});
  border-radius: 5%;
`;

const CardNameStyle = styled.h1`
  position: relative;
  font-size: 1rem;
  color: ${Scheme.colors.purple.hex};
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  text-align: center;
  z-index: 15;
`;



const CardDescriptionStyle = styled.p`
  position: relative;
  font-size: 0.8rem;
  color: ${Scheme.colors.purple.hex};
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  text-align: justify;
  z-index: 15;
`;

const CardImageStyle = styled.img`  
  width: 128px; 
  height: 223px; 
  border-radius: 5%;
  object-fit: cover;
  border: 5px solid #1d1d1d;
`;

class Spread extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      past: {},
      present: {},
      future: {},
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
              past: result.data[0],
              present: result.data[1],
              future: result.data[2],
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
    const { error, isLoaded, cards } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      // rendering the 3 cards from the spread
      return (
        <CardSpreadContainerStyle>
          <Link to={`/tarot/cards/${this.state.past.id+1}`}>
            <CardContainerStyle> 
              <CardNameStyle>Past</CardNameStyle>
                <CardImageStyle src={this.state.past.cardImages[0].url.small} alt={this.state.past.cardImages[0].alt} />
              <CardNameStyle>{this.state.past.name}</CardNameStyle>
              <CardDescriptionStyle>{this.state.past.description}</CardDescriptionStyle>
            </CardContainerStyle>
          </Link>
          <Link to={`/tarot/cards/${this.state.present.id+1}`}>
            <CardContainerStyle> 
              <CardNameStyle>Present</CardNameStyle>
                <CardImageStyle src={this.state.present.cardImages[0].url.small} alt={this.state.present.cardImages[0].alt} />
              <CardNameStyle>{this.state.present.name}</CardNameStyle>
              <CardDescriptionStyle>{this.state.present.description}</CardDescriptionStyle>
            </CardContainerStyle>
          </Link>
          <Link to={`/tarot/cards/${this.state.future.id+1}`}>
            <CardContainerStyle>
              <CardNameStyle>Future</CardNameStyle>
                <CardImageStyle src={this.state.future.cardImages[0].url.small} alt={this.state.future.cardImages[0].alt} />
              <CardNameStyle>{this.state.future.name}</CardNameStyle>
              <CardDescriptionStyle>{this.state.future.description}</CardDescriptionStyle>
            </CardContainerStyle>
          </Link>
        </CardSpreadContainerStyle>
      );
    }
  }
}



export default Spread
