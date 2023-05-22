/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import EditContactsForm from "./EditContactsForm";

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedContact:null
    };
  }

  handleOpen = (contact) => {
    this.setState({ selectedContact: contact, show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleDelete = (id) => {
    this.props.deleteContact(id);
  };

  render() {
    return (
      <>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Contacts</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditContactsForm
              contact={this.state.selectedContact}
              editSelectedContact={this.props.editContact}
              closeModal= {this.state.show}
            />
          </Modal.Body>
        </Modal>

        {this.props.contacts.map((contact, id) => {
          return (
            <Card key={id} style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Contact Detail</Card.Title>
                <hr />
                <Card.Text>name: {contact.name}</Card.Text>
                <Card.Text>phone: {contact.phone}</Card.Text>
                <Card.Text>location: {contact.location}</Card.Text>
                <Card.Link href="#">
                  <Button
                    onClick={() => this.handleOpen(contact)}
                    variant="primary"
                  >
                    Edit
                  </Button>
                </Card.Link>
                <Card.Link href="#">
                  <Button
                    onClick={() => this.handleDelete(contact.id)}
                    variant="danger"
                    size="sm"
                  >
                    {" "}
                    Delete
                  </Button>
                </Card.Link>
              </Card.Body>
            </Card>
          );
        })}
      </>
    );
  }
}
