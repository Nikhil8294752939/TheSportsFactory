import "./Footer.css"
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT: NEWSLETTER */}
        <div className="footer-newsletter">
          <h2>
            LET’S GET IN<br />TOUCH
          </h2>

          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email" />
            <button>→</button>
          </div>
        </div>

        {/* FOOTER MENU */}
        <div className="footer-column">
          <h4>FOOTER MENU</h4>
          <ul>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Shipping Policy</li>
            <li>Request for Exchange</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* INFORMATION */}
        <div className="footer-column">
          <h4>INFORMATION</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Shop</li>
            <li>Contact</li>
            <li>Exports</li>
          </ul>
        </div>

        {/* COMPANY DETAILS */}
        <div className="footer-column footer-company">
          <h4>MARKETED AND<br />MANUFACTURED BY:</h4>

          <p className="company-name">
            Outdoor Catalyst Media Services Private Limited
          </p>

          <p>
            Urban Pitara is a registered brand of OCMS
          </p>

          <p>
            <strong>Address:</strong> Urban Pitara, Catalyst Building,
            adjoining old citizens bank, pratap bagh, Jalandhar city
            144001, Punjab (India)
          </p>

          <div className="social-icons">
            <span>f</span>
            <span>📷</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
