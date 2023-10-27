import styled from 'styled-components';
import React, { Component }  from 'react';
import PropTypes from 'prop-types';

import { SingleCardTile } from './SingleCardTile';



class CardCollectionTiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    try {
      fetch(`https://soothsaying-c436343ba6ff.herokuapp.com/cards/list?size=small`)
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

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div display="flex">
          {items.map((item) => {
            return (
              <SingleCardTile
                id={item.id}
                image={item.image}
                name={item.name}
                alt={item.alt}
              />
            );
          })}
        </div>
      );
    }
  }
}

CardCollectionTiles.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  desciption: PropTypes.string,
  image: PropTypes.string,
  alt_text: PropTypes.string,
}

CardCollectionTiles.defaultProps = {
  id: ``,
  name: ``,
  desciption: ``,
  image: ``,
  alt_text: ``,
}


export default CardCollectionTiles
