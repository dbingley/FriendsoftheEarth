import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import './index.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class EntryForm extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      validated: false,
      firstName: "",
      lastName: "",
      email: "",
      number:""

    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
  }

  handleLocation = (event) => {
    event.preventDefault();

    function showLocation(position) {
             var latitude = position.coords.latitude;
             var longitude = position.coords.longitude;
             alert("Latitude : " + latitude + " Longitude: " + longitude);
          }

          function errorHandler(err) {
             if(err.code == 1) {
                alert("Error: Access is denied!");
             } else if( err.code == 2) {
                alert("Error: Position is unavailable!");
             }
          }


             if(navigator.geolocation) {

                // timeout at 60000 milliseconds (60 seconds)
                var options = {timeout:60000};
                navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
             } else {
                alert("Sorry, browser does not support geolocation!");
             }

}

  handleChange = (event) => {
    let newState = {
      [event.target.getAttribute('name')]: event.target.value
    }
    console.log(newState)
    this.setState(newState)
  }



  render() {
    const { validated, firstName, lastName, email, number, address } = this.state;
    return (
      <div class="container center_div">

      <Form
        noValidate
        validated={validated}
        onSubmit={e => this.handleSubmit(e)}
      >
      <p>Name entered: {firstName} {lastName} {email} {number} {address}</p>
          <Form.Group  controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              name='firstName'
              value={firstName}
              onChange={this.handleChange}

            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group  controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              name='lastName'
              value={lastName}
              onChange={this.handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group  controlId="validationCustomEmail">
            <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                required
                name='email'
                value={email}
                onChange={this.handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please input a valid email.
              </Form.Control.Feedback>
          </Form.Group>

          <Form.Group  controlId="validationNumber">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="number" placeholder="Phone number" required
            name='number'
            value={number}
             onChange={this.handleChange} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid phone number.
            </Form.Control.Feedback>
          </Form.Group>
          <Button onClick={this.handleLocation} type="locate">Locate me</Button>
          <Form.Group  controlId="validationCustom03">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Address" required
            name='address'
            value={address}
             onChange={this.handleChange}
             disabled
             />
            <Form.Control.Feedback type="invalid">
              Please click locate button.
            </Form.Control.Feedback>
          </Form.Group>

        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
      </div>
    );
  }
}

export default EntryForm
