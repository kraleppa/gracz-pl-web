import React from "react";
import {Link} from "react-router-dom";
import host from "../util/API";

class GamesListElement extends React.Component {
    constructor() {
        super();
        this.state = {
            text: "Usuń",
            addText: "Do koszyka"
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleClick(){
        fetch(`${host}/api/v1/games/${this.props.id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`
            }
        })
            .then(response => console.log(response.status))
            .then(() => this.setState({text: "Usunięto"}))
            // .catch(error => console.log("Błąd :< " + error))
    }

    handleAdd(){
        fetch(`${host}/api/v1/baskets?gameId=${this.props.id}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`
            }
        })
            .then(response => response.json())
            .then(() => this.setState({addText: "Dodano"}))
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
                        <h5 className="title">{this.props.name}</h5>
                        {/*<div className="rating-wrap">*/}
                        {/*    <div className="label-rating">132 reviews</div>*/}
                        {/*    <div className="label-rating">154 orders</div>*/}
                        {/*</div>*/}
                    </figcaption>
                    </div>
                </Link>
                    <div className="bottom-wrap">
                        {sessionStorage.getItem("role") != null &&
                            <button className="btn button-standard float-right" style={{fontSize: "0.9em"}} onClick={this.handleAdd}>
                                {this.state.addText}
                            </button>
                        }

                        <div className="price-wrap h5 text-center">
                            <span className="price-new">{this.props.price} zł</span>
                        </div>
                    </div>
                    {sessionStorage.getItem("role") === "ROLE_ADMIN" &&
                    <div className="bottom-wrap text-center">
                        <Link to={`/edit/${this.props.id}`}>
                            <button className="btn btn-success btn-sm mr-4">Edytuj</button>
                        </Link>
                        <button className="btn btn-danger btn-sm" onClick={this.handleClick}>{this.state.text}</button>
                    </div>
                    }

                </figure>
            </div>
        )
    }
}

export default GamesListElement


