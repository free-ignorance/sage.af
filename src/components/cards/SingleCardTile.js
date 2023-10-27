import styled from 'styled-components';
import React, { Component }  from 'react';
import PropTypes from 'prop-types';

const SingleCardTileContainerStyle = styled.div`
position: relative;

span {
  position: absolute;
  right: 10px;
  top: 10px;
}

img {
  border-radius: 5%;
  object-fit: cover;
}
`;

class SingleCardTile extends Component {
  constructor(props) {
    super(props);
    this.setState({
      id: props.id,
      name: props.name,
      image: props.image,
      alt: props.alt,
    });
  };

  render() {
    const { name, image, alt } = this.state;
    return (
      <SingleCardTileContainerStyle>
        <span> {name} </span>
        <img src={image} alt={alt} />
      </SingleCardTileContainerStyle>
    );
  };
}

SingleCardTile.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
}

SingleCardTile.defaultProps = {
  id: ``,
  name: ``,
  image: ``,
  alt: ``,
}


export default SingleCardTile
