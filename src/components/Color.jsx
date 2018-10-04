import React from 'react';
import StarRating from './StarRating';
import PropTypes from 'prop-types';

class Color extends React.Component {

    componentWillMount() {
        this.style = { backgroundColor: '#87a1ba' }
    }

    componentWillUpdate(nextProps) {
        const {title, rating} = this.props;
        this.style = {backgroundColor: '#ffffff'};
        alert(title + ': rating ' + rating + ' -> ' + nextProps.rating);
    }

    shouldComponentUpdate(nextProps) {
        const {rating} = this.props;
        return rating !== nextProps.rating;
    }

    componentDidUpdate(prevProps){
        const {title, rating} = this.props;
        const status = (rating > prevProps.rating) ? 'better' : 'worse';
    }

    render() {
        const { title, rating, color, onRate, onRemove } = this.props;
        return (
            <div className="color card m-1" style={{ width: 18 + 'rem', backgroundColor: this.style.backgroundColor }}>
                <div className="card-body">
                    <div className="row">
                        <div className="col text-center">
                            <h4>{title}</h4>
                        </div>
                        <div className="col-1">
                            <button type="button" className="close" onClick={onRemove}><span
                                aria-hidden="true">&times;</span>
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
            </div>
        );
    }
}

Color.propTypes = {
    title: PropTypes.string,
    rating: PropTypes.number,
    color: PropTypes.string,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
};

Color.defaultProps = {
    title: undefined,
    rating: 0,
    color: "#000000",
    onRate: f=>f,
    onRemove: f=>f
};

// const Color = ({ title, color, rating = 0, onRemove = f => f, onRate = f => f }) =>
//     <div className="color card m-1" style={{ width: 18 + 'rem' }}>
//         <div className="card-body">
//             <div className="row">
//                 <div className="col text-center">
//                     <h4>{title}</h4>
//                 </div>
//                 <div className="col-1">
//                     <button type="button" className="close" onClick={onRemove}><span aria-hidden="true">&times;</span>
//                     </button>
//                 </div>
//             </div>
//             <div className="color rounded"
//                  style={{ backgroundColor: color, height: 50 + 'px' }}>
//             </div>
//             <div>
//                 <StarRating starsSelected={rating} onRate={onRate}/>
//             </div>
//         </div>
//     </div>;
//
export default Color;