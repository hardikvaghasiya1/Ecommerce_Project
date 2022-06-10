import React from 'react';

function Cart(props) {
    return (
        <main>
            {/* page title area start */}
            <section className="page__title p-relative d-flex align-items-center" data-background="assets/img/page-title/page-title-1.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page__title-inner text-center">
                                <h1>Your Cart</h1>
                                <div className="page__title-breadcrumb">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                            <li className="breadcrumb-item active" aria-current="page"> Cart</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* page title area end */}
            {/* Cart Area Strat*/}
            <section className="cart-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form action="#">
                                <div className="table-content table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Images</th>
                                                <th className="cart-product-name">Product</th>
                                                <th className="product-price">Unit Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-subtotal">Total</th>
                                                <th className="product-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product-thumbnail"><a href="product-details.html"><img src="assets/img/shop/product/product-2.jpg" alt /></a></td>
                                                <td className="product-name"><a href="product-details.html">Bakix Furniture</a></td>
                                                <td className="product-price"><span className="amount">$130.00</span></td>
                                                <td className="product-quantity">
                                                    <div className="cart-plus-minus"><input type="text" defaultValue={1} /></div>
                                                </td>
                                                <td className="product-subtotal"><span className="amount">$130.00</span></td>
                                                <td className="product-remove"><a href="#"><i className="fa fa-times" /></a></td>
                                            </tr>
                                            <tr>
                                                <td className="product-thumbnail"><a href="product-details.html"><img src="assets/img/shop/product/product-4.jpg" alt /></a></td>
                                                <td className="product-name"><a href="product-details.html">Sujon Chair Set</a></td>
                                                <td className="product-price"><span className="amount">$120.50</span></td>
                                                <td className="product-quantity">
                                                    <div className="cart-plus-minus"><input type="text" defaultValue={1} /></div>
                                                </td>
                                                <td className="product-subtotal"><span className="amount">$120.50</span></td>
                                                <td className="product-remove"><a href="#"><i className="fa fa-times" /></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="coupon-all">
                                            <div className="coupon">
                                                <input id="coupon_code" className="input-text" name="coupon_code" defaultValue placeholder="Coupon code" type="text" />
                                                <button className="os-btn os-btn-black" name="apply_coupon" type="submit">Apply
                                                    coupon</button>
                                            </div>
                                            <div className="coupon2">
                                                <button className="os-btn os-btn-black" name="update_cart" type="submit">Update cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5 ml-auto">
                                        <div className="cart-page-total">
                                            <h2>Cart totals</h2>
                                            <ul className="mb-20">
                                                <li>Subtotal <span>$250.00</span></li>
                                                <li>Total <span>$250.00</span></li>
                                            </ul>
                                            <a className="os-btn" href="checkout.html">Proceed to checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* Cart Area End*/}
        </main>

    );
}

export default Cart;