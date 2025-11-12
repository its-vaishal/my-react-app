import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
// import express from "express";
import localStores from "./localStores.js";

function Caursalbanner() {
  const [items, setItems] = useState([]);

  // Load JSON data
  useEffect(() => {
    fetch("/data/electronics.json") // ✅ Make sure electronics.json is in public/data/
      .then((res) => res.json())
      .then((data) => setItems(data.items))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <div style={{ marginTop: "10px" }}>
      {/* ---------------- Carousel Section ---------------- */}
      <Carousel data-bs-theme="dark" fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="src/img/AZpo4fxNY8gFM-51YGVvgQ-AZpo4fxNK3gf-OEKWusP7A.jpg"
            alt="First slide"
            style={{ width: "100%", height: "600px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h5>Big Diwali Deals</h5>
            <p>Get up to 70% off on electronics and more.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="src/img/AZpo4fxNY8gFM-51YGVvgQ-AZpo4fxNMUMaG-QsQZaD0A.jpg"
            alt="Second slide"
            style={{ width: "100%", height: "600px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h5>Smartphones Bonanza</h5>
            <p>Latest mobiles at unbeatable prices.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="src/img/YouTube Banner - Discover Amazing Deals  Every Day.png"
            alt="Third slide"
            style={{ width: "100%", height: "600px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h5>Daily Deals</h5>
            <p>Discover amazing offers every day!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* ---------------- Static Product Boxes ---------------- */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {[
          "src/img/AZpo3xxb1XCbFa-CzcjJaw-AZpo3xxb9PA5fljiouVJaQ.jpg",
          "src/img/AZpo3xxb1XCbFa-CzcjJaw-AZpo3xxbdBwPzlGah8qkFg.jpg",
          "src/img/AZpo3xxb1XCbFa-CzcjJaw-AZpo3xxbn17Gobhbh4w3Rg.jpg",
        ].map((src, index) => (
          <div
            key={index}
            style={{
              height: "250px",
              width: "250px",
              backgroundColor: "#000",
              borderRadius: "8px",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={src}
              alt={`Banner ${index + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      {/* ---------------- Dynamic Electronics Section ---------------- */}
      <h3 style={{ marginTop: "60px", marginLeft: "40px", fontWeight: "600" }}>
        Top Electronics Deals 🔌
      </h3>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px 40px",
          justifyContent: "center",
        }}
      >
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "10px",
                width: "220px",
                textAlign: "center",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h5 style={{ marginTop: "10px" }}>{item.name}</h5>
              <p style={{ color: "green", fontWeight: "bold" }}>{item.price}</p>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>

    

      {/* ---------------- Dynamic Electronics Section ---------------- */}
   {/* ---------------- Local Store Horizontal Section ---------------- */}
<h3 style={{ marginTop: "60px", marginLeft: "40px", fontWeight: "600" }}>
  Local Stores Near You 🏪
</h3>

<div
  style={{
    display: "flex",
    overflowX: "auto",
    gap: "20px",
    padding: "20px 40px",
    whiteSpace: "nowrap",
  }}
  className="no-scrollbar"
>
  {localStores.length > 0 ? (
    localStores.map((store) => (
      <div
        key={store.id}
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "10px",
          minWidth: "220px",
          textAlign: "center",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
          flexShrink: 0,
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <img
          src={store.storeImage}
          alt={store.storeName}
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <h5 style={{ marginTop: "10px" }}>{store.storeName}</h5>
        <p style={{ color: "gray", fontSize: "14px" }}>{store.category}</p>
        <p style={{ color: "green", fontWeight: "bold" }}>
          ⭐ {store.rating}
        </p>
      </div>
    ))
  ) : (
    <p>Loading local stores...</p>
  )}
</div>

    

    </div>
  );
}

export default Caursalbanner;
