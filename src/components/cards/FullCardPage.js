import styled from 'styled-components';
import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import Scheme from "../style";

const CardContainerStyle = styled.div`
margin-top: -3rem;

p {
  color: ${Scheme.colors.purple.hex};
}

h1, h2 {
  line-height: 0.5 rem;
  color: ${Scheme.colors.purple.hex};
  font-size: 3rem;
  font-family: "Spectral", Consolas, Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, sans-serif;
  font-weight: 700;
  text-shadow: 0 0 1px rgba(100,100,100,0.5);
  margin-bottom: 0;
}

h3 {
  line-height: 0.5 rem;
  margin-top: 0;
}
`;

const CardImageStyle = styled.img`
  width: 266px; 
  height: 457px; 
  border-radius: 5%;
  object-fit: cover;
  filter: drop-shadow(10px 5px 4px ${Scheme.colors.purple.hex});
  border: 5px solid #1d1d1d;
`;

class FullCardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    if (this.state.id.length === 0) {
      this.setState({
        isLoaded: false,
      });
    } else {
      try {
        fetch(`https://soothsaying-c436343ba6ff.herokuapp.com/cards/${this.state.id}`)
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            this.setState({
              isLoaded: true,
              items: result
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
    
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
      <CardContainerStyle>
        <h2>{items.data.name}</h2>
        <h3>{items.data.type} arcana</h3>
        <CardImageStyle src={items.data.cardImages[0].url.mid} alt={items.data.cardImages[0].alt}/>
        <p>{items.data.description}</p>

      </CardContainerStyle>);
    }
  }
}

FullCardPage.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  desciption: PropTypes.string,
  image: PropTypes.string,
  alt_text: PropTypes.string,
}

FullCardPage.defaultProps = {
  id: ``,
  name: ``,
  desciption: ``,
  image: ``,
  alt_text: ``,
}


export default FullCardPage
