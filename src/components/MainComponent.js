import React, { Component } from 'react';
import FormComponent from './FormComponent';
import Header from './HeaderComponent';
import AmbulanceCompnent from './AmbulanceComponent';
import TableComponent from './TableComponent';

class MainComponent extends Component {

    constructor() {
        super();

        this.state = {
            name: " ",
            age: " ",
            cases: " ",
            priority: " ",
            contact: " ",
            items: []
        }
    };

    handleFormSubmit = (e) => {
        e.preventDefault();

        let items = [...this.state.items];

        items.push({
            name: this.state.name,
            age: this.state.age,
            cases: this.state.cases,
            priority: this.state.priority,
            contact: this.state.contact
        });

        this.setState({
            items,
            name: " ",
            age: " ",
            cases: " ",
            priority: " ",
            contact: " ",
        });
    };

    handleInputChange = (e) => {
        let input = e.target;
        let names = e.target.name;
        let value = input.value;

        this.setState({
            [names]: value
        })
    };

    render() {
        return (
            <div>
                <Header />
                <div className="container col-10 col-md-12 mt-4">
                    <div className="d-flex">
                        <AmbulanceCompnent />
                        <FormComponent handleFormSubmit={this.handleFormSubmit}
                            handleInputChange={this.handleInputChange}
                            newName={this.state.name}
                            newAge={this.state.age}
                            newCases={this.state.cases}
                            newPriority={this.state.priority}
                            newContact={this.state.contact} />
                    </div>
                </div>
                <div id="tab" className="container pb-4 mt-4">
                    <TableComponent items={this.state.items} />
                </div>
            </div>
        );
    }
}

export default MainComponent

