import * as React       from "react";
import { Component }    from 'react';

// Importing some assets
import './App.css';
import logo from './logo.svg';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React + Jest - Powered by fusebox!</h2>
                </div>

                <p className="App-intro">
                   Hello World!
                </p>
            </div>
        );
    }
}

export default App;