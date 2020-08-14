import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer id="sticky-footer" className="py-4 text-white-50">
                <div className="container text-center">
                    <small>
                        © 2020 Copyright
                        <a href="/"> Gracz.pl</a>
                    </small>

                </div>
            </footer>
        )
    }
}

export default Footer