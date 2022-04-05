import React, {Component} from "react";
import "./ApartementTitleAndLocation.css";

class ApartementTitleAndLocation extends Component {
    render() {
        return (
            <div>
                <h1 className="apartmentTitle">{this.props.title}</h1>
                <h2 className="apartmentLocation">{this.props.location}</h2>
            </div>
        )
    }
}

export default ApartementTitleAndLocation;