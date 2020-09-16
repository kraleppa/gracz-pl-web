import React from "react";
import {Link} from "react-router-dom";
import host from "../util/API";

class BasketElement extends React.Component {
    constructor() {
        super();
        this.onDelete = this.onDelete.bind(this)
    }

    onDelete() {
        fetch(`${host}/api/v1/baskets?gameId=${this.props.game.gameId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`
            }
        })
            .then(response => response.json())
            .then(() => this.props.onDelete())
    }



    render() {
        return (
            <tr>
                <td><img src={this.props.game.imageUrl} width={80} height={110}/></td>
                <td>
                    <Link to={`/game/${this.props.game.gameId}`}>
                        <h4 style={{color: "#3631C2"}}>{this.props.game.name}</h4>
                    </Link>
                </td>


                <td className="text-center">{this.props.game.price} zł</td>
                <td className="text-right">
                    <button className="btn btn-sm btn-danger" onClick={this.onDelete}>Usuń</button>
                </td>
            </tr>
        )
    }


}

export default BasketElement;