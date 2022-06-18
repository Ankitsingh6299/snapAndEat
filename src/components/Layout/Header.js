import React,{Fragment} from 'react'
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
function Header(props) {
  return (
    <Fragment>
        <header className={classes.header}>
        <h1>snapAndEat</h1>
        <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage}/>
        </div>
    </Fragment>
  )
}

export default Header