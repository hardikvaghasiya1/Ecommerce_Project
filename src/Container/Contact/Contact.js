import React from 'react';

function Contact(props) {
    return (
        <main>
            {/* page title area start */}
            <section className="page__title p-relative d-flex align-items-center" data-background="assets/img/page-title/page-title-2.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page__title-inner text-center">
                                <h1>Contact Us</h1>
                                <div className="page__title-breadcrumb">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                            <li className="breadcrumb-item active" aria-current="page"> Contact</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* page title area end */}
            {/* contact area start */}
            <section className="contact__area pb-100 pt-95">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="contact__info">
                                <h3>Find us here.</h3>
                                <ul className="mb-55">
                                    <li className="d-flex mb-35">
                                        <div className="contact__info-icon mr-20">
                                            <i className="fal fa-map-marker-alt" />
                                        </div>
                                        <div className="contact__info-content">
                                            <h6>Address:</h6>
                                            <span>1234 Heaven Stress, Beverly Hill, Melbourne, USA.</span>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-35">
                                        <div className="contact__info-icon mr-20">
                                            <i className="fal fa-envelope-open-text" />
                                        </div>
                                        <div className="contact__info-content">
                                            <h6>Email:</h6>
                                            <span><a href="https://themepure.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="92d1fdfce6f3f1e6d2f7e0f7fce6faf7fff7bcf1fdff">[email&nbsp;protected]</a></span>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-35">
                                        <div className="contact__info-icon mr-20">
                                            <i className="fal fa-phone-alt" />
                                        </div>
                                        <div className="contact__info-content">
                                            <h6>Number Phone:</h6>
                                            <span>(800) 123 456 789, (800) 987 654 321</span>
                                        </div>
                                    </li>
                                </ul>
                                <p>Outstock is a premium Templates theme with advanced admin module. It’s extremely customizable, easy to use and fully responsive and retina ready. Vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                                <div className="contact__social">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-dribbble" /></a></li>
                                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fab fa-behance" /></a></li>
                                        <li><a href="#"><i className="fas fa-share-alt" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="contact__form">
                                <h3>Contact Us.</h3>
                                <form action="https://themepure.net/template/outstock-prv/outstock/assets/mail.php" id="contact-form">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact__input">
                                                <label>Name <span className="required">*</span></label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact__input">
                                                <label>Email <span className="required">*</span></label>
                                                <input type="email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="contact__input">
                                                <label>Subject <span className="required">*</span></label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="contact__input">
                                                <label>Message</label>
                                                <textarea cols={30} rows={10} defaultValue={""} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="contact__submit">
                                                <button type="submit" className="os-btn os-btn-black">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <p className="ajax-response" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* contact area end */}
            {/* contact map area start */}
            <section className="contact__map">
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div className="col-xl-12">
                            <div className="contact__map-wrapper p-relative">
                                <iframe src="https://maps.google.com/maps?hl=en&q=Dhaka+()&ie=UTF8&t=&z=10&iwloc=B&output=embed" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* contact map area end */}
            {/* subscribe area start */}
            <section className="subscribe__area pb-100">
                <div className="container">
                    <div className="subscribe__inner subscribe__inner-2 pt-95">
                        <div className="row">
                            <div className="col-xl-8 offset-xl-2">
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
        </main>

    );
}

export default Contact;