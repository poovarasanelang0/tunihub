import React from 'react';
import './Footer.css';
import appleLogo from './Assets/apple.png'; // Adjust this path according to your folder structure
import googleLogo from './Assets/google.png'; // Adjust this path according to your folder structure

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section categories">
                <h3>Categories</h3>
                <ul>
                    <li><a href="/men">Men</a></li>
                    <li><a href="/women">Women</a></li>
                    <li><a href="/mens-combo">Mens Combo</a></li>
                    <li><a href="/womens-combo">Womens Combo</a></li>
                </ul>
            </div>

            <div className="footer-section need-help">
                <h3>Need Help</h3>
                <ul>
                    <li><a href="/track-order">Track Your Order</a></li>
                    <li><a href="/returns-exchanges">Returns & Exchanges</a></li>
                    <li><a href="/contact#whatsapp">Chat on WhatsApp</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/faqs">FAQs</a></li>
                </ul>
            </div>

            <div className="footer-section company">
                <h3>Company</h3>
                <ul>
                    <li><a href="/shipping-policy">Shipping Policy</a></li>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/terms-of-service">Terms of Service</a></li>
                </ul>
            </div>

            <div className="footer-section subscribe">
                <h3>Be The First to Know</h3>
                <p>Sign up to stay updated on new products, brand stories, and events</p>
                <div className="subscribe-form">
                    <input type="email" placeholder="Enter Email" />
                    <button>SUBSCRIBE</button>
                </div>
            </div>

            <div className="footer-section social-media">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
            </div>

            <div className="footer-section app-download">
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                    <img src={googleLogo} alt="Get it on Google Play" />
                </a>
                <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer">
                    <img src={appleLogo} alt="Download on the App Store" />
                </a>
            </div>

            <div className="footer-section copyright">
                <p>© 2022-2024, TUNi Tech Solutions Private Limited</p>
            </div>
        </footer>
    );
};

export default Footer;
