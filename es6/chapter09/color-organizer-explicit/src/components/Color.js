import PropTypes from 'prop-types'
import FaTrash from 'react-icons/lib/fa/trash-o'
import StarRating from './StarRating'
import TimeAgo from './TimeAgo'
import '../../stylesheets/Color.scss'

const Color = ({title, color, rating=0, timestamp, onRemove = f=>f, onRate = f=>f}) =>
    <section className="color">
        <h1>{title}</h1>
        <button onClick={onRemove}>
            <FaTrash />
        </button>
        <div className="color" style={{backgroundColor: color}} />
        <TimeAgo timestamp={timestamp} />
        <div>
            <StarRating starsSelected={rating} onRate={onRate}/>
        </div>
    </section>

Color.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
}

export default Color
