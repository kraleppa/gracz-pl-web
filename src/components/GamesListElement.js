import React from "react";

class GamesListElement extends React.Component {
    render() {
        return (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 div-button">
                <img className="img-fluid game-image" src={this.props.imageUrl} />
                <ul className="list-group game-element-list">
                    <li className="list-group-item ">{this.props.id}</li>
                    <li className="list-group-item ">{this.props.name}</li>
                    <li className="list-group-item price-text">{this.props.price}</li>
                </ul>
            </div>
        )
    }
}

export default GamesListElement