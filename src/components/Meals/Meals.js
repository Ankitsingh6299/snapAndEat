import React, { Fragment } from 'react'
import Cart from '../Cart/Cart'
import AvailableMeals from './AvailableMeals'
import MealsSummary from './MealsSummary'

function Meals() {
  return (
    <Fragment>
     
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
  )
}

export default Meals