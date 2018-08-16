import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from './services/actions';
import './Home.css';

export class HomeScene extends Component {

    componentDidMount() {
        this.props.onQueryChange('Hello');
    }

    handleChange = (event) => {
        this.props.onQueryChange(event.target.value);
    }

    render() {
        const {query, loading, error, items} = this.props;

        return (
            <div className="home-scene">

                <div className="search-form">
                    <input className={'query'} onChange={this.handleChange} value={query}/>
                </div>


                {loading ? <div className={'loading'}>Loading!</div> : null}
                {error ? <div className={'error'}>{error}</div> : null}

                <div>
                    {   items && items.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    <img src={item.images.original.url} alt={'No Image!'}/>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    const {query, loading, error, items} = state.home;

    return {
        query,
        loading,
        error,
        items
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onQueryChange: (query) => dispatch(actions.homeQueryChange(query))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScene);