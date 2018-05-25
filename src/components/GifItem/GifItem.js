import React from 'react';
import PropTypes from 'prop-types';

export const GifItem = ({url}) => {
    return (
        <div>
            <img src={url} alt={'no image'}/>
        </div>
    );
};

GifItem.propTypes = {
    /** this is url */
    url: PropTypes.string.isRequired,

    /** this is onclick */
    onClick: PropTypes.func

};