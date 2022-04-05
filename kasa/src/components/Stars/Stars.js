import React, {Component} from "react";
import "./Stars.css";

class Stars extends Component {
    render() {
        const ratingScale = [1, 2, 3, 4, 5];

        return (
            <div className="apartmentRatings">
                {ratingScale.map((scale) => (
                    //While the scale is inferior to the rating of the apartment, the star is colored
                    <i className={`fas fa-star${scale <= this.props.rating 
                        ? " colored" 
                        : ""}`} 
                    key={`star-${scale}`}></i>
                ))}
            </div>
        )
    }
}

export default Stars;