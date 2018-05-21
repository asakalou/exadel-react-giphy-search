import React, {Component} from 'react';
import './App.css';
import RandomScene from "./scenes/Random/Random";

class App extends Component {
    render() {
        return (
            <div className="App">
                <RandomScene/>
            </div>
        );
    }
}

export default App;
