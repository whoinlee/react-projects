import Button from '@material-ui/core/Button';
//-- Types
import { CartItemType } from '../App';
//-- Styles
import { Wrapper } from './Item.styles';


type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)} >Add To Cart</Button>
    </Wrapper>
    //-- can't do onClick={handleAddToCart(item)}. bc then, it's going to be triggered right away, even before it's clicked  
);

export default Item;