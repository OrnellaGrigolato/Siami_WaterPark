import React from 'react';
import './footer.css';
import facebook from './icon-facebook.svg';
import instagram from './icons-instagram.svg';
import youtube from './icon-youtube.svg';

function Footer(props) {
  let date = new Date();
  return (
    <div className="footer">
      <img src="../../../wave.svg" alt="wave" />
      <div className="footer-text">
        <div className="grid-footer-container">
          <div>
            <h4>Contact</h4>
            <ul>
              <div>
                <li>SIAMI WATERPARK, SA</li>
                <li>Natural waterpark</li>
                <a>
                  <li>1485 Old Cleveland Rd, Belmont QLD 4153, Australia</li>
                </a>
                <a>
                  <li>FAQ</li>
                </a>
                <a>
                  <li>siamiwaterpark@siamiwaterpark.com</li>
                </a>
              </div>
              <li>© {date.getFullYear()} SIAMI WATERPARK, SA</li>
              <a>
                <li>Privacy Policy</li>
              </a>
              <a>
                <li>Terms of Use</li>
              </a>
            </ul>
          </div>
          <div>
            <h4>Discover</h4>
            <ul>
              <a>
                <li>Tickets</li>
              </a>
              <a>
                <li>The park</li>
              </a>
              <a>
                <li>Opening calendar</li>
              </a>
              <a>
                <li>Attractions</li>
              </a>
              <a>
                <li>Prepare your visit</li>
              </a>
              <a>
                <li>How to get to the park</li>
              </a>
              <a>
                <li>Blog</li>
              </a>
              <a>
                <li>Safety Rules</li>
              </a>
              <a>
                <li>Contact us</li>
              </a>
              <a>
                <li>Carrers</li>
              </a>
              <a>
                <li>COVID-19 Safety Protocol</li>
              </a>
            </ul>
          </div>
          <div>
            <h4>Share</h4>
            <ul>
              <a>
                <li>
                  <img src={facebook} alt="" />
                </li>
              </a>
              <a>
                <li>
                  <img src={instagram} alt="" />
                </li>
              </a>
              <a>
                <li>
                  <img src={youtube} alt="" />
                </li>
              </a>
            </ul>
          </div>
        </div>
        <p>❤️ Made with love by Ornella Grigolto</p>
      </div>
    </div>
  );
}

export default Footer;
