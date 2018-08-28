import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadRandom, loadRandomCancel, startTimer} from './services/actions';
import './Random.css';


export class RandomScene extends Component {

    componentDidMount() {
        this.props.onLoad();
    }

    componentWillUnmount() {
        this.props.onCancel();
    }

    handleLoadRandom = () => {
        this.props.onLoad();
    }

    handleStartTimer = () => {
        this.props.onStartTimer();
    }

    render() {
        const {image, loading, error} = this.props;

        return (
            <div className="random-scene">

                {loading? <div>Loading</div> : null}
                {error? <div>Error</div> : null}

                <div className="random-img">
                    {image ?
                        <img src={image.image_original_url} alt={'no image'}/>
                        : 'Please press load'
                    }
                </div>

                <div>
                    <button
                        className="load-random-btn onLoad"
                        onClick={this.handleLoadRandom}>
                        Another please!
                    </button>
                </div>

                <div>
                    <button
                        className="load-random-btn"
                        onClick={this.handleStartTimer}>
                        Start!
                    </button>
                </div>

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
        onLoad: () => dispatch(loadRandom()),
        onStartTimer: () => dispatch(startTimer()),
        onCancel: () => dispatch(loadRandomCancel())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomScene);