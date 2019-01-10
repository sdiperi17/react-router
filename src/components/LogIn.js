import React, { Component } from "react";

class LogIn extends Component {
    render() {
        return (
            <div>
                <form className="logIn-container">
                    <h1>Log In</h1>
                    <input type="text" placeholder="First Name" />
                    <br />
                    <input type="text" placeholder="Last Name" />
                    <br />
                    <button>Sign In</button>
                </form>
            </div>
        );
    }
}

export default LogIn;
