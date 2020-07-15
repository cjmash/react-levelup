import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'
const controls = [
  {label: 'Salad', type: 'Salad'},
  {label: 'Meat', type: 'Meat'},
  {label: 'Cheese', type: 'Cheese'},
  {label: 'Bacon', type: 'Bacon'}

]
const buildControls = (props) => {
  return <div className={classes.buildControls}>
    <p>current price: {props.price.toFixed(2)}</p>
    {controls.map(control => (
      <BuildControl key = {control.label} 
      label={control.type} 
      added = {() => props.ingredientsAdded(control.type)} 
      removed = {() => props.ingredientsRemoved  (control.type)} 
      disabled = {props.disabled[control.type]}/>
    ))}
    <button 
    className={classes.OrderButton}
    disabled= {!props.purchasable}
    >Order now</button>
  </div>
}

export default buildControls;