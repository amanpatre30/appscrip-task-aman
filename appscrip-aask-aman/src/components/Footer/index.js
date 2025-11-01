import "./index.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-contact-container">
        <div>
          <div>
            <h4 className="footer-search-heading">BE THE FIRST TO KNOW</h4>
            <p className="footer-seach-paragraph">
              Sign up for updates from metta muse
            </p>
          </div>
          <div className="footer-search-container">
            <input
              type="text"
              placeholder="Enter your e-mail..."
              className="footer-email-input"
            />
            <buttont type="button" className="subscribe-button">
              SUBSCRIBE
            </buttont>
          </div>
        </div>
        <div>
          <h4 className="contact-heading">CONTACT US</h4>
          <p className="contact-number">+44 221 133 5360</p>
          <p className="contact-email">customer@mettamuse.com</p>
          <h4 className="currency">CURRENCY</h4>
          <div>
            <img src="" alt="america" className="country-flag" />
            <span>.USD</span>
            <p className="description">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-about-container">
        <div className="about-container">
          <h4 className="about-heading-section">metta muse</h4>
          <p>About Us</p>
          <p>Storeis</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>
        <div className="about-container">
          <h4 className="about-heading-section">Quick Links</h4>
          <p>Order & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="about-container">
          <h4 className="about-heading-section">FOLLOW US</h4>
          <div>
            <img src="/assets/Frame28.png" alt="" className="logo" />
          </div>
          <h4 className="about-heading-section">metta muse ACCEPTS</h4>
          <img
            src="/assets/Frame136278.png"
            alt=""
            className="payment-method-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
