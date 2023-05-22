/* eslint-disable react/prop-types */
import {Component} from 'react'
import {Button, Form} from 'react-bootstrap';




class AddContactsForm extends Component {
  constructor(props){
    super(props)
    this.state={
      name:"",
      phone:"",
      location:""
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
            gen:""  
        }
    )
}
    
  handleSubmit=(e)=>{
e.preventDefault()
this.props.contactDetails(this.state)
this.handleReset()
e.target.reset()

  }


render(){
  return (
    <Form onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter full name" onChange={this.handleChange} />
        <Form.Text className="text-muted">
          example: john doe.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" name="phone" placeholder="phone number" onChange={this.handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLocation">
      <Form.Label>Location</Form.Label>
        <Form.Control type="text" name="location" placeholder="location" onChange={this.handleChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
}
 


export default AddContactsForm;