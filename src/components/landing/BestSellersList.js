import React from "react";
import GamesListElement from "../list/GamesListElement";
import host from "../util/API";

class BestSellersList extends React.Component{
    constructor() {
        super();
        this.state = {
            games: [],
            spinnerState: "visible"
        }
    }


    componentDidMount() {
        fetch(`${host}/api/v1/games?page=0&size=4`)
            .then(response => response.json())
            .then(data => this.setState({
                games: data.content,
                spinnerState: "hidden"
            }))
    }

    render() {
        const htmlList = this.state.games.map(game =>
            <GamesListElement name={game.name} imageUrl={game.imageUrl} price={game.price} id={game.gameId}/>
        );
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12 mb-4" style={{textAlign: "center"}}>
                        <h3>Bestselllery</h3>
                    </div>

                </div>
                <div className="row">
                    {htmlList}
                </div>

                <div className="row" style={{textAlign: "center"}}>
                    <div className="col-12">
                        <div className="spinner-border" role="status" style={{visibility: this.state.spinnerState, textAlign: "center"}}>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BestSellersList