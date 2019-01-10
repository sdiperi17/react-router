import React, { Component } from "react";

class LogIn extends Component {
    render() {
        return (
            <div>
                <div className="posts-container">
                    <div className="add-post">
                        <button>Add Post</button> <h1>Welcome UserName</h1>
                    </div>
                    <div className="posts-dashboard">
                        <ul>
                            <li>Post 1</li>
                            <li>Post 1</li>
                            <li>Post 2</li>
                            <li>Post 3</li>
                            <li>Post 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default LogIn;
