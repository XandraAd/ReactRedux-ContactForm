/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Component } from 'react'
import Contacts from './components/Contacts'
import ContactForm from './components/ContactForm';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      contacts:[{
       name:"Sandra",
       phone:"0253456777",
       location:"central Park nw"
      },
    {
       name:"Sandra",
       phone:"0253456777",
       location:"central Park nw"
      }
    
    ]

     
  }
}

handleAddContact=(contactDetail)=>{
  this.setState({
    contacts:[...this.state.contacts,contactDetail]
  
  }
     
)
  
}

  render() {
    return (

<Container fluid>

      <Row className="justify-content-md-center">
        <Col md={4}><ContactForm contactDetails={this.handleAddContact}/></Col>
        <Col><Contacts contacts={this.state.contacts}/></Col>
      </Row>
      
    </Container>

    )
  }
}


