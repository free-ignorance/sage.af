
import styled from 'styled-components';
import React, { Component }  from 'react';
import PropTypes from 'prop-types';

const TextInputWrapper = styled.div`
	display: block;
	height: 44px;
	width: 100%;
	margin: 1rem;
	background: rgb(255, 255, 255) none repeat scroll 0% 0%;
	margin-bottom: 25px;
`;

const InputStyle = styled.input`
	font-size: 1rem;
	line-height: 1.428rem;
	letter-spacing: 0.2px;
	font-weight: lighter;
	color: rgb(51, 51, 51);
	outline: currentcolor none medium;
	height: 100%;
	flex: 0 1 auto;
	padding: 0.75rem;
	width: 100%;
`;

class TextInputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
			isValid: true,
			isActive: false,
			placeholder: '',
			name: '',
			value: ''
    };
  }

  handleInputChange = (event) => {
		const target = event.target;
		const {name, value}  = target;

		this.setState({
			[name]: value,
		})
		if(value !== '') {
			this.setState({
				isValid: true,
				isActive: true,
			});
			target.style.border = '';
		}
  }

	handleInputFocus = (event) => {
		const target = event.target
		const value = target.value
		const name = target.name

		if (value === '') {
			this.setState({
				isValid: false,
				isActive: true,
			})
		}
		if(value !== '') {
			this.setState({
				isValid: true,
				isActive: true,
			});
		}
	};

	handleInputBlur = event => {
		const target = event.target
		const value = target.value
		const name = target.name

		if (value === '') {
			this.setState({
				isValid: false,
				isActive: false,
			})
			target.style.border = '1px solid red';
		}
		if(value !== '') {
			this.setState({
				isValid: true,
				isActive: false,
			})
			target.style.border = '';
		}
	};

  render() {
		const { name, placeholder, value, label,pattern, active, valid } = this.props;
		const { isValid, isActive } = this.state;

		const LabelStyle = styled.label`
			font-size: 0.857rem;
			line-height: 1rem;
			letter-spacing: 0.22px;
			font-weight: lighter;
			color: rgb(117, 117, 117);
			background-color: #FFFFFF;
			position: absolute;
			margin-left: 0.5rem;
			margin-top: -8px;
			padding: 0px 2px;
			display: ${isActive ? 'inline-block' : 'none'};
		`;
		const ErrorLabelStyle = styled.label`
			font-size: 0.857rem;
			line-height: 1rem;
			letter-spacing: 0.22px;
			font-weight: lighter;
			color: red;
			background-color: #FFFFFF;
			position: absolute;
			right: 22px;
			margin-top: -8px;
			bottom: -8px;
			padding: 0px 2px;
			display: ${isValid ? 'none' : 'inline-block'};
		`;
    return (

				<TextInputWrapper>
					<LabelStyle>{label}</LabelStyle>
					<InputStyle
							type="text"
							name={name}
							placeholder={placeholder}
							onChange={this.handleInputChange}
							onFocus={this.handleInputFocus}
							onBlur={this.handleInputBlur}
						/>
					<ErrorLabelStyle>[Required]</ErrorLabelStyle>
				</TextInputWrapper>

		);
	}
}

TextInputField.propTypes = {
	active: PropTypes.bool,
	valid: PropTypes.bool,
	placeholder: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	label: PropTypes.string,
	pattern: PropTypes.string,
}

TextInputField.defaultProps = {
	active: false,
	valid: true,
	placeholder: '',
	name: '',
	value: '',
	label: '',
	pattern: '',
}

export default TextInputField