import React, { Component } from "react";
import "./App.css";
import LogIn from "./components/LogIn";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>React Router</h1>
                <LogIn />
            </div>
        );
    }
}

export default App;
