import React, { Component } from "react";


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "" };
    }

    handleInput = (e) => {
        this.setState({ name: e.target.value })


    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.searchMovies(this.state.name)
    }


    render() {
        return (
            <div>

                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand">OMDB</a>
                    <form className="form-inline" onSubmit={this.handleSubmit}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                            value={this.state.name}
                            onChange={this.handleInput} />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
                        >Search</button>
                    </form>
                </nav>

            </div>
        );

    }
}

export default NavBar;