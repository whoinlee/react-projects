type Props = {
    color: string;
    text: string;
    onClick: () => void;    //TODO
}

const Button: React.FC<Props> = ({ color, text, onClick }) => {
  return (
    <button className="btn" onClick={onClick} style={ {backgroundColor: color} }>
        {text}
    </button>
  )
}

export default Button
