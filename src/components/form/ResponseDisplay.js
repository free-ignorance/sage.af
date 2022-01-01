import styled from 'styled-components';
import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const ResponseStyle = styled.div`

`;


class ResponseDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
			previousPage: this.props.previousPage,
			header: this.props.header,
			message: this.props.message,
			nextPage: this.props.nextPage,
			isSuccess: this.props.isSuccess,
    };
  }

render() {
    return (
			<ResponseStyle>
				<h2>{this.state.header}</h2>
				<p>{this.state.message}</p>
				{this.state.previousPage ? <Link to={this.state.previousPage}>Back</Link> : null}
				{this.state.nextPage ? <Link to={this.state.nextPage}>Next</Link> : null}
			</ResponseStyle>
    );
  }
}

ResponseDisplay.propTypes = {
  active: PropTypes.bool,
	previousPage: PropTypes.string,
	message: PropTypes.string,
	header: PropTypes.string,
	isSuccess: PropTypes.bool,
	errors: PropTypes.array,
}

ResponseDisplay.defaultProps = {
	active: false,
	previousPage: '',
	forwardPage: '',
	message: 'Thank you for your response. We will be in touch with you shortly.',
	header: 'Success!',
	isSuccess: true,
	errors: [],
}

export default ResponseDisplay