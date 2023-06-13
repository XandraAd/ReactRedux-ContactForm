/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col }from 'react-bootstrap';
import React, { Component } from 'react';
import Contacts from './components/Contacts';
import AddContactsForm from './components/AddContactsForm';

export default class App extends Component {
render() {
    return (

<Container fluid>

      <Row className="justify-content-md-center">
        <Col md={4}>
          <AddContactsForm/>
          </Col>
        <Col md={8}>
        <Contacts/>
        </Col>
      </Row>
      
    </Container>

    )
  }
}






  /*handleContactUpdate(id, updatedContact) {
    this.setState(
      this.state.contacts.map((contact) => {
        if (contact.id === id) {
          return { ...updatedContact };
        } else {
          return contact;
        }
      })
    );
  }
*/


//handleAddContact=(contactDetail)=>{
 // this.setState({
 //   contacts:[...this.state.contacts,contactDetail] })};

  //handleEditSelectedContact=(id, updatedContact) => {
   // console.log(updatedContact)
    //const modifiedContact= this.state.contacts.map((contact) => contact.id === id ? updatedContact : contact);
   // this.setState({contacts:modifiedContact});};


 /* handleEditSelectedContact=(id, updatedContact) => {
    console.log(updatedContact)
    this.setState({contacts:this.state.contacts.map((contact) => contact.id === id ? updatedContact : contact)});
  };*/


  //handleDelete = (id) => {
   // const updatedContacts = this.state.contacts.filter((contact) => contact.id !== id);
   // this.setState({ contacts: updatedContacts }); };