import React from "react";

class GamesListElement extends React.Component {
    render() {
        return (
            <div className="col-4">
                <img className="img-fluid" src={this.props.imageUrl} />

            </div>
        )
    }
}

export default GamesListElement