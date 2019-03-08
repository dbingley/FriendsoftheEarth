import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import '../index.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Clock from 'react-live-clock';


 class AddPostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      validated: false,
      owner: "" ,
      status: "",
      time: "",
    }

  }

  handleSubmit = (event) => {

    //console.log("CHECKS" + this.state.owner + this.state.time + this.state.status)
    const submitToFirebase = (formValues) => {
        // add the fields to firebase
        // redirect the user to the homepage
        console.log(formValues)
        window.db.collection("feed-data").doc().set(formValues);
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
          console.log("success")
          //actions.setSubmitting(false);
      }, 1000);
 //window.location.href = "./home";
//    this.props.history.push('')
alert("Your update will be posted!");

    }
    this.setState({ validated: true });


  }


  handleChange = (event) => {
    let newState = {
      [event.target.getAttribute('name')]: event.target.value
    }
    this.setState(newState)

  }

  componentDidMount = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

today = dd + '/' + mm + '/' + yyyy;


    this.setState({
      owner: this.props.firstName + ' ' + this.props.lastName,
      time: today,
    })

}


  render() {
    const { status, validated} = this.state;
    return (
      <div class="container center_div">

        <Form
        noValidate
        validated={validated}
        onSubmit={e => this.handleSubmit(e)}
      >
          <Form.Group  controlId="validationCustom01">
            <Form.Label>Status</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Status"
              name='status'
              value={status}
              onChange={this.handleChange}

            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

        <Button type="submit">Post</Button>
      </Form>
      </div>
    );
  }
}

export default AddPostForm
