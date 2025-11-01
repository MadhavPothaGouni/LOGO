import "./Footer.css";
const visa = "/assets/payments/visa.svg";
const mastercard = "/assets/payments/mastercard.svg";
const amex = "/assets/payments/amex.svg";
const applepay = "/assets/payments/applepay.svg";
const gpay = "/assets/payments/gpay.svg";


export default function Footer() {
  return (
    <footer className="footer">
      {/* Top subscribe section */}
      <div className="footer-top container">
        <div className="subscribe">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>

          <div className="subscribe-box">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-contact">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h4>CURRENCY</h4>
          <p className="currency-label">• USD</p>
          <small>Transactions will be completed in Euro and currency conversion will be noted on your bill.</small>
        </div>
      </div>

      <hr />

      {/* Bottom columns */}
      <div className="footer-bottom container">
        <div>
          <h4>mëttā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div>
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <i className="ri-instagram-line"></i>
            <i className="ri-facebook-circle-line"></i>
          </div>

          <h4 className="payment-title">mëttā muse ACCEPTS</h4>
          <div className="payment-icons">
            <img src={gpay} alt="" />
            <img src={visa} alt="" />
            <img src={mastercard} alt="" />
            <img src={amex} alt="" />
            <img src={applepay} alt="" />
          </div>
        </div>
      </div>

      <div className="footer-bottom-text">
        Copyright © 2023 mettāmuse. All rights reserved.
      </div>
    </footer>
  );
}
