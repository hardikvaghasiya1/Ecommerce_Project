import React from 'react';

function Shop(props) {
    return (
        <main>
            {/* page title area start */}
            <section className="page__title p-relative d-flex align-items-center" data-background="assets/img/page-title/page-title-1.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page__title-inner text-center">
                                <h1>Shop</h1>
                                <div className="page__title-breadcrumb">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                            <li className="breadcrumb-item active" aria-current="page"> Shop</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* page title area end */}
            {/* shop area start */}
            <section className="shop__area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="shop__content-area">
                                <div className="shop__header d-sm-flex justify-content-between align-items-center mb-40">
                                    <div className="shop__header-left">
                                        <div className="show-text">
                                            <span>Showing 1–12 of 20 results</span>
                                        </div>
                                    </div>
                                    <div className="shop__header-right d-flex align-items-center justify-content-between justify-content-sm-end">
                                        <div className="sort-wrapper mr-30 pr-25 p-relative">
                                            <select>
                                                <option value={1}>Default Sorting</option>
                                                <option value={2}>Type 1</option>
                                                <option value={3}>Type 2</option>
                                                <option value={4}>Type 3</option>
                                                <option value={5}>Type 4</option>
                                            </select>
                                        </div>
                                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="pills-grid-tab" data-toggle="pill" href="#pills-grid" role="tab" aria-controls="pills-grid" aria-selected="true"><i className="fas fa-th" /></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="pills-list-tab" data-toggle="pill" href="#pills-list" role="tab" aria-controls="pills-list" aria-selected="false"><i className="fas fa-list-ul" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-grid" role="tabpanel" aria-labelledby="pills-grid-tab">
                                        <div className="row custom-row-10">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 custom-col-10">
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
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 custom-col-10">
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
                                                    </div>
                                                    <div className="product__content p-relative">
                                                        <div className="product__content-inner">
                                                            <h4><a href="product-details.html">Wooden container Bowl</a></h4>
                                                            <div className="product__price transition-3">
                                                                <span>$40.00</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-cart p-absolute transition-3">
                                                            <a href="#">+ Add to Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 custom-col-10">
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
                                                        <div className="product__sale">
                                                            <span className="new">new</span>
                                                        </div>
                                                    </div>
                                                    <div className="product__content p-relative">
                                                        <div className="product__content-inner">
                                                            <h4><a href="product-details.html">Wooden container Bowl</a></h4>
                                                            <div className="product__price transition-3">
                                                                <span>$70.00</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-cart p-absolute transition-3">
                                                            <a href="#">+ Add to Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 custom-col-10">
                                                <div className="product__wrapper mb-60">
                                                    <div className="product__thumb">
                                                        <a href="product-details.html" className="w-img">
                                                            <img src="assets/img/shop/product/product-4.jpg" alt="product-img" />
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
                                                                <span>$70.00</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-cart p-absolute transition-3">
                                                            <a href="#">+ Add to Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 custom-col-10">
                                                <div className="product__wrapper mb-60">
                                                    <div className="product__thumb">
                                                        <a href="product-details.html" className="w-img">
                                                            <img src="assets/img/shop/product/product-5.jpg" alt="product-img" />
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
                                                    </div>
                                                    <div className="product__content p-relative">
                                                        <div className="product__content-inner">
                                                            <h4><a href="product-details.html">Wooden container Bowl</a></h4>
                                                            <div className="product__price transition-3">
                                                                <span>$85.00</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-cart p-absolute transition-3">
                                                            <a href="#">+ Add to Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 custom-col-10">
                                                <div className="product__wrapper mb-60">
                                                    <div className="product__thumb">
                                                        <a href="product-details.html" className="w-img">
                                                            <img src="assets/img/shop/product/product-6.jpg" alt="product-img" />
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
                                                            <span className="percent">-20%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product__content p-relative">
                                                        <div className="product__content-inner">
                                                            <h4><a href="product-details.html">Wooden container Bowl</a></h4>
                                                            <div className="product__price transition-3">
                                                                <span>$30.00</span>
                                                                <span className="old-price">$50.00</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-cart p-absolute transition-3">
                                                            <a href="#">+ Add to Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 custom-col-10">
                                                <div className="product__wrapper mb-60">
                                                    <div className="product__thumb">
                                                        <a href="product-details.html" className="w-img">
                                                            <img src="assets/img/shop/product/product-7.jpg" alt="product-img" />
                                                            <img className="product__thumb-2" src="assets/img/shop/product/product-4.jpg" alt="product-img" />
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
                                                            <span className="percent">-20%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product__content p-relative">
                                                        <div className="product__content-inner">
                                                            <h4><a href="product-details.html">Wooden container Bowl</a></h4>
                                                            <div className="product__price transition-3">
                                                                <span>$30.00</span>
                                                                <span className="old-price">$50.00</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-cart p-absolute transition-3">
                                                            <a href="#">+ Add to Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 custom-col-10">
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
                                                                <span>$30.00</span>
                                                                <span className="old-price">$50.00</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-cart p-absolute transition-3">
                                                            <a href="#">+ Add to Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 custom-col-10">
                                                <div className="product__wrapper mb-60">
                                                    <div className="product__thumb">
                                                        <a href="product-details.html" className="w-img">
                                                            <img src="assets/img/shop/product/product-9.jpg" alt="product-img" />
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
                                                                <span>$30.00</span>
                                                                <span className="old-price">$50.00</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-cart p-absolute transition-3">
                                                            <a href="#">+ Add to Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 custom-col-10">
                                                <div className="product__wrapper mb-60">
                                                    <div className="product__thumb">
                                                        <a href="product-details.html" className="w-img">
                                                            <img src="assets/img/shop/product/product-10.jpg" alt="product-img" />
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
                                                    </div>
                                                    <div className="product__content p-relative">
                                                        <div className="product__content-inner">
                                                            <h4><a href="product-details.html">Wooden container Bowl</a></h4>
                                                            <div className="product__price transition-3">
                                                                <span>$30.00</span>
                                                                <span className="old-price">$50.00</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-cart p-absolute transition-3">
                                                            <a href="#">+ Add to Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 custom-col-10">
                                                <div className="product__wrapper mb-60">
                                                    <div className="product__thumb">
                                                        <a href="product-details.html" className="w-img">
                                                            <img src="assets/img/shop/product/product-11.jpg" alt="product-img" />
                                                            <img className="product__thumb-2" src="assets/img/shop/product/product-2.jpg" alt="product-img" />
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
                                                                <span>$30.00</span>
                                                                <span className="old-price">$50.00</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-cart p-absolute transition-3">
                                                            <a href="#">+ Add to Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 custom-col-10">
                                                <div className="product__wrapper mb-60">
                                                    <div className="product__thumb">
                                                        <a href="product-details.html" className="w-img">
                                                            <img src="assets/img/shop/product/product-12.jpg" alt="product-img" />
                                                            <img className="product__thumb-2" src="assets/img/shop/product/product-5.jpg" alt="product-img" />
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
                                                            <span className="percent">-20%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product__content p-relative">
                                                        <div className="product__content-inner">
                                                            <h4><a href="product-details.html">Wooden container Bowl</a></h4>
                                                            <div className="product__price transition-3">
                                                                <span>$30.00</span>
                                                                <span className="old-price">$50.00</span>
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
                                    <div className="tab-pane fade" id="pills-list" role="tabpanel" aria-labelledby="pills-list-tab">
                                        <div className="product__wrapper mb-40">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-4">
                                                    <div className="product__thumb">
                                                        <a href="product-details.html" className="w-img">
                                                            <img src="assets/img/shop/product/product-1.jpg" alt="product-img" />
                                                            <img className="product__thumb-2" src="assets/img/shop/product/product-10.jpg" alt="product-img" />
                                                        </a>
                                                        <div className="product__sale ">
                                                            <span className="new">new</span>
                                                            <span className="percent">-16%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-8">
                                                    <div className="product__content p-relative">
                                                        <div className="product__content-inner list">
                                                            <h4><a href="product-details.html">Wooden container Bowl</a></h4>
                                                            <div className="product__price-2 mb-10">
                                                                <span>$96.00</span>
                                                                <span className="old-price">$96.00</span>
                                                            </div>
                                                            <p>Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus.</p>
                                                            <div className="product__list mb-30">
                                                                <ul>
                                                                    <li><span>Light green crewneck sweatshirt.</span></li>
                                                                    <li><span>Hand pockets.</span></li>
                                                                    <li><span>Relaxed fit.</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="add-cart-list d-sm-flex align-items-center">
                                                            <a href="#" className="add-cart-btn mr-10">+ Add to Cart</a>
                                                            <div className="product__action-2 transition-3 mr-20">
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
                                                        {/* shop modal start */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product__wrapper mb-40">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-4">
                                                    <div className="product__thumb">
                                                        <a href="product-details.html" className="w-img">
                                                            <img src="assets/img/shop/product/product-2.jpg" alt="product-img" />
                                                            <img className="product__thumb-2" src="assets/img/shop/product/product-9.jpg" alt="product-img" />
                                                        </a>
                                                        <div className="product__sale ">
                                                            <span className="new">new</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-8">
                                                    <div className="product__content p-relative">
                                                        <div className="product__content-inner list">
                                                            <h4><a href="product-details.html">Wooden container Bowl</a></h4>
                                                            <div className="product__price-2 mb-10">
                                                                <span>$60.00</span>
                                                            </div>
                                                            <p>Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus.</p>
                                                            <div className="product__list mb-30">
                                                                <ul>
                                                                    <li><span>Light green crewneck sweatshirt.</span></li>
                                                                    <li><span>Hand pockets.</span></li>
                                                                    <li><span>Relaxed fit.</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="add-cart-list d-sm-flex align-items-center">
                                                            <a href="#" className="add-cart-btn mr-10">+ Add to Cart</a>
                                                            <div className="product__action-2 transition-3 mr-20">
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
                                                        {/* shop modal start */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product__wrapper mb-40">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-4">
                                                    <div className="product__thumb">
                                                        <a href="product-details.html" className="w-img">
                                                            <img src="assets/img/shop/product/product-3.jpg" alt="product-img" />
                                                            <img className="product__thumb-2" src="assets/img/shop/product/product-8.jpg" alt="product-img" />
                                                        </a>
                                                        <div className="product__sale ">
                                                            <span className="new">new</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-8">
                                                    <div className="product__content p-relative">
                                                        <div className="product__content-inner list">
                                                            <h4><a href="product-details.html">Wooden container Bowl</a></h4>
                                                            <div className="product__price-2 mb-10">
                                                                <span>$50.00</span>
                                                            </div>
                                                            <p>Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus.</p>
                                                            <div className="product__list mb-30">
                                                                <ul>
                                                                    <li><span>Light green crewneck sweatshirt.</span></li>
                                                                    <li><span>Hand pockets.</span></li>
                                                                    <li><span>Relaxed fit.</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="add-cart-list d-sm-flex align-items-center">
                                                            <a href="#" className="add-cart-btn mr-10">+ Add to Cart</a>
                                                            <div className="product__action-2 transition-3 mr-20">
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
                                                        {/* shop modal start */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product__wrapper mb-40">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-4">
                                                    <div className="product__thumb">
                                                        <a href="product-details.html" className="w-img">
                                                            <img src="assets/img/shop/product/product-4.jpg" alt="product-img" />
                                                            <img className="product__thumb-2" src="assets/img/shop/product/product-7.jpg" alt="product-img" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-8">
                                                    <div className="product__content p-relative">
                                                        <div className="product__content-inner list">
                                                            <h4><a href="product-details.html">Wooden container Bowl</a></h4>
                                                            <div className="product__price-2 mb-10">
                                                                <span>$50.00</span>
                                                                <span className="old-price">$70</span>
                                                            </div>
                                                            <p>Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus.</p>
                                                            <div className="product__list mb-30">
                                                                <ul>
                                                                    <li><span>Light green crewneck sweatshirt.</span></li>
                                                                    <li><span>Hand pockets.</span></li>
                                                                    <li><span>Relaxed fit.</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="add-cart-list d-sm-flex align-items-center">
                                                            <a href="#" className="add-cart-btn mr-10">+ Add to Cart</a>
                                                            <div className="product__action-2 transition-3 mr-20">
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
                                                        {/* shop modal start */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product__wrapper mb-40">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-4">
                                                    <div className="product__thumb">
                                                        <a href="product-details.html" className="w-img">
                                                            <img src="assets/img/shop/product/product-5.jpg" alt="product-img" />
                                                            <img className="product__thumb-2" src="assets/img/shop/product/product-11.jpg" alt="product-img" />
                                                        </a>
                                                        <div className="product__sale ">
                                                            <span className="new">new</span>
                                                            <span className="percent">-50%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-8">
                                                    <div className="product__content p-relative">
                                                        <div className="product__content-inner list">
                                                            <h4><a href="product-details.html">Wooden container Bowl</a></h4>
                                                            <div className="product__price-2 mb-10">
                                                                <span>$60.00</span>
                                                                <span className="old-price">$120.00</span>
                                                            </div>
                                                            <p>Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus.</p>
                                                            <div className="product__list mb-30">
                                                                <ul>
                                                                    <li><span>Light green crewneck sweatshirt.</span></li>
                                                                    <li><span>Hand pockets.</span></li>
                                                                    <li><span>Relaxed fit.</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="add-cart-list d-sm-flex align-items-center">
                                                            <a href="#" className="add-cart-btn mr-10">+ Add to Cart</a>
                                                            <div className="product__action-2 transition-3 mr-20">
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
                                                        {/* shop modal start */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-40">
                                    <div className="col-xl-12">
                                        <div className="shop-pagination-wrapper d-md-flex justify-content-between align-items-center">
                                            <div className="basic-pagination">
                                                <ul>
                                                    <li><a href="#"><i className="fal fa-angle-left" /></a></li>
                                                    <li><a href="#">01</a></li>
                                                    <li className="active"><a href="#">02</a></li>
                                                    <li><a href="#">03</a></li>
                                                    <li><a href="#"><i className="fas fa-ellipsis-h" /></a></li>
                                                    <li><a href="#"><i className="fal fa-angle-right" /></a></li>
                                                </ul>
                                            </div>
                                            <div className="shop__header-left">
                                                <div className="show-text bottom">
                                                    <span>Showing 1–12 of 20 results</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* shop area end */}
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
                                                            <a href="#" className="add-cart-btn mr-10">+ Add to Cart</a>
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

export default Shop;