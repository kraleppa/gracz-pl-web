import React from "react";
import GamesListElement from "./GamesListElement";

class GamesList extends React.Component {
    constructor() {
        super();
        this.state = {
            games: [],
            currentPage: null,
            totalPages: null
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/v1/games?page=0&size=8")
            .then(response => response.json())
            .then(data => this.setState({
                games: data.content,
                currentPage: 1,
                totalPages: data.totalPages
            }))
    }

    render () {
        const htmlList = this.state.games.map(game =>
                <GamesListElement name={game.name} imageUrl={game.imageUrl} price={game.price}/>
            );

        return(
            <div className="container mt-4">
                <div className="row">
                    {htmlList}
                </div>

            </div>
        )
    }
}

export default GamesList