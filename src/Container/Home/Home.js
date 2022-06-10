import React from 'react';
import { NavLink } from 'react-router-dom';

function Home(props) {
    return (
        <main>
            {/* slider area start */}
            <section className="slider__area slider__area-3 p-relative">
                <div className="slider-active">
                    <div className="single-slider single-slider-2 slider__height-5 d-flex align-items-center" data-background="assets/img/slider/slider-1.jpg">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-6 col-lg-7 col-md-10">
                                    <div className="slider__content slider__content-3 pl-250">
                                        <h2 data-animation="fadeInUp" data-delay=".2s">Handmade <br /> Hand carved Coffee</h2>
                                        <p data-animation="fadeInUp" data-delay=".4s">As rich and unique as the coffee beans it is intended for, this little scoop will make your morning ritual a special occasion every day. </p>
                                        {/* <a href="shop.html" className="os-btn os-btn-2" data-animation="fadeInUp" data-delay=".6s">Discover now</a> */}
                                        <NavLink to={"/shop"} className="os-btn os-btn-2" data-animation="fadeInUp" data-delay=".6s">Discover now</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* slider area end */}
            {/* box */}
            <div className="box-25">
                {/* product area start */}
                <section className="product__area pt-60 pb-100">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__title-wrapper text-center mb-55">
                                    <div className="section__title mb-10">
                                        <h2>Trending Products</h2>
                                    </div>
                                    <div className="section__sub-title">
                                        <p>Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="product__slider-4 owl-carousel">
                                    <div className="product__item">
                                        <div className="product__wrapper mb-60">
                                            <div className="product__thumb">
                                                <a href="product-details.html" className="w-img">
                                                    <img src="assets/img/shop/product/product-1.jpg" alt="product-img" />
                                                    <img className="product__thumb-2" src="assets/img/shop/product/product-10.jpg" alt="product-img" />
                                                </a>
                                                <div className="product__action transition-3">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                                        <i className="fal fa-sliders-h" />
                                                    </a>
                                                    {/* Button trigger modal */}
                                                    <a href="#" data-toggle="modal" data-target="#productModalId">
                                                        <i className="fal fa-search" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product__content p-relative">
                                                <div className="product__content-inner">
                                                    <h4><a href="product-details.html">Wooden container Bowl</a></h4>
                                                    <div className="product__price transition-3">
                                                        <span>$96.00</span>
                                                        <span className="old-price">$96.00</span>
                                                    </div>
                                                </div>
                                                <div className="add-cart p-absolute transition-3">
                                                    <a href="#">+ Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product__wrapper mb-60">
                                            <div className="product__thumb">
                                                <a href="product-details.html" className="w-img">
                                                    <img src="assets/img/shop/product/product-5.jpg" alt="product-img" />
                                                    <img className="product__thumb-2" src="assets/img/shop/product/product-11.jpg" alt="product-img" />
                                                </a>
                                                <div className="product__action transition-3">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                                        <i className="fal fa-sliders-h" />
                                                    </a>
                                                    {/* Button trigger modal */}
                                                    <a href="#" data-toggle="modal" data-target="#productModalId">
                                                        <i className="fal fa-search" />
                                                    </a>
                                                </div>
                                                <div className="product__sale">
                                                    <span className="new">new</span>
                                                    <span className="percent">-16%</span>
                                                </div>
                                            </div>
                                            <div className="product__content p-relative">
                                                <div className="product__content-inner">
                                                    <h4><a href="product-details.html">Wooden container Bowl</a></h4>
                                                    <div className="product__price transition-3">
                                                        <span>$96.00</span>
                                                        <span className="old-price">$96.00</span>
                                                    </div>
                                                </div>
                                                <div className="add-cart p-absolute transition-3">
                                                    <a href="#">+ Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product__item">
                                        <div className="product__wrapper mb-60">
                                            <div className="product__thumb">
                                                <a href="product-details.html" className="w-img">
                                                    <img src="assets/img/shop/product/product-2.jpg" alt="product-img" />
                                                    <img className="product__thumb-2" src="assets/img/shop/product/product-9.jpg" alt="product-img" />
                                                </a>
                                                <div className="product__action transition-3">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                                        <i className="fal fa-sliders-h" />
                                                    </a>
                                                    {/* Button trigger modal */}
                                                    <a href="#" data-toggle="modal" data-target="#productModalId">
                                                        <i className="fal fa-search" />
                                                    </a>
                                                </div>
                                                <div className="product__sale">
                                                    <span className="new">new</span>
                                                    <span className="percent">-16%</span>
                                                </div>
                                            </div>
                                            <div className="product__content p-relative">
                                                <div className="product__content-inner">
                                                    <h4><a href="product-details.html">Wooden container Bowl</a></h4>
                                                    <div className="product__price transition-3">
                                                        <span>$96.00</span>
                                                        <span className="old-price">$96.00</span>
                                                    </div>
                                                </div>
                                                <div className="add-cart p-absolute transition-3">
                                                    <a href="#">+ Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product__wrapper mb-60">
                                            <div className="product__thumb">
                                                <a href="product-details.html" className="w-img">
                                                    <img src="assets/img/shop/product/product-6.jpg" alt="product-img" />
                                                    <img className="product__thumb-2" src="assets/img/shop/product/product-7.jpg" alt="product-img" />
                                                </a>
                                                <div className="product__action transition-3">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                                        <i className="fal fa-sliders-h" />
                                                    </a>
                                                    {/* Button trigger modal */}
                                                    <a href="#" data-toggle="modal" data-target="#productModalId">
                                                        <i className="fal fa-search" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product__content p-relative">
                                                <div className="product__content-inner">
                                                    <h4><a href="product-details.html">Wooden container Bowl</a></h4>
                                                    <div className="product__price transition-3">
                                                        <span>$96.00</span>
                                                        <span className="old-price">$96.00</span>
                                                    </div>
                                                </div>
                                                <div className="add-cart p-absolute transition-3">
                                                    <a href="#">+ Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product__item">
                                        <div className="product__wrapper mb-60">
                                            <div className="product__thumb">
                                                <a href="product-details.html" className="w-img">
                                                    <img src="assets/img/shop/product/product-3.jpg" alt="product-img" />
                                                    <img className="product__thumb-2" src="assets/img/shop/product/product-8.jpg" alt="product-img" />
                                                </a>
                                                <div className="product__action transition-3">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                                        <i className="fal fa-sliders-h" />
                                                    </a>
                                                    {/* Button trigger modal */}
                                                    <a href="#" data-toggle="modal" data-target="#productModalId">
                                                        <i className="fal fa-search" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product__content p-relative">
                                                <div className="product__content-inner">
                                                    <h4><a href="product-details.html">Wooden container Bowl</a></h4>
                                                    <div className="product__price transition-3">
                                                        <span>$96.00</span>
                                                        <span className="old-price">$96.00</span>
                                                    </div>
                                                </div>
                                                <div className="add-cart p-absolute transition-3">
                                                    <a href="#">+ Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product__wrapper mb-60">
                                            <div className="product__thumb">
                                                <a href="product-details.html" className="w-img">
                                                    <img src="assets/img/shop/product/product-7.jpg" alt="product-img" />
                                                    <img className="product__thumb-2" src="assets/img/shop/product/product-1.jpg" alt="product-img" />
                                                </a>
                                                <div className="product__action transition-3">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                                        <i className="fal fa-sliders-h" />
                                                    </a>
                                                    {/* Button trigger modal */}
                                                    <a href="#" data-toggle="modal" data-target="#productModalId">
                                                        <i className="fal fa-search" />
                                                    </a>
                                                </div>
                                                <div className="product__sale">
                                                    <span className="new">new</span>
                                                    <span className="percent">-16%</span>
                                                </div>
                                            </div>
                                            <div className="product__content p-relative">
                                                <div className="product__content-inner">
                                                    <h4><a href="product-details.html">Wooden container Bowl</a></h4>
                                                    <div className="product__price transition-3">
                                                        <span>$96.00</span>
                                                        <span className="old-price">$96.00</span>
                                                    </div>
                                                </div>
                                                <div className="add-cart p-absolute transition-3">
                                                    <a href="#">+ Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product__item">
                                        <div className="product__wrapper mb-60">
                                            <div className="product__thumb">
                                                <a href="product-details.html" className="w-img">
                                                    <img src="assets/img/shop/product/product-4.jpg" alt="product-img" />
                                                    <img className="product__thumb-2" src="assets/img/shop/product/product-12.jpg" alt="product-img" />
                                                </a>
                                                <div className="product__action transition-3">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                                        <i className="fal fa-sliders-h" />
                                                    </a>
                                                    {/* Button trigger modal */}
                                                    <a href="#" data-toggle="modal" data-target="#productModalId">
                                                        <i className="fal fa-search" />
                                                    </a>
                                                </div>
                                                <div className="product__sale">
                                                    <span className="new">new</span>
                                                    <span className="percent">-16%</span>
                                                </div>
                                            </div>
                                            <div className="product__content p-relative">
                                                <div className="product__content-inner">
                                                    <h4><a href="product-details.html">Wooden container Bowl</a></h4>
                                                    <div className="product__price transition-3">
                                                        <span>$96.00</span>
                                                        <span className="old-price">$96.00</span>
                                                    </div>
                                                </div>
                                                <div className="add-cart p-absolute transition-3">
                                                    <a href="#">+ Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product__wrapper mb-60">
                                            <div className="product__thumb">
                                                <a href="product-details.html" className="w-img">
                                                    <img src="assets/img/shop/product/product-8.jpg" alt="product-img" />
                                                    <img className="product__thumb-2" src="assets/img/shop/product/product-3.jpg" alt="product-img" />
                                                </a>
                                                <div className="product__action transition-3">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                                        <i className="fal fa-sliders-h" />
                                                    </a>
                                                    {/* Button trigger modal */}
                                                    <a href="#" data-toggle="modal" data-target="#productModalId">
                                                        <i className="fal fa-search" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product__content p-relative">
                                                <div className="product__content-inner">
                                                    <h4><a href="product-details.html">Wooden container Bowl</a></h4>
                                                    <div className="product__price transition-3">
                                                        <span>$96.00</span>
                                                        <span className="old-price">$96.00</span>
                                                    </div>
                                                </div>
                                                <div className="add-cart p-absolute transition-3">
                                                    <a href="#">+ Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product__item">
                                        <div className="product__wrapper mb-60">
                                            <div className="product__thumb">
                                                <a href="product-details.html" className="w-img">
                                                    <img src="assets/img/shop/product/product-5.jpg" alt="product-img" />
                                                    <img className="product__thumb-2" src="assets/img/shop/product/product-11.jpg" alt="product-img" />
                                                </a>
                                                <div className="product__action transition-3">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                                        <i className="fal fa-sliders-h" />
                                                    </a>
                                                    {/* Button trigger modal */}
                                                    <a href="#" data-toggle="modal" data-target="#productModalId">
                                                        <i className="fal fa-search" />
                                                    </a>
                                                </div>
                                                <div className="product__sale">
                                                    <span className="new">new</span>
                                                </div>
                                            </div>
                                            <div className="product__content p-relative">
                                                <div className="product__content-inner">
                                                    <h4><a href="product-details.html">Wooden container Bowl</a></h4>
                                                    <div className="product__price transition-3">
                                                        <span>$96.00</span>
                                                        <span className="old-price">$96.00</span>
                                                    </div>
                                                </div>
                                                <div className="add-cart p-absolute transition-3">
                                                    <a href="#">+ Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product__wrapper mb-60">
                                            <div className="product__thumb">
                                                <a href="product-details.html" className="w-img">
                                                    <img src="assets/img/shop/product/product-4.jpg" alt="product-img" />
                                                    <img className="product__thumb-2" src="assets/img/shop/product/product-1.jpg" alt="product-img" />
                                                </a>
                                                <div className="product__action transition-3">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                        <i className="fal fa-heart" />
                                                    </a>
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                                        <i className="fal fa-sliders-h" />
                                                    </a>
                                                    {/* Button trigger modal */}
                                                    <a href="#" data-toggle="modal" data-target="#productModalId">
                                                        <i className="fal fa-search" />
                                                    </a>
                                                </div>
                                                <div className="product__sale">
                                                    <span className="new">new</span>
                                                </div>
                                            </div>
                                            <div className="product__content p-relative">
                                                <div className="product__content-inner">
                                                    <h4><a href="product-details.html">Wooden container Bowl</a></h4>
                                                    <div className="product__price transition-3">
                                                        <span>$96.00</span>
                                                        <span className="old-price">$96.00</span>
                                                    </div>
                                                </div>
                                                <div className="add-cart p-absolute transition-3">
                                                    <a href="#">+ Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="product__load-btn text-center mt-25">
                                    <a href="#" className="os-btn os-btn-3">Load More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* product area end */}
                {/* banner area start */}
                <div className="banner__area-2 pb-60">
                    <div className="container-fluid">
                        <div className="row no-gutters">
                            <div className="col-xl-6 col-lg-6">
                                <div className="banner__item-2 banner-right p-relative mb-30 pr-15">
                                    <div className="banner__thumb fix">
                                        <a href="product-details.html" className="w-img"><img src="assets/img/shop/banner/banner-big-1.jpg" alt="banner" /></a>
                                    </div>
                                    <div className="banner__content-2 p-absolute transition-3">
                                        <span>Products Essentials</span>
                                        <h4><a href="product-details.html">Bottle With Wooden Cork</a></h4>
                                        <p>Mirum est notare quam littera gothica, quam nunc putamus <br /> parum claram, anteposuerit litterarum formas.</p>
                                        <a href="product-details.html" className="os-btn os-btn-2">buy now / <span>$59.25</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className=" banner__item-2 banner-left p-relative mb-30 pl-15">
                                    <div className="banner__thumb fix">
                                        <a href="product-details.html" className="w-img"><img src="assets/img/shop/banner/banner-big-2.jpg" alt="banner" /></a>
                                    </div>
                                    <div className="banner__content-2 banner__content-2-right p-absolute transition-3">
                                        <span>Products Furniture</span>
                                        <h4><a href="product-details.html">Hauteville Plywood Chair</a></h4>
                                        <p>Mirum est notare quam littera gothica, quam nunc putamus <br /> parum claram, anteposuerit litterarum formas.</p>
                                        <a href="product-details.html" className="os-btn os-btn-2">buy now / <span>$396.99</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* banner area end */}
                {/* subscribe area start */}
                <section className="subscribe__area pb-100">
                    <div className="container">
                        <div className="subscribe__inner pt-95">
                            <div className="row">
                                <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
                                    <div className="subscribe__content text-center">
                                        <h2>Get Discount Info</h2>
                                        <p>Subscribe to the Outstock mailing list to receive updates on new arrivals, special offers and other discount information.</p>
                                        <div className="subscribe__form">
                                            <form action="#">
                                                <input type="email" placeholder="Subscribe to our newsletter..." />
                                                <button className="os-btn os-btn-2 os-btn-3">subscribe</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* subscribe area end */}
            </div>
            {/* shop modal start */}
            {/* Modal */}
            <div className="modal fade" id="productModalId" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered product-modal" role="document">
                    <div className="modal-content">
                        <div className="product__modal-wrapper p-relative">
                            <div className="product__modal-close p-absolute">
                                <button data-dismiss="modal"><i className="fal fa-times" /></button>
                            </div>
                            <div className="product__modal-inner">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                                        <div className="product__modal-box">
                                            <div className="tab-content mb-20" id="nav-tabContent">
                                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                                    <div className="product__modal-img w-img">
                                                        <img src="assets/img/shop/product/quick-view/quick-big-1.jpg" alt />
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                                    <div className="product__modal-img w-img">
                                                        <img src="assets/img/shop/product/quick-view/quick-big-2.jpg" alt />
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                                    <div className="product__modal-img w-img">
                                                        <img src="assets/img/shop/product/quick-view/quick-big-3.jpg" alt />
                                                    </div>
                                                </div>
                                            </div>
                                            <nav>
                                                <div className="nav nav-tabs justify-content-between" id="nav-tab" role="tablist">
                                                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">
                                                        <div className="product__nav-img w-img">
                                                            <img src="assets/img/shop/product/quick-view/quick-sm-1.jpg" alt />
                                                        </div>
                                                    </a>
                                                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">
                                                        <div className="product__nav-img w-img">
                                                            <img src="assets/img/shop/product/quick-view/quick-sm-2.jpg" alt />
                                                        </div>
                                                    </a>
                                                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">
                                                        <div className="product__nav-img w-img">
                                                            <img src="assets/img/shop/product/quick-view/quick-sm-3.jpg" alt />
                                                        </div>
                                                    </a>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                                        <div className="product__modal-content">
                                            <h4><a href="product-details.html">Wooden container Bowl</a></h4>
                                            <div className="rating rating-shop mb-15">
                                                <ul>
                                                    <li><span><i className="fas fa-star" /></span></li>
                                                    <li><span><i className="fas fa-star" /></span></li>
                                                    <li><span><i className="fas fa-star" /></span></li>
                                                    <li><span><i className="fas fa-star" /></span></li>
                                                    <li><span><i className="fal fa-star" /></span></li>
                                                </ul>
                                                <span className="rating-no ml-10">
                                                    3 rating(s)
                                                </span>
                                            </div>
                                            <div className="product__price-2 mb-25">
                                                <span>$96.00</span>
                                                <span className="old-price">$96.00</span>
                                            </div>
                                            <div className="product__modal-des mb-30">
                                                <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.</p>
                                            </div>
                                            <div className="product__modal-form">
                                                <form action="#">
                                                    <div className="product__modal-input size mb-20">
                                                        <label>Size <i className="fas fa-star-of-life" /></label>
                                                        <select>
                                                            <option>- Please select -</option>
                                                            <option> S</option>
                                                            <option> M</option>
                                                            <option> L</option>
                                                            <option> XL</option>
                                                            <option> XXL</option>
                                                        </select>
                                                    </div>
                                                    <div className="product__modal-input color mb-20">
                                                        <label>Color <i className="fas fa-star-of-life" /></label>
                                                        <select>
                                                            <option>- Please select -</option>
                                                            <option> Black</option>
                                                            <option> Yellow</option>
                                                            <option> Blue</option>
                                                            <option> White</option>
                                                            <option> Ocean Blue</option>
                                                        </select>
                                                    </div>
                                                    <div className="product__modal-required mb-5">
                                                        <span>Repuired Fiields *</span>
                                                    </div>
                                                    <div className="pro-quan-area d-lg-flex align-items-center">
                                                        <div className="product-quantity-title">
                                                            <label>Quantity</label>
                                                        </div>
                                                        <div className="product-quantity">
                                                            <div className="cart-plus-minus"><input type="text" defaultValue={1} /></div>
                                                        </div>
                                                        <div className="pro-cart-btn ml-20">
                                                            <a href="#" className="os-btn os-btn-black os-btn-3 mr-10">+ Add to Cart</a>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* shop modal end */}
        </main>

    );
}

export default Home;