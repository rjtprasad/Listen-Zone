import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            voluptatem rerum a ipsa itaque. Dignissimos dicta ullam repellat
            voluptas cum!
          </div>
        </div>

        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Kayaloram Rd, Punnamada, Kottankulangara, Alappuzha, Kerala,
              688006
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 0471 272 0261</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: store@dev.com</div>
          </div>
        </div>

        <div className="col">
          <div className="title">Category</div>
          <span className="text">Headphones</span>
          <span className="text">Earphones</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theater</span>
          <span className="text">Music System</span>
        </div>

        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Returns</span>
          <span className="text">Contact Us</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Privacy Policy</span>
        </div>

      </div>

      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
          LISTEN ZONE 2024 CREATED BY RAJAT. PREMIUM E-COMMERCE
          SOLUTIONS.
          </span>
          <img src={Payment} alt="payment"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
