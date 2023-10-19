import styled from 'styled-components';
import React, { Component }  from 'react';
import PropTypes from 'prop-types';

const CardContainerStyle = styled.div`
img {

  border-radius: 5%;
  object-fit: cover;
}

h1, h2 {
  line-height: 0.5 rem;
  color: #ffc300;
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

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
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
          isLoaded: true,
          error
        });
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error
      });
      console.log(error);
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
        <img src={items.data.cardImages[0].url.mid} alt=""/>
        <p>{items.data.description}</p>

      </CardContainerStyle>);
    }
  }
}

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  desciption: PropTypes.string,
  image: PropTypes.string,
  alt_text: PropTypes.string,
}

Card.defaultProps = {
  id: `1`,
  name: ``,
  desciption: ``,
  image: ``,
  alt_text: ``,
}


export default Card
