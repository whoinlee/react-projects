import { useState } from 'react';
import { useQuery } from 'react-query';
//-- Components
import Cart from './Cart/Cart';
import Item from './Item/Item';
//--
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
//-- Styles
import { Wrapper, StyledButton } from './App.styles';
//-- Types
export type CartItemType = {  //-- ** export ** --//
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number; //-- added
}


//-- fetching : fake store API
const STORE_API = 'https://fakestoreapi.com/products';

const getProducts = async (): Promise<CartItemType[]> => 
await (await fetch(STORE_API)).json();

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts); //-- useQuery를 쓰면 useEffect를 안써도 알아서 한 번만 로딩????
  console.log(`data: ${data}`);
  // console.log(`isLoading: ${isLoading}`);
  // console.log(`error: ${error}`);

  // const result = useQuery<CartItemType[]>('products', getProducts);
  // console.log(`result.isLoading: ${result.isLoading}`);
  // for (const property in result) {
  //   console.log(`${property}: ${result[property]}`);
  // }
  //---
  // status: success
  // isLoading: false
  // isSuccess: true
  // isError: false
  // isIdle: false
  // data: [object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]
  // dataUpdatedAt: 1627836461437
  // error: null
  // errorUpdatedAt: 0
  // failureCount: 0
  // isFetched: true
  // isFetchedAfterMount: true
  // isFetching: false
  // isLoadingError: false
  // isPlaceholderData: false
  // isPreviousData: false
  // isRefetchError: false
  // isStale: true
  // refetch: function () { [native code] }
  // remove: function () { [native code] }

  
  //-- accumulator & item
  const getTotalItems = (items:CartItemType[]) => items.reduce((accm: number, item) => accm + item.amount, 0);  //-- implicit return
  //
  const handleAddToCart = (clickedItem:CartItemType) => {
    setCartItems(prev => {
      //-- is the item already in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);
      if (isItemInCart) {
        //-- update the amount
        return prev.map(item => (
          item.id === clickedItem.id ? {...item, amount: item.amount + 1} : item
        ));
      }
      //-- it's the first time the item is added
      return [...prev, {...clickedItem, amount: 1}];
    });
  };
  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((accm, item) => {
        if (item.id === id) {
          if (item.amount === 1) return accm;
          return [...accm, {...item, amount: item.amount-1}];
        } else {
          return [...accm, item];
        }
      }, [] as CartItemType[]))
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={()=>setCartOpen(false)} >
        <Cart cartItems={cartItems} 
              addToCart={handleAddToCart} 
              removeFromCart={handleRemoveFromCart}/>
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
      {/* The part after the question mark is only executed if data exists, need???? here???? */}
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4} >
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;