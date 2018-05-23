import React, {Component} from 'react';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as qs from 'qs';
import {connect} from 'react-redux';
import {loadRandom, loadRandomError, loadRandomSuccess} from './services/actions';

const URL = 'https://api.giphy.com/v1/gifs/random';
const API_KEY = 'JokfEsQ6phaio2LlwNgGHhpBr47QE89e';

class RandomScene extends Component {

    handleLoadRandom = () => {
        this.loadRandom();
    }

    loadRandom = () => {
        const {onSuccess, onError, onLoad} = this.props;

        onLoad();

        const params = qs.stringify({
            key: API_KEY,
            api_key: API_KEY
        });

        return ajax({
            url: `${URL}?${params}`,
            method: 'GET',
            responseType: 'json'
        }).subscribe(({response}) => {
            onSuccess(response.data);
        }, () => {
            onError();
        });
    }

    render() {
        const {image, loading, error} = this.props;

        return (
            <div>
                <h1>Random GIF</h1>

                <button
                    onClick={this.handleLoadRandom}>
                    Load
                </button>

                <hr/>

                {loading? <div>Loading</div> : null}
                {error? <div>Error</div> : null}

                {image ?
                    <img src={image.image_original_url} alt={'no image'}/>
                    : 'Please press load'
                }

            </div>
        );
    }

}

const mapStateToProps = (state) => {
    const { image, loading, error } = state.random;
    return {
        image,
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSuccess: (image) => dispatch(loadRandomSuccess(image)),
        onError: (error) => dispatch(loadRandomError(error)),
        onLoad: () => dispatch(loadRandom())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomScene);