/* eslint-disable react/prop-types */
import {Component} from 'react'
import {Button, Form} from 'react-bootstrap';
import { v4 as uuid } from "uuid";
import { connect } from 'react-redux';
import { addContact } from '../slices/contactsSlice';





class AddContactsForm extends Component {
  constructor(props){
    super(props)
    this.state={
      name:"",
      phone:"",
      location:"",
      id:uuid()
    }

    this.handleChange=(e) => {
      e.preventDefault()
      this.setState({
        [e.target.name]:e.target.value,
      }
    )}
  }

  handleReset=()=>{
    this.setState(
        {
            name:"",
            email:"",
            phone:""  
        }
    )
}
    
  handleSubmit=(e)=>{
e.preventDefault()
let contactDetails = {
  name: this.state.name,
  phone: this.state.phone,
  location: this.state.location,
  id:uuid()
}
this.props.addContact(contactDetails)

console.log(this.props.contactDetails)
this.handleReset()
e.target.reset()

  }
  


render(){
  return (
    <Form onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name"value={this.state.name} placeholder="Enter full name" onChange={this.handleChange} />
        <Form.Text className="text-muted">
          example: john doe.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" name="phone" value={this.state.phone} placeholder="phone number" onChange={this.handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLocation">
      <Form.Label>Location</Form.Label>
        <Form.Control type="text" name="location"  value={this.state.location}placeholder="location" onChange={this.handleChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
}
 

const mapDispatch = {
  addContact :addContact
};


export default connect (null, mapDispatch) (AddContactsForm);