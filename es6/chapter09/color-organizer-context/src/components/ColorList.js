import PropTypes from 'prop-types'
import Color from './Color'
import '../../stylesheets/ColorList.scss'

const ColorList = ({colors = []}) =>
    <div className="color-list">
        {(colors.length === 0) ?
            <p>No colors listed. (Add a color)</p> :
            colors.map(color =>
                <Color key={color.id} {...color} />
            )
        }
    </div>

Color.propTypes = {
    colors: PropTypes.array
}

export default ColorList
