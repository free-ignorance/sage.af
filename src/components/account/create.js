
import styled from "styled-components";
import React, { Component }  from "react";
import PropTypes from "prop-types";

import {TextInputField, ResponseDisplay} from "../form/";
const pkjson = require("../../../package.json");
const FormStyle = styled.form``;

const InputContainer = styled.div`
  position: relative;
  display: flex;
	width: 100%;
  height: 100%;
  font-size: 1rem;
  line-height: 1.428rem;
  letter-spacing: 0.2px;
  font-weight: lighter;
  color: rgb(51, 51, 51);
  box-sizing: inherit;
`;
const SelectInputWrapper = styled.div`
	width: 100%;
  height: 100%;
	margin-top: 1rem;
	margin-left: 1rem;
	margin-right: 1rem;
`;

const SelectStyle = styled.select`
  width: 100%;
	padding: 1.44rem;
  // A reset of styles, including removing +the default dropdown arrow
  appearance: none;
	background: none;
  // Additional resets for further consistency
  background-color: white;
	border: 1px solid #ccc;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
	font-size: 1rem;
	line-height: 1.428rem;
`;

const LabelStyle = styled.label`
  font-size: 0.857rem;
  line-height: 1rem;
  letter-spacing: 0.22px;
  font-weight: lighter;
  color: rgb(117, 117, 117);
  background-color: #FFFFFF;
  position: absolute;
  left: 10px;
  top: 20px;
  margin-left: 0.5rem;
  margin-top: -8px;
  padding: 0px 2px;
`;

/**
 *
 */

const SubmitButton = styled.button`
  background-color: #105652; /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  padding: 1rem;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  align-items: center;
  margin-top: 2rem;
`;

class Create extends Component {
  constructor(props) {
    super(props);


    this.state = {
      firstName: "",
      lastName: "",
      addressOne: "",
      addressTwo: props.addressTwo,
      addressState: props.addressState,
      addressZip: "",
      addressCountry: "",
      phone: "not set",
      email: "not set",
      reason: "",
      isLoaded: false,
			isError: false,
			isValid: false,
      items: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
		this.validateForm = this.validateForm.bind(this);
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  }

  handleInputFocus = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  };

  handleInputBlur = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  };

	validateForm = () => {
		const { firstName, lastName, addressOne, addressTwo, addressState, addressZip, addressCountry, phone, email } = this.state;
		if (firstName === "" || lastName === "" || addressOne === "" || addressState === "" || addressZip === "") {
			this.setState({
				isValid: false,
				items: "Please fill out all fields before submitting."
			});
			return false
		} else {
			this.setState({
				isValid: true,
			});
			return true
		}
	}

  handleSubmit = async (event) => {
    event.preventDefault();
		if(this.validateForm()) {
			const url = "https://veneer-prod.herokuapp.com/user/create";
			try {
				const user = {
						firstName: this.state.firstName,
						lastName: this.state.lastName,
						addressOne: this.state.addressOne,
						addressTwo: this.state.addressTwo,
						addressState: this.state.addressState,
						addressZip: this.state.addressZip,
						email: this.state.email,
						phone: this.state.phone,
            reason: this.state.reason,
						version: `v${pkjson.version}-WEB`,
						"form-name": "newUser",
					};
				const response = await fetch(url,
					{
						method: `POST`,
						// mode: "no-cors", // no-cors, *cors, same-origin
						cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
						headers: {
							"Content-Type": "application/json"
							// "Content-Type": "application/x-www-form-urlencoded",
						},
						redirect: "follow", // manual, *follow, error
						referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
						body: JSON.stringify(user)
					});

				this.setState({
					isLoaded: true,
					isError: false,
				});
			} catch (e) {
        console.log(`error: ${e}`);
				this.setState({
					isLoaded: false,
					isError: true,
					erorrs: e
				});
			}
		} else {

		}
  }

  render() {
		const { isLoaded, isError, items, isValid } = this.state;
		if (isLoaded) {
			return (
				<div>
					<ResponseDisplay
						isSuccess={true}
						message={`Thank you for your interest.  We will be in touch shortly.`}
						header={`Success!`}
						/>
				</div>
			)
		}
		if (isError) {
			return (
				<div>
					<ResponseDisplay
						isSuccess={false}
						message={`There was an issue trying to get you on the list...`}
						header={`Oops!`}
					 />
				</div>
			)
		}

    return (
      <FormStyle onSubmit={this.handleSubmit}>
        <h2>What is your mailing address?</h2>
				{!isValid ? <p>{items}</p> : null}
        <InputContainer>
          <TextInputField
            name="firstName"
            label="First Name"
            placeholder="First Name"
						required={true}
            onChange={this.handleInputChange}
						onBlur={this.handleInputBlur}
						onFocus={this.handleInputFocus}
          />
        </InputContainer>
        <InputContainer>
          <TextInputField
            name="lastName"
            label="Last Name"
            placeholder="Last Name"
						required={true}
            onChange={this.handleInputChange}
						onBlur={this.handleInputBlur}
						onFocus={this.handleInputFocus}
            />
        </InputContainer>
        <InputContainer>
          <TextInputField
            name="addressOne"
            label="Address One"
            placeholder="Address Line 1"
						required={true}
            onChange={this.handleInputChange}
						onBlur={this.handleInputBlur}
						onFocus={this.handleInputFocus}
            />
        </InputContainer>
        <InputContainer>
          <TextInputField
              name="addressTwo"
              label="Address Two"
              placeholder="Address Line 2"
              onChange={this.handleInputChange}
							onBlur={this.handleInputBlur}
							onFocus={this.handleInputFocus}
              />
          </InputContainer>
          <InputContainer>
            <TextInputField
              type="text"
              name="addressState"
              label="State/Province/Region"
              placeholder="New York"
              required={true}
              onChange={this.handleInputChange}
              onBlur={this.handleInputBlur}
              onFocus={this.handleInputFocus}
            />
            <TextInputField
              type="text"
              label="Zip Code"
              name="addressZip"
              placeholder="10023"
							required={true}
              onChange={this.handleInputChange}
							onBlur={this.handleInputBlur}
							onFocus={this.handleInputFocus}
            />
          </InputContainer>
          <InputContainer>
            <TextInputField
              type="text"
              name="phone"
              label="Phone Number"
              placeholder="212-555-1234"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              onChange={this.handleInputChange}
							onBlur={this.handleInputBlur}
							onFocus={this.handleInputFocus}
            />
            <TextInputField
              type="text"
              name="email"
              label="Email"
              placeholder="Email"
              onChange={this.handleInputChange}
							onBlur={this.handleInputBlur}
							onFocus={this.handleInputFocus}
            />
        </InputContainer>
        <InputContainer>
          <TextInputField
            name="reason"
            label="How did you hear about us?"
            placeholder="How did you hear about us?"
						required={false}
            onChange={this.handleInputChange}
						onBlur={this.handleInputBlur}
						onFocus={this.handleInputFocus}
          />
        </InputContainer>
        <ButtonContainer>
          <SubmitButton>Yes Send me a Gift</SubmitButton>
        </ButtonContainer>
      </FormStyle>
    );
  }
}

Create.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  addressOne: PropTypes.string,
  addressTwo: PropTypes.string,
  addressState: PropTypes.string,
  addressZip: PropTypes.string,
  addressCountry: PropTypes.string,
}

Create.defaultProps = {
  firstName: `first`,
  lastName: `last`,
  addressOne: `159 West 73rd Street`,
  addressTwo: `Apartment 4R`,
  addressState: `NY`,
  addressZip: `10023`,
  addressCountry: `USA`,
}

export default Create