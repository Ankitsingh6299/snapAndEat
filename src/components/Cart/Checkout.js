import React from 'react';
import classes from './Checkout.module.css';


const submitHandler = (event) =>{
    event.preventDefault();
}
const Checkout = props => {
return <form onSubmit={submitHandler}>
    <div className={classes.control}>
        <label htmlFor='name'>Your name</label>
        <input type='text' id='name' />
    </div>
    <div className={classes.control}>
        <label htmlFor='street'>Street name</label>
        <input type='text' id='street' />
    </div>
    <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' />
    </div>
    <div className={classes.control}>
        <label htmlFor='city'>City name</label>
        <input type='text' id='city' />
    </div>
    <button>Confirm</button>
    <button type='button' onClick={props.onCancel}>Cancel</button>
</form>

}

export default Checkout