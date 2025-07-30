import { useContext } from 'react';
import './checkout.styles.scss';
import { CartContext } from '../../context/cartContext/cart.context';
import CheckoutTable from '../../components/checkout/checkout-table/checkout-table.component';

function Checkout() {
    return (
        <CheckoutTable/>
    )
}

export default Checkout;