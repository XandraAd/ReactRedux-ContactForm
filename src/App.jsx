/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col }from 'react-bootstrap';
import React, { Component } from 'react';
import Contacts from './components/Contacts';
import AddContactsForm from './components/AddContactsForm';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      contacts:[{
       name:"Sandra",
       phone:"0253456777",
       location:"central Park nw",
       id:"sds34355545454"
      },
    {
       name:"Sandra",
       phone:"0253456777",
       location:"central Park nw",
       id:"dfr6788755t6z6z6"
      }
    
    ]

     
  }
}

handleAddContact=(contactDetail)=>{
  this.setState({
    contacts:[...this.state.contacts,contactDetail]
  
  })
  };

  handleEditSelectedContact=(id, updatedContact) => {
    console.log(updatedContact)
    const modifiedContact= this.state.contacts.map((contact) => contact.id === id ? updatedContact : contact);
    this.setState({contacts:modifiedContact});
  };


 /* handleEditSelectedContact=(id, updatedContact) => {
    console.log(updatedContact)
    this.setState({contacts:this.state.contacts.map((contact) => contact.id === id ? updatedContact : contact)});
  };*/


  handleDelete = (id) => {
    const updatedContacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts: updatedContacts });
  };
  



  render() {
    return (

<Container fluid>

      <Row className="justify-content-md-center">
        <Col md={4}><AddContactsForm contactDetails={this.handleAddContact}/></Col>
        <Col>
        <Contacts 
        contacts={this.state.contacts} 
        deleteContact={this.handleDelete}
        editContact={this.handleEditSelectedContact}/>
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