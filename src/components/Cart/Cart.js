import React,{useContext,useState} from 'react'
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Checkout from './Checkout';
function Cart(props) {
    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length>0
    const [isCheckout,setIsCheckout] = useState(false);
    const [isSubmitting,setIsSubmitting] = useState(false)
    const [didSubmit,setDidSubmit] = useState(false)
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const orderHandler = () =>{
        setIsCheckout(true)
    }

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item,amount:1})
    }

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true)
        const response = await fetch('https://snapeat-d788d-default-rtdb.firebaseio.com//orders.json',{
            method:'POST',
            body:JSON.stringify({
                user:userData,
                orderedItems:cartCtx.items
            })
        })
        setIsSubmitting(false)
        setDidSubmit(true)
        cartCtx.clearCart();
    }
    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items
    .map((item)=>(<CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} 
    onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)} />
    ))}</ul>
    const modalItems = <div className={classes.actions}>
    <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
    {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
</div>
const cartModalContent = <React.Fragment>
    {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel ={props.onClose} />}
        {!isCheckout && modalItems}
</React.Fragment>

const isSubmittingModalContent = <p>Sending order Data......</p>
const didSubmitModalContent =
<React.Fragment>
<p>Order Successfully Placed, Happy Mealing .... </p>
<div className={classes.actions}>
    <button className={classes.button} onClick={props.onClose}>Close</button>
</div>
</React.Fragment>
  return (
    <Modal onClose={props.onClose}>
        {!isSubmitting && !didSubmit && cartModalContent}
        {isSubmitting && isSubmittingModalContent}
        {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  )
}

export default Cart