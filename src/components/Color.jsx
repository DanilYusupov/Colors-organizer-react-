import React from 'react';
import StarRating from './StarRating';

const Color = ({ title, color, rating = 0, onRemove = f => f, onRate = f => f }) =>
    <div className="color card m-1" style={{ width: 18 + 'rem' }}>
        <div className="card-body">
            <div className="row">
                <div className="col text-center">
                    <h4>{title}</h4>
                </div>
                <div className="col-1">
                    <button type="button" className="close" onClick={onRemove}><span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div className="color rounded"
                 style={{ backgroundColor: color, height: 50 + 'px' }}>
            </div>
            <div>
                <StarRating starsSelected={rating} onRate={onRate}/>
            </div>
        </div>
    </div>;

export default Color;