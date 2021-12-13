
import styled from 'styled-components';
import React, { Component }  from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p><label>
          First name <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
        </label></p>
        <p>
          <label>
            Last name <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </label>
        </p>
        <p>What is your mailing address?</p>
        <p>
          <label>
            Address Line 1 <input
              type="text"
              name="addressOne"
              value={this.state.addressOne}
              onChange={this.handleInputChange}
            />
          </label>
        </p>
        <p>
          <label>
            Address Line 2 <input
              type="text"
              name="addressTwo"
              value={this.state.addressTwo}
              onChange={this.handleInputChange}
            />
          </label>
        </p>
        <p>
          <label>
            State <select
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
            </select>
          </label>
          <label> Zip <input
              type="text"
              name="addressZip"
              value={this.state.addressZip}
              onChange={this.handleInputChange}
            /></label>
        </p>
        <p><button type="submit">Submit</button></p>
      </form>
    )
  }
}

Form.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  addressOne: PropTypes.string,
  addressTwo: PropTypes.string,
  addressState: PropTypes.string,
  addressZip: PropTypes.string,
  addressCountry: PropTypes.string,
}

Form.defaultProps = {
  firstName: `first`,
  lastName: `last`,
  addressOne: `159 West 73rd Street`,
  addressTwo: `Apartment 4R`,
  addressState: `NY`,
  addressZip: `10023`,
  addressCountry: `USA`,
}

export default Form