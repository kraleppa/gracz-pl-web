import React from "react";
import GamesListElement from "./GamesListElement";

class GamesList extends React.Component {
    constructor() {
        super();
        this.state = {
            games: [],
            currentPage: null,
            totalPages: null,
            btnState: "visible"
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/v1/games?page=0&size=18")
            .then(response => response.json())
            .then(data => this.setState({
                games: data.content,
                currentPage: 1,
                totalPages: data.totalPages,
                btnState: "visible"
            }))
    }

    handleClick() {
        fetch(`http://localhost:8080/api/v1/games?page=${this.state.currentPage}&size=18`)
            .then(response => response.json())
            .then(data => this.setState(previousState => {
                return {
                    games: previousState.games.concat(data.content),
                    currentPage: previousState.currentPage+1,
                    totalPages: data.totalPages,
                    btnState: previousState.currentPage+1 === data.totalPages ? "hidden" : "visible"
                }
            }))
            .then(() => console.log(this.state))
    }


    render () {
        const htmlList = this.state.games.map(game =>
                <GamesListElement name={game.name} imageUrl={game.imageUrl} price={game.price} id={game.gameId}/>
            );

        return(
            <div className="container mt-4">
                <div className="row">
                    {htmlList}
                </div>

                <div style={{textAlign: "center"}}>
                    <button type="button" className= "btn btn-primary button-standard" style={{visibility: this.state.btnState}}
                            onClick={this.handleClick}>Więcej</button>
                </div>

            </div>
        )
    }
}

export default GamesList