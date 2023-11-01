import styled from 'styled-components';
import React, { Component }  from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Scheme from "../style";


const cardback_src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Waite%E2%80%93Smith_Tarot_Roses_and_Lilies_cropped.jpg/256px-Waite%E2%80%93Smith_Tarot_Roses_and_Lilies_cropped.jpg";
const cardback_alt = "The original roses and lilies card back design from 1909";



const CardContainerStyle = styled.div`
  display: inline-block;
  max-width: 256px;
  min-width: 256px;
  min-height: 666px;
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  background: ${Scheme.colors.lightyellow.hex};

  clip-path: polygon(
    0 10%,
    10% 0,
    90% 0,
    100% 10%,
    100% 90%,
    90% 100%,
    10% 100%,
    0% 90%,
    0% 10%
  );

  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 2s; /* Firefox < 16 */
     -ms-animation: fadein 2s; /* Internet Explorer */
      -o-animation: fadein 2s; /* Opera < 12.1 */
         animation: fadein 2s;

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`;

const CardTypeStyle = styled.h1`
  position: relative;
  font-size: 1rem;
  color: ${Scheme.colors.purple.hex};
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  text-align: center;
  z-index: 15;
`;

const CardNameStyle = styled.h1`
  position: relative;
  font-size: 1rem;
  color: ${Scheme.colors.purple.hex};
  margin-top: 1rem;
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

const CardStyle = styled.div`
  position: relative;
  margin: auto;
  width: 128px; 
  height: 223px; 

  cursor: pointer;

  img {
    filter: drop-shadow(10px 5px 4px ${Scheme.colors.purple.hex});
    border-radius: 5%;
    border: 5px solid #1d1d1d;
    transform-style: preserve-3d;
    transform-origin: center right;
    transition: transform 1s;
    transform: translateX(0%) rotateY(0deg);
  }

  .back {
    transform: translateX(-100%) rotateY(180deg);
  }
`;

const CardImageStyle = styled.img`  
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  backface-visibility: hidden;
`;

class SingleSpreadCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      card: props.card.card,
      flipped: props.card.flipped,
      type:  props.type,
      card_type: props.card.card.type,
      name: props.card.card.name,
      description: props.card.card.description,
      image_src: props.card.card.cardImages[0].url.mid,
      image_alt: props.card.card.cardImages[0].alt,
    };
    this.render = this.render.bind(this);
    this.onClickFlip = this.onClickFlip.bind(this);
    
  };

  onClickFlip() {
    this.setState({
      flipped:true,
    });
  }

  render() {
    const { flipped, type, name, description, image_src, image_alt } = this.state;
      return (        
        <CardContainerStyle>
          <CardTypeStyle>{type}</CardTypeStyle>
          <CardStyle className="card" onClick={this.onClickFlip}>
            <CardImageStyle className={this.state.flipped ? 'cardface back': 'cardface front'}  src={cardback_src} alt={cardback_alt}  />
            <CardImageStyle className={this.state.flipped ? 'cardface front': 'cardface back'}  src={image_src} alt={image_alt} />
          </CardStyle>
          <CardNameStyle> {this.state.flipped ? name : ""} </CardNameStyle>
          <CardDescriptionStyle> {this.state.flipped ? description : ""} </CardDescriptionStyle>
        </CardContainerStyle>

      );
  };
}

SingleSpreadCard.propTypes = {
  card: {
    card: 
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        cardImages: PropTypes.arrayOf(
          PropTypes.shape({
            url: PropTypes.shape({
              full: PropTypes.string,
              mid: PropTypes.string,
              small: PropTypes.string,
            }),
            alt: PropTypes.string,
          })
        ),
        type: PropTypes.string,
      }),
    flipped: PropTypes.bool, 
  },
  type: PropTypes.string,
}

SingleSpreadCard.defaultProps = {
  card: {
    card: {
      id: ``,
      name: ``,
      description: ``,
      cardImages: [
        {
          url: {
            full: ``,
            mid: ``,
            small: ``,
          },
          alt: ``,
        }
      ],
      type: ``,
    },
    flipped: false,
  },
  type: ``,
}

export default SingleSpreadCard
