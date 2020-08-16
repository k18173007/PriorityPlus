import React, { Component } from 'react'
import { PatientDetailComponent } from './PatientDetailComponent'

class TableComponent extends Component {

    render() {

        const items = this.props.items;

        return (
            <table id="table" className="table bg-light" >
                <thead style={{ background: "#F59494" }}>
                    <tr>
                        <th scope="col">Sr No.</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Patient Age</th>
                        <th scope="col">Case</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Priority level</th>
                    </tr>
                </thead>
                <tbody>
                {
                    PatientDetailComponent.map((det) => {
                        return (
                                <tr>
                                    <th scope="row">*</th>
                                    <td>{det.name}</td>
                                    <td>{det.Age}</td>
                                    <td>{det.case}</td>
                                    <td>{det.contact}</td>
                                    <td>{det.priority}</td>
                                </tr>
                        )
                    })
                }
                {items.map(item => {
                    return (
                        <tr>
                            <th scope="row">*</th>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.cases}</td>
                            <td>{item.contact}</td>
                            <td>{item.priority}</td>
                        </tr>

                        )
                    })
                }
                    </tbody>

            </table>
        )
    }
}

export default TableComponent
