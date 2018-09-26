import React from 'react';
import Color from './Color';

const ColorList = ({ colors = [], onRate = f => f, onRemove = f => f }) =>
    <div className="row color-list">
        {
            (colors.length === 0) ?
                <p className="col">No Colors Listed. (Add a Color)</p> :
                colors.map(color =>
                    <div className="col">
                    <Color key={color.id}
                           {...color}
                           onRate={(rating) => onRate(color.id, rating)}
                           onRemove={() => onRemove(color.id)}/>
                    </div>
                )
        }
    </div>;

export default ColorList;