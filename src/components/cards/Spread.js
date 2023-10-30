import styled from 'styled-components';
import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import Scheme from "../style";

const CardSpreadContainerStyle = styled.div`
  display: flex;
`;

const CardContainerStyle = styled.div`
  width: 30%;
  padding-top: 1rem;
  magin-left: 0.5rem;
  margin-right: 0.5rem;
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



const CardImageContainerStyle = styled.div`

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
          <CardContainerStyle> 
            <CardNameStyle>Past</CardNameStyle>
            <CardImageContainerStyle>
              <CardImageStyle src={this.state.past.cardImages[0].url.small} alt={this.state.past.cardImages[0].alt} />
            </CardImageContainerStyle>
            <CardNameStyle>{this.state.past.name}</CardNameStyle>
          </CardContainerStyle>
          <CardContainerStyle> 
            <CardNameStyle>Present</CardNameStyle>
            <CardImageContainerStyle>
              <CardImageStyle src={this.state.present.cardImages[0].url.small} alt={this.state.present.cardImages[0].alt} />
            </CardImageContainerStyle>
            <CardNameStyle>{this.state.present.name}</CardNameStyle>
          </CardContainerStyle>
          <CardContainerStyle>
            <CardNameStyle>Future</CardNameStyle>
            <CardImageContainerStyle>
              <CardImageStyle src={this.state.future.cardImages[0].url.small} alt={this.state.future.cardImages[0].alt} />
            </CardImageContainerStyle>
            <CardNameStyle>{this.state.future.name}</CardNameStyle>
          </CardContainerStyle>
        </CardSpreadContainerStyle>
      );
    }
  }
}



export default Spread
