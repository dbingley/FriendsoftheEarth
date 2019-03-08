import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import '../index.css';
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
      number:"",
      address:""

    }

  }




  handleSubmit = (event) => {
    const submitToFirebase = (formValues) => {
        // add the fields to firebase
        // redirect the user to the homepage
        console.log(formValues)
        window.db.collection("user-data").doc().set(formValues);
    }
    event.preventDefault();
  //  console.log(this.state)
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{

      setTimeout(() => {
          //alert(JSON.stringify(values, null, 2));
          submitToFirebase(this.state)
          //actions.setSubmitting(false);
      }, 1000);
      //window.location.href = "./home/";
      this.props.handleUpdateName(this.state.firstName, this.state.lastName)
      this.props.history.push('/home')
    }
    this.setState({ validated: true });
  }

  handleLocation = (event) => {
    event.preventDefault();

    const showLocation =(position)=> {
             var latitude = position.coords.latitude;
             var longitude = position.coords.longitude;
             var myApiKey = "AIzaSyCz5WskPXxkGVTIpsOBaD58CfpvNIwo7I4";

          fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&key=' + myApiKey)
        .then((response) => response.json())
        .then((responseJson) => {
          var obj = responseJson;
        //  console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson));
         console.log((obj.results[0].formatted_address));
         console.log(JSON.stringify(obj.results[0].formatted_address));
         this.setState({
           address: obj.results[0].formatted_address
         })
        //  this.state.address = JSON.stringify((obj.results[0].formatted_address));

            })
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
    this.setState(newState)
  }



  render() {
    console.log(this.props)
    const { validated, firstName, lastName, email, number, address } = this.state;
    return (
      <div class="container center_div">

      <Form
        noValidate
        validated={validated}
        onSubmit={e => this.handleSubmit(e)}
      >
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
          <Form.Group  controlId="validationCustom01">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Address" required
            name='address'
            value={address}
             onChange={this.handleChange}
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
