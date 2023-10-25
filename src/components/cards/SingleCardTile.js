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
      // id: props.id,
      // name: props.name,
      image: props.image,
      // alt: props.alt,
    });
  };

  render() {
    const { image } = this.state;
    return (
      <SingleCardTileContainerStyle>
        <img src={image} />
      </SingleCardTileContainerStyle>
    );
  };
}

SingleCardTile.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  alt_text: PropTypes.string,
}

SingleCardTile.defaultProps = {
  id: ``,
  name: ``,
  image: ``,
  alt_text: ``,
}


export default SingleCardTile
