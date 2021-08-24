import PropTypes from 'prop-types';
import Button from './Button';

import { useLocation } from 'react-router-dom';


// const Header = (props) => {
const Header = ( { title, onAdd, showAdd } ) => {    //-- destructured version
  const loc = useLocation(); 

  return (
    <header className='header'>
      <h1>{title}</h1>
      {loc.pathname === '/' && (
      <Button color={showAdd ? 'red': 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
      )}
    </header>
  )
}

//-- defaultProps
Header.defaultProps = {
    title: "Task Tracker",
}
//-- for more robust code
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//-- CSS in JS
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header
