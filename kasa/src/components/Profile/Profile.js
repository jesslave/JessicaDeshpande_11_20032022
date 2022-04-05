import React, {Component} from "react";
import "./Profile.css";

class Profile extends Component {
    render() {
        return (
            <div className="apartmentProfil">
                <p className="profileName">{this.props.host.name}</p>
                <img className="profilePic" alt="" src={this.props.host.picture} />
            </div>
        )
    }
}

export default Profile;
