import React from "react";
import host from "./util/API";
import {genreToString, consoleToString} from "./util/EnumToString"

class GameDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            id: null,
            name: null,
            genre: null,
            console: null,
            description: null,
            imageUrl: null
        }
    }
    componentDidMount() {
        fetch(`${host}/api/v1/games/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => this.setState({
                id: data.gameId,
                name: data.name,
                price: data.price,
                genre: data.genre,
                console: data.console,
                description: data.description,
                imageUrl: data.imageUrl
            }))
    }

    render() {
        return (
            <div className="container" >
                <div className="row mt-5">
                    <div className="col-sm-12 col-md-6">
                        <figure className="card card-product">
                            <div className="img-wrap2">
                                <img src={this.state.imageUrl}/>
                            </div>
                        </figure>
                    </div>
                    <div className="col-sm-12 col-md-6 my-auto">
                        <div className="text-center">
                            <h2>Cena:</h2>
                            <h1 style={{color: "#3631C2"}}>{this.state.price} zł</h1>
                            <button className="btn button-standard btn-lg mt-4">
                                Kup teraz
                                <i className="fas fa-shopping-cart pl-1"/>
                            </button>
                            <table className="table table-bordered mt-4">
                                <tbody>
                                <tr>
                                    <th>Konsola</th>
                                    <td>{consoleToString(this.state.console)}</td>
                                </tr>
                                <tr>
                                    <th>Gatunek</th>
                                    <td>{genreToString(this.state.genre)}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <h4>Opis</h4>
                        {this.state.description}

                    </div>

                </div>
            </div>
        )
    }

}

export default GameDetails