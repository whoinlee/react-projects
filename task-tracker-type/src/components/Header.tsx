import React from 'react';
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
      <Button text='add' onClick={onClick} color="steelblue" />
    </Wrapper>
  )
}

export default Header
