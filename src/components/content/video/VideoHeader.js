
import styled from 'styled-components';
import React, { Component }  from 'react';
import PropTypes from 'prop-types';

const StyledHeader = styled.header`
  position: absolute;
  text-align: center;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const VideoStyle = styled.video`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  top: 0;
  left: 0;
  z-index: -1;
  margin-top: -1rem;
`;

const ViewPortHeader = styled.div`
  height: 100%;
  width: 100%;
  position:absolute;
  top:8%;
  z-index:1;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  opacity: 1;

  h1 h2 {
    align-self: center;
    text-align: center;
    font-family: "Amatic SC";
    font-weight: 700;
    text-shadow: 0 0 2px rgba(0,0,0,0.5);
    color: white;
    text-transform: uppercase;
  }

  h1 {
    letter-spacing: 3rem;
    line-height: 1.2;
    font-size: 3vw;
    padding-left: 4rem;
    color: white;
  }

  h2 {
    line-height: 1.2;
    font-size: 10vw;
    color: white;
  }
`;
/**
   html, body {
    height: 100vh;
    overflow-x: hidden;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 150%;
    line-height: 1.4;
  }

  body {
    margin: 0;
  }




                <iframe
          src={this.props.src}
          title="lmao"
          allow="autoplay"
          frameBorder="0"
          height="110%"
          width="100%"
          allowfullscreen
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          oallowfullscreen
          msallowfullscreen
          allowtransparency="true"
          loop="true"
          controls="false"
        />
**/


class VideoHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: null,
      isLoaded: false,
      items: []
    };
	}

  handleOnLoadStart = (event) => {
    console.log("I am starting to load...");
    this.setState({isLoading: true});
  }

  handleOnLoadEnd = (event) => {
    console.log("I am done loading...");
    this.setState({isLoading: false});
    this.setState({isLoading: true});
  }

  handleOnPlaying = (event) => {
    event.play();
  }

  render() {
    return (
      <StyledHeader>
        <VideoStyle
          loop
          muted
          autoPlay
          playsinline
          preload={'auto'}
          type={'video/mp4'}
          onLoadStart={this.handleOnLoadStart}
          onLoadEnd={this.handleOnLoadEnd}
          >
          <source
            src={this.props.src}
            type="video/mp4"
          />
        </VideoStyle>
        <ViewPortHeader>
          <h2>{this.props.subTitle}</h2>
          <h1>{this.props.title}</h1>
        </ViewPortHeader>
      </StyledHeader>
    )
	}
}

VideoHeader.propTypes = {
  title: PropTypes.string,
	subTitle: PropTypes.string,
	src: PropTypes.string,
}

VideoHeader.defaultProps = {
  title: `Montana`,
	subTitle: `Explore`,
	src: `https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/Island%20-%204141.mp4`
}

export default VideoHeader