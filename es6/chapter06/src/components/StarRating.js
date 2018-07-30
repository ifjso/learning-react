import { Component } from 'react';
import PropTypes from 'prop-types';
import Star from './Star';
import '../../stylesheets/styles.css';

class StarRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starsSelected: props.starsSelected || 0
        };
    }

    change(starsSelected) {
        this.setState({starsSelected});
    }

    render() {
        const {totalStars} = this.props;
        const {starsSelected} = this.state;
        return (
            <div className="star-rating">
                {[...Array(totalStars)].map((n, i) =>
                    <Star key={i} selected={i < starsSelected} onClick={() => this.change(i + 1)} />
                )}
                <p>별점: {starsSelected} / {totalStars}</p>
            </div>
        );
    }
}

StarRating.propTypes = {
    totalStars: PropTypes.number
};

StarRating.defaultProps = {
    totalStars: 5
};

StarRating.displayName = 'StarRating';

export default StarRating;
