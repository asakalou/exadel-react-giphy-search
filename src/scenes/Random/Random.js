import React, {Component} from 'react';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as queryString from "query-string";

const URL = 'http://api.giphy.com/v1/gifs/random';
const API_KEY = 'JokfEsQ6phaio2LlwNgGHhpBr47QE89e';

class RandomScene extends Component {

    constructor() {
        super();

        this.state = {
            url: ''
        };
    }

    handleLoadRandom = () => {
        this.loadRandom();
    }

    loadRandom = () => {
        const params = queryString.stringify({
            key: API_KEY,
            api_key: API_KEY
        });

        return ajax({
            url: `${URL}?${params}`,
            method: 'GET',
            responseType: 'json'
        }).subscribe(({response}) => {
            this.setState({
                url: response.data.image_original_url});
        });
    }

    render() {
        return (
            <div>
                <h1>Random GIF</h1>

                <button
                    onClick={this.handleLoadRandom}>
                    Load
                </button>

                <hr/>

                {this.state.url ?
                    <img src={this.state.url} alt={'no image'}/>
                    : 'Please press load'
                }

            </div>
        );
    }

}

export default RandomScene;