import React from 'react';
// import PropTypes from 'prop-types';


type Props = {
    color: string;
    text: string;
    onClick: () => void;    //TODO
}

const Button:React.FC<Props> = ( {color, text, onClick}) => {

  return (
    <button className="btn" onClick={onClick} style={ {backgroundColor: color} }>
        {text}
    </button>
  )
}

// Button.propTypes = {
//     color: PropTypes.string,
//     text: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired
// }

// Button.defaultProps = {
//   color: 'steelblue'
// }

export default Button
