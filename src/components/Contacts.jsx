/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class Contacts extends Component {
  render() {
    return (
      <>
        {this.props.contacts.map((contact, index) => {
          return (
            <Card key={index} style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Contact Detail</Card.Title>
                
                <Card.Text>name: {contact.name}</Card.Text>
                <Card.Text>phone: {contact.phone}</Card.Text>
                <Card.Text>location: {contact.location}</Card.Text>
                <Card.Link href="#">Edit</Card.Link>
                <Card.Link href="#">Delete</Card.Link>
              </Card.Body>
            </Card>
          );
        })}
      </>
    );
  }
}







