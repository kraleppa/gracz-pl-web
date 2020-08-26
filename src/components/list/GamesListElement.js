import React from "react";
import {Link} from "react-router-dom";
import host from "../util/API";

class GamesListElement extends React.Component {
    constructor() {
        super();
        this.state = {
            text: "Usuń"
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        fetch(`${host}/api/v1/games/${this.props.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => this.setState({text: "Usunięto"}))
            .catch(error => console.log("Błąd :< " + error))
    }




    render() {
        return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <figure className="card card-product">
                    <Link to={`/game/${this.props.id}`} >
                    <div className="div-button">
                    <div className="img-wrap">
                        <img src={this.props.imageUrl}/>
                    </div>
                    <figcaption className="info-wrap">
                        <h5 className="title">{this.props.name + " ?id=" + this.props.id}</h5>
                        {/*<div className="rating-wrap">*/}
                        {/*    <div className="label-rating">132 reviews</div>*/}
                        {/*    <div className="label-rating">154 orders</div>*/}
                        {/*</div>*/}
                    </figcaption>
                    </div>
                </Link>
                    <div className="bottom-wrap">
                        <a href="" className="btn button-standard float-right" style={{fontSize: "0.9em"}}>Do koszyka</a>
                        <div className="price-wrap h5">
                            <span className="price-new">{this.props.price} zł</span>
                        </div>
                    </div>
                    <div className="bottom-wrap text-center">
                        <Link to={`/edit/${this.props.id}`}>
                            <button className="btn btn-success btn-sm mr-4">Edytuj</button>
                        </Link>
                        <button className="btn btn-danger btn-sm" onClick={this.handleClick}>{this.state.text}</button>
                    </div>
                </figure>
            </div>
        )
    }
}

export default GamesListElement


