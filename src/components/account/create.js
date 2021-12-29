
import styled from 'styled-components';
import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import TextInputField from '../form/TextInputField';


const FormStyle = styled.form`

`;

const SelectContainer = styled.div`

`;

const InputContainer = styled.div`
	font-size: 1rem;
	line-height: 1.428rem;
	letter-spacing: 0.2px;
	font-weight: lighter;
	color: rgb(51, 51, 51);
	display: flex;
	width: 100%;
	height: 100%;
	position: relative;
	box-sizing: inherit;
`;

const SelectInputWrapper = styled.div`
	font-size: 1rem;
	line-height: 1.428rem;
	letter-spacing: 0.2px;
	font-weight: lighter;
	color: rgb(51, 51, 51);
	display: flex;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
`;

const SelectStyle = styled.select`
	display: flex;
	height: 44px;
	width: 100%;
	margin: 1rem;
	margin-top: 25px;
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
`;

const ButtonContainer = styled.div`
	align-items: center;
	margin-top: 2rem;
`;

class Create extends Component {
  constructor(props) {

    super(props);
    this.state = {
      firstName: props.firstName,
      lastName: props.lastName,
      addressOne: props.addressOne,
      addressTwo: props.addressTwo,
      addressState: props.addressState,
      addressZip: props.addressZip,
      addressCountry: props.addressCountry,
      error: null,
      isLoaded: false,
      items: []
    };
		this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    const target = event.target;
    const {name, value}  = target;

    this.setState({
      [name]: value,
    })
  }

	handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await fetch(
				`https://veneer-prod.herokuapp.com/user/create`,
				{
					method: `POST`,
					body: {
						firstName: this.state.firstName,
						lastName: this.state.lastName,
						addressOne: this.state.addressOne,
						addressTwo: this.state.addressTwo,
						addressState: this.state.addressState,
						addressZip: this.state.addressZip,
						addressCountry: this.state.addressCountry,
					},
					headers: {
						"content-type": `application/json`,
					},
				})
			.then(res => res.json())
			.then(body => {
				console.log(`response from API:`, body)
			})
		} catch (e) {
			console.log(`response from API:${e}`)
		}

	}

  render() {
    return (
      <FormStyle onSubmit={this.handleSubmit}>
        <h2>What is your mailing address?</h2>
				<InputContainer>
					<TextInputField
						name="firstName"
						label="First Name"
						placeholder="First Name"
					/>
					</InputContainer>
					<InputContainer>
						<TextInputField
								name="lastName"
								label="Last Name"
								placeholder="Last Name"
							/>
					</InputContainer>
					<InputContainer>
						<TextInputField
							name="addressOne"
							label="Address One"
							placeholder="Address Line 1"
							/>
					</InputContainer>
					<InputContainer>
						<TextInputField
							name="addressTwo"
							label="Address Two"
							placeholder="Address Line 2"
							/>
					</InputContainer>
					<InputContainer>
						<SelectInputWrapper>
							<LabelStyle>State</LabelStyle>
							<SelectStyle
								type="text"
								name="addressState"
								value={this.state.addressState}
								onChange={this.handleInputChange}>
								<option value="AL">Alabama</option>
								<option value="AK">Alaska</option>
								<option value="AZ">Arizona</option>
								<option value="AR">Arkansas</option>
								<option value="CA">California</option>
								<option value="CO">Colorado</option>
								<option value="CT">Connecticut</option>
								<option value="DE">Delaware</option>
								<option value="DC">District Of Columbia</option>
								<option value="FL">Florida</option>
								<option value="GA">Georgia</option>
								<option value="HI">Hawaii</option>
								<option value="ID">Idaho</option>
								<option value="IL">Illinois</option>
								<option value="IN">Indiana</option>
								<option value="IA">Iowa</option>
								<option value="KS">Kansas</option>
								<option value="KY">Kentucky</option>
								<option value="LA">Louisiana</option>
								<option value="ME">Maine</option>
								<option value="MD">Maryland</option>
								<option value="MA">Massachusetts</option>
								<option value="MI">Michigan</option>
								<option value="MN">Minnesota</option>
								<option value="MS">Mississippi</option>
								<option value="MO">Missouri</option>
								<option value="MT">Montana</option>
								<option value="NE">Nebraska</option>
								<option value="NV">Nevada</option>
								<option value="NH">New Hampshire</option>
								<option value="NJ">New Jersey</option>
								<option value="NM">New Mexico</option>
								<option value="NY">New York</option>
								<option value="NC">North Carolina</option>
								<option value="ND">North Dakota</option>
								<option value="OH">Ohio</option>
								<option value="OK">Oklahoma</option>
								<option value="OR">Oregon</option>
								<option value="PA">Pennsylvania</option>
								<option value="RI">Rhode Island</option>
								<option value="SC">South Carolina</option>
								<option value="SD">South Dakota</option>
								<option value="TN">Tennessee</option>
								<option value="TX">Texas</option>
								<option value="UT">Utah</option>
								<option value="VT">Vermont</option>
								<option value="VA">Virginia</option>
								<option value="WA">Washington</option>
								<option value="WV">West Virginia</option>
								<option value="WI">Wisconsin</option>
								<option value="WY">Wyoming</option>
							</SelectStyle>
						</SelectInputWrapper>
						<TextInputField
							type="text"
							label="Zip Code"
							name="addressZip"
							placeholder={this.state.addressZip}
						/>
					</InputContainer>
					<InputContainer>
						<TextInputField
							type="text"
							name="phone"
							label="Phone Number"
							placeholder="212-555-1234"
							pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
						/>
							<TextInputField
								type="text"
								name="email"
								label="Email"
								placeholder="Email"
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