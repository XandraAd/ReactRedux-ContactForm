/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {editContact}from '../slices/contactsSlice'
import { v4 as uuid } from "uuid";

class EditContactsForm extends Component {
  constructor(props) {
    super(props);
    /*const { contact } = props;*/
    this.state = {
      name: this.props.contact.name,
      phone: this.props.contact.phone,
      location: this.props.contact.location,
      id: this.props.contact.id,
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

 /* handleReset = () => {
    this.setState({
      name: '',
      phone: '',
      location: '',
    });
  };*/

  handleSubmit = (e) => {
    e.preventDefault();
    const updatedContact = {
      name: this.state.name,
      phone: this.state.phone,
      location: this.state.location,
      id:this.state.id
    }
    this.props.editContact(updatedContact)
   
    
  
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter full name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">example: john doe.</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              placeholder="phone number"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              placeholder="location"
              value={this.state.location}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </div>
    );
  }
}


const mapDispatch= {
  editContact: editContact,
};

export default connect(null, mapDispatch)(EditContactsForm);

