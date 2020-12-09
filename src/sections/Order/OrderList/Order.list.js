import React from 'react';

import './Order.list.css'
import { dons3, pans2 } from '../../../res/img';

const OrderList = () => {
    return (
        <div className="order__list">
            <div className="order__separator">
                <h1 className="order__list-baker">Baker: Cara Cakes</h1>
                <table className="order-table">
                    <thead className="order-table_header">
                        <td className="order-table_header-data">Product</td>
                        <td className="order-table_header-data">Price</td>
                        <td className="order-table_header-data">Quantity</td>
                        <td className="order-table_header-data">Total</td>
                    </thead>
                    <tr className="order-table-row">
                        <td className="order-table-data order_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="order__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="order-table-data">3000</td>
                        <td className="order-table-data">3</td>
                        <td className="order-table-data">9000</td>
                    </tr>
                    <tr className="order-table-row">
                        <td className="order-table-data order_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="order__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="order-table-data">40000</td>
                        <td className="order-table-data">4</td>
                        <td className="order-table-data">160,000</td>
                    </tr>
                    <tr className="order-table-row">
                        <td colSpan="2" className="order-table-data order-coupon">
                            <h3>Order Status: Processing</h3>
                        </td>
                        <td colSpan="1" className="order-table-data order-coupon"><button className="order-button">Details</button></td>
                        <td colSpan="1" className="order-table-data">Total: 169,000</td>
                    </tr>
                </table>
            </div>
            <div className="order__separator">
                <h1 className="order__list-baker">Baker: Cara Cakes</h1>
                <table className="order-table">
                    <thead className="order-table_header">
                        <td className="order-table_header-data">Product</td>
                        <td className="order-table_header-data">Price</td>
                        <td className="order-table_header-data">Quantity</td>
                        <td className="order-table_header-data">Total</td>
                    </thead>
                    <tr className="order-table-row">
                        <td className="order-table-data order_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="order__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="order-table-data">3000</td>
                        <td className="order-table-data">3</td>
                        <td className="order-table-data">9000</td>
                    </tr>
                    <tr className="order-table-row">
                        <td className="order-table-data order_table-imageContainer">
                            <img src={dons3} alt="Pastry Name" className="order__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="order-table-data">3000</td>
                        <td className="order-table-data">3</td>
                        <td className="order-table-data">9000</td>
                    </tr>
                    <tr className="order-table-row">
                        <td className="order-table-data order_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="order__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="order-table-data">40000</td>
                        <td className="order-table-data">4</td>
                        <td className="order-table-data">160,000</td>
                    </tr>
                    <tr className="order-table-row">
                        <td colSpan="2" className="order-table-data order-coupon">
                            <h3>Order Status: Processing</h3>
                        </td>
                        <td colSpan="1" className="order-table-data order-coupon"><button className="order-button">Details</button></td>
                        <td colSpan="1" className="order-table-data">Total: 169,000</td>
                    </tr>
                </table>
            </div>
            <div className="order__separator">
                <h1 className="order__list-baker">Baker: Cara Cakes</h1>
                <table className="order-table">
                    <thead className="order-table_header">
                        <td className="order-table_header-data">Product</td>
                        <td className="order-table_header-data">Price</td>
                        <td className="order-table_header-data">Quantity</td>
                        <td className="order-table_header-data">Total</td>
                    </thead>
                    <tr className="order-table-row">
                        <td className="order-table-data order_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="order__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="order-table-data">3000</td>
                        <td className="order-table-data">3</td>
                        <td className="order-table-data">9000</td>
                    </tr>
                    <tr className="order-table-row">
                        <td className="order-table-data order_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="order__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="order-table-data">40000</td>
                        <td className="order-table-data">4</td>
                        <td className="order-table-data">160,000</td>
                    </tr>
                    <tr className="order-table-row">
                        <td className="order-table-data order_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="order__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="order-table-data">3000</td>
                        <td className="order-table-data">3</td>
                        <td className="order-table-data">9000</td>
                    </tr>
                    <tr className="order-table-row">
                        <td className="order-table-data order_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="order__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="order-table-data">3000</td>
                        <td className="order-table-data">3</td>
                        <td className="order-table-data">9000</td>
                    </tr>
                    <tr className="order-table-row">
                        <td colSpan="2" className="order-table-data order-coupon">
                            <h3>Order Status: Processing</h3>
                        </td>
                        <td colSpan="1" className="order-table-data order-coupon"><button className="order-button">Details</button></td>
                        <td colSpan="1" className="order-table-data">Total: 169,000</td>
                    </tr>
                </table>
            </div>
            <div className="order__separator">
                <h1 className="order__list-baker">Baker: Cara Cakes</h1>
                <table className="order-table">
                    <thead className="order-table_header">
                        <td className="order-table_header-data">Product</td>
                        <td className="order-table_header-data">Price</td>
                        <td className="order-table_header-data">Quantity</td>
                        <td className="order-table_header-data">Total</td>
                    </thead>
                    <tr className="order-table-row">
                        <td className="order-table-data order_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="order__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="order-table-data">3000</td>
                        <td className="order-table-data">3</td>
                        <td className="order-table-data">9000</td>
                    </tr>
                    <tr className="order-table-row">
                        <td className="order-table-data order_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="order__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="order-table-data">40000</td>
                        <td className="order-table-data">4</td>
                        <td className="order-table-data">160,000</td>
                    </tr>
                    <tr className="order-table-row">
                        <td colSpan="2" className="order-table-data order-coupon">
                            <h3>Order Status: Processing</h3>
                        </td>
                        <td colSpan="1" className="order-table-data order-coupon"><button className="order-button">Details</button></td>
                        <td colSpan="1" className="order-table-data">Total: 169,000</td>
                    </tr>
                </table>
            </div>
            <div className="order__separator">
                <h1 className="order__list-baker">Baker: Cara Cakes</h1>
                <table className="order-table">
                    <thead className="order-table_header">
                        <td className="order-table_header-data">Product</td>
                        <td className="order-table_header-data">Price</td>
                        <td className="order-table_header-data">Quantity</td>
                        <td className="order-table_header-data">Total</td>
                    </thead>
                    <tr className="order-table-row">
                        <td className="order-table-data order_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="order__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="order-table-data">3000</td>
                        <td className="order-table-data">3</td>
                        <td className="order-table-data">9000</td>
                    </tr>
                    <tr className="order-table-row">
                        <td className="order-table-data order_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="order__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="order-table-data">3000</td>
                        <td className="order-table-data">3</td>
                        <td className="order-table-data">9000</td>
                    </tr>
                    <tr className="order-table-row">
                        <td className="order-table-data order_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="order__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="order-table-data">3000</td>
                        <td className="order-table-data">3</td>
                        <td className="order-table-data">9000</td>
                    </tr>
                    <tr className="order-table-row">
                        <td className="order-table-data order_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="order__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="order-table-data">3000</td>
                        <td className="order-table-data">3</td>
                        <td className="order-table-data">9000</td>
                    </tr>
                    <tr className="order-table-row">
                        <td className="order-table-data order_table-imageContainer">
                            <img src={pans2} alt="Pastry Name" className="order__table--data-image" />
                            <p>Ice Cake</p>
                        </td>
                        <td className="order-table-data">40000</td>
                        <td className="order-table-data">4</td>
                        <td className="order-table-data">160,000</td>
                    </tr>
                    <tr className="order-table-row">
                        <td colSpan="2" className="order-table-data order-coupon">
                            <h3>Order Status: Processing</h3>
                        </td>
                        <td colSpan="1" className="order-table-data order-coupon"><button className="order-button">Details</button></td>
                        <td colSpan="1" className="order-table-data">Total: 169,000</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default OrderList;
