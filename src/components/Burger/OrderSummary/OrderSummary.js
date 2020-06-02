import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // // Could be a functional component
  // componentWillUpdate() {
  //   console.log('[OrderSummary] WillUpdate');
  // }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );

    return (
      <>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>
          Total: <strong>${this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button btnType='Danger' clicked={this.props.purchaseCanceled}>
          Cancel
        </Button>
        <Button btnType='Success' clicked={this.props.purchaseContinued}>
          Continue
        </Button>
      </>
    );
  }
}

export default OrderSummary;
