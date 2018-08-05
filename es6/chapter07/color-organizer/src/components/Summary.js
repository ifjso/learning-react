import { Component } from 'react';
import PropTypes from 'prop-types';

class Summary extends Component {
    render() {
        const {ingredients, steps, title} = this.props;
        return (
            <div className="summary">
                <h1>{title}</h1>
                <p>
                    <span>재료 {ingredients} 종류 | </span>
                    <span>총 {steps} 단계</span>
                </p>
            </div>
        );
    }
}

Summary.propTypes = {
    ingredients: PropTypes.number.isRequired,
    steps: PropTypes.number.isRequired,
    title: (props, propName) =>
        (typeof props[propName] !== 'string') ?
            new Error('제목은 문자열이어야 합니다.') :
            (props[propName].length > 20) ?
                new Error('제목은 20자 이내여야 합니다.') :
                null
};

Summary.defaultProps = {
    ingredients: 0,
    steps: 0,
    title: "[무제]"
};

Summary.displayName = "Summary";

export default Summary;
