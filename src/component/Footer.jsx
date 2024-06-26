import React from 'react';
import './Style.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-section">
          <div className="notification-box">
          <img
              src='./src/image/almnd.png'
              alt="Your Logo"
              style={{ width: '150px' }}
            />
            <h3>Newsletter</h3>
            
            <form>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <button className="btn-get-notification" type="submit">
                Get Notification
              </button>
            </form>
          </div>
        </div>
        <div className="footer-section">
          <h3>Policies</h3>
          <ul>
            <li>Almnd Policy</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Socials</h3>
          <ul>
            <li>Facebook</li>
            <li>Linkedin</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Youtube</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>+91 6364840327</p>
          <p>join@almnd.in</p>
          <p>
            2nd Floor, Emirates Arcade, 80 Feet Rd, behind Water Tank,
            Manchegowdana koppalu, II Stage, Vijayanagar, Mysuru, Karnataka
            570017
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 First Floor Infotech Private Limited All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
