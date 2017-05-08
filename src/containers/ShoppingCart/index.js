import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions';
import './ShoppingCart.css';

export class ShoppingCart extends Component {

	renderShopppingCart = () => {
		const { shoppingCart, removeFromCartDispatch } = this.props;

		return shoppingCart.map((item) => {
			return (
				<li
					onClick={() => removeFromCartDispatch(item.id)}
					key={item.id}
					className={'SC-list-item'}
				>
					<img role="presentation" src={item.link} alt="" />
					{item.title}
				</li>
			)
		})
	}

	render() {
		return (
			<ul className={'SC-list'}>
				{this.renderShopppingCart()}
			</ul>
		)
	}
}

/*
function connect(mapStateToProps, mapDispatchToProps) {
	return function(ourComponent) {
		// it passes in sate, as well as actions, via props
	}
}
*/
const mapStateToProps = ({ shoppingCart }) => ({
	shoppingCart,
})

const mapDispatchToProps = (dispatch) => ({
	removeFromCartDispatch: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)