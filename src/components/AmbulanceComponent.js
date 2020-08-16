import React from 'react'
import {Card,div,CardText,CardImg} from 'reactstrap';
const AmbulanceComponent = () => {
    return (
       
            <div id="ambulance" className="col-6 col-md-6 bg-transparent">
                <div className="amb-1 bg-transparent">
                    <div className="media-2" >
                        <img src="/assets/images/Ambulance.png"/>
                    </div>
                    <div className="amb-2 text-light">
                        <p>An Issue thst is never-ending in your country is traffic.<br/>
                        The core problem with traffic arias when an ambulance tries to cross over.<br/>
                        Our Team Priority Pulse is reaching out to this issue with a Priority-based solution
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default AmbulanceComponent
