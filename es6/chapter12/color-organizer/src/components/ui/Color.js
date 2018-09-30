import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import FaTrash from 'react-icons/lib/fa/trash-o'
import StarRating from './StarRating'
import TimeAgo from './TimeAgo'
import '../../stylesheets/Color.scss'

const Color = ({ id, title, color, rating=0, timestamp, onRemove = f => f, onRate = f => f, history }) =>
    <section className="color">
        <h1 onClick={() => history.push(`/${id}`)}>{title}</h1>
        <button onClick={onRemove}>
            <FaTrash />
        </button>
        <div className="color" onClick={() => history.push(`/${id}`)} style={{backgroundColor: color}} />
        <TimeAgo timestamp={timestamp} />
        <div>
            <StarRating starsSelected={rating} onRate={onRate} />
        </div>
    </section>

Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
}

export default withRouter(Color)
