import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadRandom, loadRandomCancel} from './services/actions';


class RandomScene extends Component {

    componentDidMount() {
        this.props.onLoad();
    }

    componentWillUnmount() {
        this.props.onCancel();
    }

    handleLoadRandom = () => {
        this.props.onLoad();
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
        onLoad: () => dispatch(loadRandom()),
        onCancel: () => dispatch(loadRandomCancel())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomScene);