import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
const INGREDIENT_PRICES = {
  Salad : 0.5,
  Cheese : 0.6,
  Meat : 0.8,
  Cheese : 0.7,
  Bacon: 1

}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      Salad: 0,
      Bacon: 0,
      Meat: 0,
      Cheese: 0

    },
    totalPrice: 5,
    purchasable: false

  }

  updatePurchasableState = (ingredients) => {
    
    const sum = Object.keys(ingredients).map(ingKey => {
      return ingredients[ingKey]
    }).reduce((sum, el)=> {
      return sum + el
    }, 0)
    this.setState({purchasable: sum > 0})
  }
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1

    const updatedIngredient = {
      ...this.state.ingredients
    }
    updatedIngredient[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type]
    const newPrice = this.state.totalPrice + priceAddition
    this.setState({totalPrice: newPrice, ingredients: updatedIngredient})
    this.updatePurchasableState(updatedIngredient)

  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1
    const updatedIngredient = {
      ...this.state.ingredients
    }
    updatedIngredient[type] = updatedCount
    const priceDeduction = INGREDIENT_PRICES[type]
    const newPrice = this.state.totalPrice - priceDeduction
    this.setState({totalPrice: newPrice, ingredients: updatedIngredient})
    this.updatePurchasableState(updatedIngredient)
  }
render () {
  const disabledInfo = {
    ...this.state.ingredients
  }
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <=0
  }
  return (
  <Aux>
    <Burger ingredients= {this.state.ingredients} />
    <BuildControls 
    ingredientsAdded = {this.addIngredientHandler} 
    ingredientsRemoved= {this.removeIngredientHandler}
    disabled = {disabledInfo}
    price= {this.state.totalPrice}
    purchasable= {this.state.purchasable}/>
  </Aux>
  )
}
}

export default BurgerBuilder;