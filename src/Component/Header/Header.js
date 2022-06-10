import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <div id="header-sticky" className="header__area header__transparent box-25">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-2 col-md-4 col-sm-4">
                            <div className="logo">
                                <a href="index.html"><img src="assets/img/logo/logo.png" alt="logo" /></a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-flex justify-content-center">
                            <div className="main-menu d-none d-lg-block">
                                <nav>
                                    <ul>
                                        <li>
                                            {/* <a href="index.html">Home</a> */}
                                            <NavLink exact to={"/"}>Home</NavLink>

                                        </li>
                                        <li>
                                            {/* <a href="shop.html">Shop</a> */}
                                            <NavLink exact to={"/shop"}>Shop</NavLink>
                                        </li>
                                        <li>
                                            {/* <a href="blog.html">Blog</a> */}
                                            <NavLink to={"/blog"}>Blog</NavLink>
                                        </li>
                                        <li>
                                            {/* <a href="contact.html">Contact</a> */}
                                            <NavLink to={"/contact"}>Contact</NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-8 col-sm-8">
                            <div className="header__right p-relative d-flex justify-content-between justify-content-sm-end align-items-center">
                                <div className="mobile-menu-btn d-lg-none">
                                    <a href="javascript:void(0);" className="mobile-menu-toggle"><i className="fas fa-bars" /></a>
                                </div>
                                <div className="header__action">
                                    <ul>
                                        <li><a href="#" className="search-toggle"><i className="ion-ios-search-strong" /> Search</a></li>
                                        <li><a href="javascript:void(0);" className="cart"><i className="ion-bag" /> Cart <span>(01)</span></a>
                                            <div className="mini-cart">
                                                <div className="mini-cart-inner">
                                                    <ul className="mini-cart-list">
                                                        <li>
                                                            <div className="cart-img f-left">
                                                                <a href="product-details.html">
                                                                    <img src="assets/img/shop/product/cart-sm/16.jpg" alt />
                                                                </a>
                                                            </div>
                                                            <div className="cart-content f-left text-left">
                                                                <h5>
                                                                    <a href="product-details.html">Consectetur adi </a>
                                                                </h5>
                                                                <div className="cart-price">
                                                                    <span className="ammount">1 <i className="fal fa-times" /></span>
                                                                    <span className="price">$ 400</span>
                                                                </div>
                                                            </div>
                                                            <div className="del-icon f-right mt-30">
                                                                <a href="#">
                                                                    <i className="fal fa-times" />
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="cart-img f-left">
                                                                <a href="product-details.html">
                                                                    <img src="assets/img/shop/product/cart-sm/17.jpg" alt />
                                                                </a>
                                                            </div>
                                                            <div className="cart-content f-left text-left">
                                                                <h5>
                                                                    <a href="product-details.html">Wooden container Bowl </a>
                                                                </h5>
                                                                <div className="cart-price">
                                                                    <span className="ammount">1 <i className="fal fa-times" /></span>
                                                                    <span className="price">$ 400</span>
                                                                </div>
                                                            </div>
                                                            <div className="del-icon f-right mt-30">
                                                                <a href="#">
                                                                    <i className="fal fa-times" />
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="cart-img f-left">
                                                                <a href="product-details.html">
                                                                    <img src="assets/img/shop/product/cart-sm/18.jpg" alt />
                                                                </a>
                                                            </div>
                                                            <div className="cart-content f-left text-left">
                                                                <h5>
                                                                    <a href="product-details.html">Black White Towel </a>
                                                                </h5>
                                                                <div className="cart-price">
                                                                    <span className="ammount">1 <i className="fal fa-times" /></span>
                                                                    <span className="price">$ 400</span>
                                                                </div>
                                                            </div>
                                                            <div className="del-icon f-right mt-30">
                                                                <a href="#">
                                                                    <i className="fal fa-times" />
                                                                </a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="total-price d-flex justify-content-between mb-30">
                                                        <span>Subtotal:</span>
                                                        <span>$400.0</span>
                                                    </div>
                                                    <div className="checkout-link">
                                                        {/* <a href="cart.html" className="os-btn">view Cart</a> */}
                                                        <NavLink to={"/cart"} className="os-btn">view Cart</NavLink>
                                                        {/* <a className="os-btn os-btn-black" href="checkout.html">Checkout</a> */}
                                                        <NavLink className="os-btn os-btn-black" to={"/checkout"}>Checkout</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div>
  <div className="scroll-up" id="scroll" style={{display: 'none'}}>
    <a href="javascript:void(0);"><i className="fas fa-level-up-alt" /></a>
  </div>
  <section className="header__search white-bg transition-3">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="header__search-inner text-center">
            <form action="#">
              <div className="header__search-btn">
                <a href="javascript:void(0);" className="header__search-btn-close"><i className="fal fa-times" /></a>
              </div>
              <div className="header__search-header">
                <h3>Search</h3>
              </div>
              <div className="header__search-categories">
                <ul className="search-category">
                  <li><a href="shop.html">All Categories</a></li>
                  <li><a href="shop.html">Accessories</a></li>
                  <li><a href="shop.html">Chair</a></li>
                  <li><a href="shop.html">Tablet</a></li>
                  <li><a href="shop.html">Men</a></li>
                  <li><a href="shop.html">Women</a></li>
                </ul>
              </div>
              <div className="header__search-input p-relative">
                <input type="text" placeholder="Search for products... " />
                <button type="submit"><i className="far fa-search" /></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="body-overlay transition-3" />
  <section className="extra__info transition-3">
    <div className="extra__info-inner">
      <div className="extra__info-close text-right">
        <a href="javascript:void(0);" className="extra__info-close-btn"><i className="fal fa-times" /></a>
      </div>
      <nav className="side-mobile-menu d-block d-lg-none">
        <ul id="mobile-menu-active">
          <li className="active has-dropdown"><a href="index.html">Home</a>
            <ul className="submenu transition-3">
              <li><a href="index.html">Home</a></li>
            </ul>
          </li>
          <li className="mega-menu has-dropdown"><a href="shop.html">Shop</a>
            <ul className="submenu transition-3" data-background="assets/img/bg/mega-menu-bg.jpg">
              <li className="has-dropdown">
                <a href="shop.html">Shop Pages</a>
              </li>
              <li className="has-dropdown">
                <a href="shop.html">Products Pages</a>
              </li>
              <li className="has-dropdown">
                <a href="shop.html">Other Shop Pages</a>
                <ul>
                  <li><a href="wishlist.html">Wishlist</a></li>
                  <li><a href="cart.html">Shopping Cart</a></li>
                  <li><a href="checkout.html">Checkout</a></li>
                  <li><a href="register.html">Register</a></li>
                  <li><a href="login.html">Login</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="has-dropdown"><a href="blog.html">Blog</a>
          </li>
          <li className="has-dropdown"><a href="shop.html">Pages</a>
            <ul className="submenu transition-3">
              <li><a href="wishlist.html">Wishlist</a></li>
              <li><a href="cart.html">Shopping Cart</a></li>
              <li><a href="checkout.html">Checkout</a></li>
              <li><a href="register.html">Register</a></li>
              <li><a href="login.html">Login</a></li>
              <li><a href="error.html">Error 404</a></li>
            </ul>
          </li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </div>
  </section>
  <div className="body-overlay transition-3" />
</div>
</header>
    );
}

export default Header;