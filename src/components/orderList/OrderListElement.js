import React from "react";

class OrderListElement extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.props.order.orderId}</th>
                <td>{this.props.order.creationDate.replace('T', ' ').slice(0, 19)}</td>
                <td>{this.props.order.shipping}</td>
                <td>{this.props.order.paymentOption}</td>
                <td>{this.props.order.orderPrice} zł</td>
                <td>{this.props.order.shippingPrice} zł</td>
                <td>{this.props.order.orderState}</td>
            </tr>
        )
    }

}

export default OrderListElement;