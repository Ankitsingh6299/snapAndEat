import React,{Fragment} from 'react'
import mealsImage from '../../assets/FastFood.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
function Header(props) {
  return (
    <Fragment>
        <header className={classes.header}>
        <h1>snapAndEat</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage}/>
        </div>
    </Fragment>
  )
}

export default Header