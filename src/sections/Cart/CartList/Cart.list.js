import React from 'react';
import { dons2, pans2 } from '../../../res/img';

import './Cart.list.css';

const CartList = () => {
    return (
        <div className="cart__list">
            <div className="cart__separator">
                <h1 className="cart__list-baker">Baker: Cara Cakes</h1>
                <table className="cart-table">
                    <thead className="cart-table_header">
                        <td className="cart-table_header-data">Product</td>
                        <td className="cart-table_header-data">Price</td>
                        <td className="cart-table_header-data">Quantity</td>
                        <td className="cart-table_header-data">Total</td>
                    </thead>
                    <tr className="cart-table-row">
                        <td className="cart-table-data cart_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="cart__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="cart-table-data">3000</td>
                        <td className="cart-table-data">3</td>
                        <td className="cart-table-data">9000</td>
                    </tr>
                    <tr className="cart-table-row">
                        <td className="cart-table-data cart_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="cart__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="cart-table-data">40000</td>
                        <td className="cart-table-data">4</td>
                        <td className="cart-table-data">160,000</td>
                    </tr>
                    <tr className="cart-table-row">
                        <td colSpan="2" className="cart-table-data cart-coupon">
                            <input type="text" placeholder="Coupon Code" className="cart-coupon_input" /> 
                            <button className="cart-button">Apply</button>
                        </td>
                        <td colSpan="1" className="cart-table-data cart-coupon"><button className="cart-button">Order</button></td>
                        <td colSpan="1" className="cart-table-data">Total: 169,000</td>
                    </tr>
                </table>
            </div>
            <div className="cart__separator">
                <h1 className="cart__list-baker">Baker: Cara Cakes</h1>
                <table className="cart-table">
                    <thead className="cart-table_header">
                        <td className="cart-table_header-data">Product</td>
                        <td className="cart-table_header-data">Price</td>
                        <td className="cart-table_header-data">Quantity</td>
                        <td className="cart-table_header-data">Total</td>
                    </thead>
                    <tr className="cart-table-row">
                        <td className="cart-table-data cart_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="cart__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="cart-table-data">3000</td>
                        <td className="cart-table-data">3</td>
                        <td className="cart-table-data">9000</td>
                    </tr>
                    <tr className="cart-table-row">
                        <td className="cart-table-data cart_table-imageContainer">
                            <img src={dons2} alt="Pastry Name" className="cart__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="cart-table-data">3000</td>
                        <td className="cart-table-data">3</td>
                        <td className="cart-table-data">9000</td>
                    </tr>
                    <tr className="cart-table-row">
                        <td className="cart-table-data cart_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="cart__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="cart-table-data">40000</td>
                        <td className="cart-table-data">4</td>
                        <td className="cart-table-data">160,000</td>
                    </tr>
                    <tr className="cart-table-row">
                        <td colSpan="2" className="cart-table-data cart-coupon">
                            <input type="text" placeholder="Coupon Code" className="cart-coupon_input" /> 
                            <button className="cart-button">Apply</button>
                        </td>
                        <td colSpan="1" className="cart-table-data cart-coupon"><button className="cart-button">Order</button></td>
                        <td colSpan="1" className="cart-table-data">Total: 169,000</td>
                    </tr>
                </table>
            </div>
            <div className="cart__separator">
                <h1 className="cart__list-baker">Baker: Cara Cakes</h1>
                <table className="cart-table">
                    <thead className="cart-table_header">
                        <td className="cart-table_header-data">Product</td>
                        <td className="cart-table_header-data">Price</td>
                        <td className="cart-table_header-data">Quantity</td>
                        <td className="cart-table_header-data">Total</td>
                    </thead>
                    <tr className="cart-table-row">
                        <td className="cart-table-data cart_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="cart__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="cart-table-data">3000</td>
                        <td className="cart-table-data">3</td>
                        <td className="cart-table-data">9000</td>
                    </tr>
                    <tr className="cart-table-row">
                        <td className="cart-table-data cart_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="cart__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="cart-table-data">40000</td>
                        <td className="cart-table-data">4</td>
                        <td className="cart-table-data">160,000</td>
                    </tr>
                    <tr className="cart-table-row">
                        <td className="cart-table-data cart_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="cart__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="cart-table-data">3000</td>
                        <td className="cart-table-data">3</td>
                        <td className="cart-table-data">9000</td>
                    </tr>
                    <tr className="cart-table-row">
                        <td className="cart-table-data cart_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="cart__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="cart-table-data">3000</td>
                        <td className="cart-table-data">3</td>
                        <td className="cart-table-data">9000</td>
                    </tr>
                    <tr className="cart-table-row">
                        <td colSpan="2" className="cart-table-data cart-coupon">
                            <input type="text" placeholder="Coupon Code" className="cart-coupon_input" /> 
                            <button className="cart-button">Apply</button>
                        </td>
                        <td colSpan="1" className="cart-table-data cart-coupon"><button className="cart-button">Order</button></td>
                        <td colSpan="1" className="cart-table-data">Total: 169,000</td>
                    </tr>
                </table>
            </div>
            <div className="cart__separator">
                <h1 className="cart__list-baker">Baker: Cara Cakes</h1>
                <table className="cart-table">
                    <thead className="cart-table_header">
                        <td className="cart-table_header-data">Product</td>
                        <td className="cart-table_header-data">Price</td>
                        <td className="cart-table_header-data">Quantity</td>
                        <td className="cart-table_header-data">Total</td>
                    </thead>
                    <tr className="cart-table-row">
                        <td className="cart-table-data cart_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="cart__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="cart-table-data">3000</td>
                        <td className="cart-table-data">3</td>
                        <td className="cart-table-data">9000</td>
                    </tr>
                    <tr className="cart-table-row">
                        <td className="cart-table-data cart_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="cart__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="cart-table-data">40000</td>
                        <td className="cart-table-data">4</td>
                        <td className="cart-table-data">160,000</td>
                    </tr>
                    <tr className="cart-table-row">
                        <td colSpan="2" className="cart-table-data cart-coupon">
                            <input type="text" placeholder="Coupon Code" className="cart-coupon_input" /> 
                            <button className="cart-button">Apply</button>
                        </td>
                        <td colSpan="1" className="cart-table-data cart-coupon"><button className="cart-button">Order</button></td>
                        <td colSpan="1" className="cart-table-data">Total: 169,000</td>
                    </tr>
                </table>
            </div>
            <div className="cart__separator">
                <h1 className="cart__list-baker">Baker: Cara Cakes</h1>
                <table className="cart-table">
                    <thead className="cart-table_header">
                        <td className="cart-table_header-data">Product</td>
                        <td className="cart-table_header-data">Price</td>
                        <td className="cart-table_header-data">Quantity</td>
                        <td className="cart-table_header-data">Total</td>
                    </thead>
                    <tr className="cart-table-row">
                        <td className="cart-table-data cart_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="cart__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="cart-table-data">3000</td>
                        <td className="cart-table-data">3</td>
                        <td className="cart-table-data">9000</td>
                    </tr>
                    <tr className="cart-table-row">
                        <td className="cart-table-data cart_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="cart__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="cart-table-data">3000</td>
                        <td className="cart-table-data">3</td>
                        <td className="cart-table-data">9000</td>
                    </tr>
                    <tr className="cart-table-row">
                        <td className="cart-table-data cart_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="cart__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="cart-table-data">3000</td>
                        <td className="cart-table-data">3</td>
                        <td className="cart-table-data">9000</td>
                    </tr>
                    <tr className="cart-table-row">
                        <td className="cart-table-data cart_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="cart__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="cart-table-data">3000</td>
                        <td className="cart-table-data">3</td>
                        <td className="cart-table-data">9000</td>
                    </tr>
                    <tr className="cart-table-row">
                        <td className="cart-table-data cart_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="cart__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="cart-table-data">40000</td>
                        <td className="cart-table-data">4</td>
                        <td className="cart-table-data">160,000</td>
                    </tr>
                    <tr className="cart-table-row">
                        <td colSpan="2" className="cart-table-data cart-coupon">
                            <input type="text" placeholder="Coupon Code" className="cart-coupon_input" /> 
                            <button className="cart-button">Apply</button>
                        </td>
                        <td colSpan="1" className="cart-table-data cart-coupon"><button className="cart-button">Order</button></td>
                        <td colSpan="1" className="cart-table-data">Total: 169,000</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default CartList;
