import React from 'react';
// import PropTypes from 'prop-types';
//-- Component
import Button from './Button';
//-- Styles
import { Wrapper } from './Header.styles';


type Props = {
    title: string;
    onAdd: () => void;
    showAdd: boolean;    //TODO
}
const Header:React.FC<Props> = ({ title, onAdd, showAdd }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <Button text={showAdd ? 'Close' : 'Add'} 
              color={showAdd ? 'red': 'green'} 
              onClick={onAdd} 
      />
    </Wrapper>
  )
}

//-- no need with typescript
// Header.defaultProps = {
//   title: 'Task Tracker',
// }
// Header.propTypes = {
// title: PropTypes.string.isRequired,
// onAdd: PropTypes.function.isRequired,
// showAdd: PropTypes.function.isRequired
// }

//-- style object for inline styling
// const headingStyle = {
//   color: 'red',
//   backgrounColor: 'black'
// }

export default Header
