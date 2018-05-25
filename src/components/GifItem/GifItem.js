import React from 'react';

export const GifItem = ({url}) => {
    return (
        <div>
            <img src={url} alt={'no image'}/>
        </div>
    );
};