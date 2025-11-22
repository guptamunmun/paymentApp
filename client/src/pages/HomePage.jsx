import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "@windmill/react-ui";
import { Carousel } from "react-responsive-carousel";

import banner1 from "../images/banner1.jpeg";
import banner2 from "../images/banner2.jpeg";
import banner3 from "../images/banner3.webp";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../cssFiles/home.css";

export default function HomePage() {
  const [balance] = useState(12500.5);

  return (
    <div className="homepage-container">

      {/* HEADER */}
      <div className="header-bar">
        <h1 className="header-title">My Wallet</h1>
      </div>

      {/* WALLET CARD */}
      <div className="wallet-card">
        <p className="wallet-label">Available Balance</p>
        <p className="wallet-amount">₹{balance.toLocaleString()}</p>

        <button
          className="wallet-check-btn"
          onClick={() => alert(`Your balance is ₹${balance.toLocaleString()}`)}
        >
          Check Balance
        </button>
      </div>

      {/* CAROUSEL WITH BUTTONS */}
      <Card className="carousel-card">
        <CardBody className="p-0">
          <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
            {[banner1, banner2, banner3].map((img, i) => (
              <div key={i} className="carousel-slide">
                <img src={img} alt="slide" className="carousel-img" />

                <div className="carousel-actions">
                  <Link to="/pay">
                    <button className="action-btn pay-btn">Pay</button>
                  </Link>

                  <Link to="/receive">
                    <button className="action-btn receive-btn">Receive</button>
                  </Link>
                </div>
              </div>
            ))}
          </Carousel>
        </CardBody>
      </Card>

    </div>
  );
}
