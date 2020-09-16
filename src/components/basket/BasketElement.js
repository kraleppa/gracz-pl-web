import React from "react";

class BasketElement extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <tr >
                <td><img src={this.props.game.imageUrl} width={80}/></td>
                <td ><h4 style={{color: "#3631C2"}}>{this.props.game.name}</h4></td>
                <td className="text-center">{this.props.game.price} zł</td>
                <td className="text-right">
                    <button className="btn btn-sm btn-danger">Usuń</button>
                </td>
            </tr>
        )
    }


}

export default BasketElement;