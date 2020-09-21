import React from "react";

class OrderElement extends React.Component {


    render() {
        return (
            <tr>
                <td> </td>
                <td> </td>
                <td><img src={this.props.game.imageUrl} width={80} height={110}/></td>
                <td>
                    <h4 style={{color: "#3631C2"}}>{this.props.game.name}</h4>
                </td>

                <td className="text-center">{this.props.game.price} zł</td>
                <td> </td>
                <td> </td>
                <td> </td>
            </tr>
        )
    }
}

export default OrderElement;