import React from "react";
import {Link} from "react-router-dom";

class GamesListElement extends React.Component {
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
                        <h4 className="title">{this.props.name}</h4>
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

                </figure>
            </div>
        )
    }
}

export default GamesListElement


//
//