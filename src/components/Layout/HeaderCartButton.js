import React,{Fragment} from 'react';
import { useContext,useEffect,useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css';
function HeaderCartButton(props) {
  
  const cartCtx = useContext(CartContext)
  const {items} = cartCtx
  const numberOfItems = cartCtx.items.reduce((curNumber,item)=>{
    return curNumber+item.amount;
  },0);
const[btnIsHighlighted,setBtnIsHighlighted] = useState(false)
  const btnClasses = `${classes.button} ${btnIsHighlighted? classes.bump:""}`

  useEffect(()=>{
      if(items.length===0){
        return;

      }
      setBtnIsHighlighted(true);

      const timer = setTimeout(()=>{
        setBtnIsHighlighted(false)
      },300);

      return()=>{
        clearTimeout(timer)
      }
  },[items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            {numberOfItems}
        </span>
    </button>
    
  )
}

export default HeaderCartButton