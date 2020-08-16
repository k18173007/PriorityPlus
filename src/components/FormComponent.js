import React, { Component } from 'react'
import '../App.css';
import { Form, FormGroup, Input, Button, Label } from 'reactstrap'

class FormComponent extends Component {

    render() {
        return (
            <div id="form-container" className="container d-flex justify-content-center flex-column align-items-center"

            >
                <div className="text-center mt-3 mb-2">
                    <h3 style={{ fontWeight: "700" }}>Patient Details</h3>
                    <p style={{ fontWeight: "500" }}>Fill the details below</p>
                </div>
                <Form onSubmit={this.props.handleFormSubmit} className="container p-1">
                    <FormGroup className="col-12 row row">

                        <Label className="col-3">Name</Label>
                        <Input className="inp col-9" value={this.props.newName} name="name"
                            type='text' onChange={this.props.handleInputChange} />
                    </FormGroup>
                    <FormGroup className="col-12 row">
                        <Label className="col-3">Age</Label>

                        <Input className="inp col-9" value={this.props.newAge} type='number' name="age"
                            onChange={this.props.handleInputChange} />
                    </FormGroup>
                    <FormGroup className="col-12 row">
                        <Label className="col-3">Case</Label>

                        <Input className="inp col-9" value={this.props.newCases} onChange={this.props.handleInputChange} name="cases"
                            type='text' />
                    </FormGroup>
                    <FormGroup className="col-12 row">
                        <Label className="col-3">Priority</Label>

                        <Input className="inp col-9" value={this.props.newPriority} type='select' name="priority" onChange={this.props.handleInputChange}>
                            <option>-</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </Input>
                    </FormGroup>
                    <FormGroup className="col-12 row">
                        <Label className="col-3">Contact</Label>

                        <Input className="inp col-9" value={this.props.newContact} type='phone' name="contact" onChange={this.props.handleInputChange} />
                    </FormGroup>
                    <FormGroup className="col-12 text-center">
                        <Button className="col-12 btn text-dark" type="submit" value="Submit"><strong>Submit</strong></Button>
                        <p style={{ fontWeight: "500" }}>Getting problrm in submitting</p>
                    </FormGroup>
                    <FormGroup className="col-12 text-center">
                        <Button className="col-12 btn text-dark" href="#table"><strong>Tract Patienet</strong></Button>
                        <p style={{ fontWeight: "500" }}>Getting problrm in submitting</p>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default FormComponent
