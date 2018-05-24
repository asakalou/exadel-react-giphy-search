import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from './services/actions';

export class HomeScene extends Component {

    componentDidMount() {
        this.props.onQueryChange('Dog');
    }

    handleChange = (event) => {
        this.props.onQueryChange(event.target.value);
    }

    render() {
        const {query, loading, error, items} = this.props;

        return (
            <div>
                <h1>Home</h1>

                <input className={'query'} onChange={this.handleChange} value={query}/>



                <hr/>

                {loading ? <div className={'loading'}>Loading!</div> : null}
                {error ? <div className={'error'}>{error}</div> : null}

                <ul>
                    {
                        items && items.map((item, index) => {
                            return (
                                <li key={item.id}>
                                    <img src={item.images.original.url} alt={'No Image!'}/>
                                </li>
                            );
                        })
                    }
                </ul>
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