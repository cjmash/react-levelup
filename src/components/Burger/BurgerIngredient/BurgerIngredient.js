import React from 'react'
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css'

const burgerIngredient = (props) => {
  let ingredient = null;
  switch (props.type ) {
    case ('bread-bottom' ) :
      return ingredient = <div className={classes.BreadBottom}></div>
      break;
    case ('bread-top') :
      return ingredient = ( 
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div> )
      break;
    case ('Meat') :
      return ingredient = <div className={classes.Meat}></div>
      break;
      case ('Cheese' ) :
        return ingredient = <div className={classes.Cheese}></div>
      break;
      case ('Salad' ) :
        return ingredient = <div className={classes.Salad}></div>
      break;
      case ('Bacon' ) :
        return ingredient = <div className={classes.Bacon}></div>
      break;
      default:
        return ingredient
  }
}
burgerIngredient.prototype = {
  type: PropTypes.string.isRequired
}

export default burgerIngredient