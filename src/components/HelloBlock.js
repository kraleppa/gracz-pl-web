import React from "react"

class HelloBlock extends React.Component {
    render() {
        return(
            <div className="container" >
                <div className="row">
                    <div className="col-4" style={{background: "red"}}>
                        Hello
                    </div>
                    <div className="col-8"style={{background: "yellow"}}>
                        World!
                    </div>
                </div>
            </div>
        )
    }
}

export default HelloBlock