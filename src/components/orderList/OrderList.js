import React from "react";
import OrderListElement from "./OrderListElement";
import host from "../util/API";

class OrderList extends React.Component {
    constructor() {
        super();
        this.state={
            orders: []
        }
    }

    componentDidMount() {
        fetch(`${host}/api/v1/orders`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`
            }
        })
            .then(response => response.json())
            .then(data => this.setState({
                orders: data
            }))
    }

    render() {
        const htmlList = this.state.orders.map(order => <OrderListElement order={order}/>)

        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col-12">
                        <table className="table table-striped text-center">
                            <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Data utworzenia</th>
                                <th scope="col">Sposób dostawy</th>
                                <th scope="col">Sposób płatności</th>
                                <th scope="col">Cena</th>
                                <th scope="col">Cena przesyłki</th>
                                <th scope="col">Status</th>
                                <th scope="col"> </th>
                            </tr>
                            </thead>
                            {htmlList}
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderList;