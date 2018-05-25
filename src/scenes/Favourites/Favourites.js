import React, {Component} from 'react';
import * as actions from './services/actions';
import {GifItem} from "../../components/GifItem/GifItem";
import {connect} from "react-redux";

export class FavouritesScene extends Component {

    componentDidMount() {
        this.props.onLoad();
    }

    render() {
        const {items, loading, error} = this.props;

        return (
            <div>
                <h1>Favourites</h1>
                <div>

                    {loading ? 'Loading' : null}
                    {error ? 'Error' : null}

                    <div>
                        {items && items.map(item => {
                            return (
                                <GifItem url={item.images.original.url}/>
                            );
                        })}
                    </div>
                </div>
            </div>
        );

    }

}

const mapStateToProps = (state) => {
    const {items, loading, error} = state.favourites;

    return {
        loading,
        error,
        items
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => dispatch(actions.loadFavourites())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesScene);

