import classes from './Checkout.module.css';
import { useRef,useState } from 'react';

const isEmpty = value => value.trim() === '';
const isSixChars = value => value.trim().length === 5; 
const Checkout = (props) => {

  const [formInputValidity,setFormInputValidity] = useState({
    name:true,
    city:true,
    street:true,
    postalCode:true
  })
  const nameInputRef = useRef()
  const streetInputRef = useRef()
  const postalCodeInputRef = useRef()
  const cityInputRef = useRef()

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = !isSixChars(enteredPostalCode) && !isEmpty(enteredPostalCode);

    setFormInputValidity({
      name:enteredNameIsValid,
      city:enteredCityIsValid,
      street:enteredStreetIsValid,
      postalCode:enteredPostalCodeIsValid
    })

    const formValid = enteredNameIsValid && 
   enteredStreetIsValid && 
   enteredCityIsValid && 
   enteredPostalCodeIsValid

   if(!formValid){
    return
   }
  };

 
  

   
   
   

    const nameControlClasses = `${classes.control} ${formInputValidity.name ? '' : classes.invalid}`
    const streetControlClasses = `${classes.control} ${formInputValidity.street ? '' : classes.invalid}`
    const postalControlClasses = `${classes.control} ${formInputValidity.postalCode ? '' : classes.invalid}`
    const cityControlClasses = `${classes.control} ${formInputValidity.city ? '' : classes.invalid}`
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter a valid name..</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef}/>
        {!formInputValidity.street && <p>Please enter a valid streetname</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputRef}/>
        {!formInputValidity.postalCode && <p>Enter valid 6 digit postal code...</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef}/>
        {!formInputValidity.city && <p>Please enter valid city name</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;