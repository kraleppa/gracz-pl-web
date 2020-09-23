import React from "react";
import OrderListElement from "../orderList/OrderListElement";
import host from "../util/API";
import InProgressListElement from "./InProgressListElement";

class InProgressList extends React.Component {
    constructor() {
        super();
        this.state={
            orders: [],
            inProgress: false
        }
        this.refresh = this.refresh.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
    }

    componentDidMount() {
        fetch(`${host}/api/v1/orders/all?inProgress`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`
            }
        })
            .then(response => response.json())
            .then(data => this.setState(prev => ({
                orders: data,
            })))
    }

    handleCheck(event){
        const {name, value, type, checked} = event.target;
        this.setState({inProgress: checked})
    }

    refresh(){
        this.componentDidMount();
    }

    render() {
        const htmlList = this.state.orders.filter(order => !this.state.inProgress || order.orderState !== "SENT" )
            .map(order => <InProgressListElement order={order} refresh={this.refresh}/>)

        return (
            <div className="container">
                <div className="row mt-5">
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

                                <th scope="col">
                                    Aktywne
                                    <input type="checkbox" className="ml-3" checked={this.state.inProgress}
                                        onClick={this.handleCheck}/>
                                </th>
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

export default InProgressList;