import React from "react";
import BasketElement from "./BasketElement";
import host from "../util/API";

class Basket extends React.Component {
    constructor() {
        super();
        this.state={
            gameList: [],
            totalPrice: 0.0
        }
    }

    componentDidMount() {
        fetch(`${host}/api/v1/baskets`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`
            }
        })
            .then(response => response.json())
            .then(data => this.setState({
                gameList: data.gameList,
                totalPrice: data.totalPrice
            }))
            .then(() => console.log(this.state))
    }

    render() {
        const htmlList = this.state.gameList.map(game => <BasketElement key={game.id} game={game}/>)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">{""}</th>
                                <th scope="col">Produkt</th>
                                <th scope="col" className="text-center">Cena</th>
                                <th>{""}</th>
                            </tr>
                            </thead>
                            <tbody>
                                {htmlList}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Basket