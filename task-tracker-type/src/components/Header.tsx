import React from 'react';
// import PropTypes from 'prop-types';
//-- Component
import Button from './Button';
//-- Styles
import { Wrapper } from './Header.styles';


type Props = {
    title: string;
    onAdd: () => void;      //TODO
    showAdd: () => void;    //TODO
}
const onClick = () => {console.log("button clicked")};
const Header:React.FC<Props> = ({ title, onAdd, showAdd }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <Button text='add' color="green" onClick={onClick} />
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
