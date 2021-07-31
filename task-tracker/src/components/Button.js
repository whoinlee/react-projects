import PropTypes from 'prop-types';

const Button = ( { color, text, onClick }) => {

    return  <button onClick={onClick} style={{ backgroundColor: color }} 
                    className='btn'>
                {text}
            </button>
}

//-- defaultProps
Button.defaultProps = {
   color: "steelblue",
}

//-- for more robust code
Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
