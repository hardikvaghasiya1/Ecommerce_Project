import React from 'react';

function Footer(props) {
    return (
        <footer>
            <section className="footer__area footer-bg">
                <div className="footer__top pt-100 pb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                <div className="footer__widget mb-30">
                                    <div className="footer__widget-title mb-25">
                                        <a href="index.html"><img src="assets/img/logo/logo-2.png" alt="logo" /></a>
                                    </div>
                                    <div className="footer__widget-content">
                                        <p>Outstock is a premium Templates theme with advanced admin module. It’s extremely customizable, easy to use and fully responsive and retina ready.</p>
                                        <div className="footer__contact">
                                            <ul>
                                                <li>
                                                    <div className="icon">
                                                        <i className="fal fa-map-marker-alt" />
                                                    </div>
                                                    <div className="text">
                                                        <span>Add: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="fal fa-envelope-open-text" />
                                                    </div>
                                                    <div className="text">
                                                        <span>Email: <a href="https://themepure.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="adeec2c3d9ccced9edcfccdec4ced9c5c8c0c883cec2c0">[email&nbsp;protected]</a></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="fal fa-phone-alt" />
                                                    </div>
                                                    <div className="text">
                                                        <span>Phone Number: (800) 123 456 789</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                                <div className="footer__widget mb-30">
                                    <div className="footer__widget-title">
                                        <h5>information</h5>
                                    </div>
                                    <div className="footer__widget-content">
                                        <div className="footer__links">
                                            <ul>
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">Careers</a></li>
                                                <li><a href="#">Delivery Inforamtion</a></li>
                                                <li><a href="#">Privacy Policy</a></li>
                                                <li><a href="#">Terms &amp; Condition</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                                <div className="footer__widget mb-30">
                                    <div className="footer__widget-title mb-25">
                                        <h5>Customer Service</h5>
                                    </div>
                                    <div className="footer__widget-content">
                                        <div className="footer__links">
                                            <ul>
                                                <li><a href="#">Shipping Policy</a></li>
                                                <li><a href="#">Help &amp; Contact Us</a></li>
                                                <li><a href="#">Returns &amp; Refunds</a></li>
                                                <li><a href="#">Online Stores</a></li>
                                                <li><a href="#">Terms &amp; Conditions</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-7">
                                <div className="footer__copyright">
                                    <p>Copyright © <a href="index.html">Outstock</a> all rights reserved. Powered by <a href="index.html">Theme_pure</a></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-5">
                                <div className="footer__social f-right">
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
                    </div>
                </div>
            </section>
        </footer>

    );
}

export default Footer;