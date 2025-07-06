import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const linkStyle = (path) => ({
    color: "white",
    textDecoration: "none",
    margin: "0 15px",
    fontWeight: location.pathname === path ? "bold" : "normal",
    fontFamily: "Georgia, serif",
    fontSize: "18px",
  });

  return (
    <nav
      style={{
        backgroundImage: 'url("./src/assets/logo.png")', // replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "10px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid #333",
      }}
    >
      {/* Left Logo + Subtitle */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            color: "#f4a300",
            fontWeight: "bold",
            fontSize: "28px",
            fontFamily: "'Times New Roman', serif",
            lineHeight: "1",
          }}
        >
          J&M
        </span>
        <span
          style={{
            color: "white",
            fontSize: "12px",
            fontFamily: "Georgia, serif",
          }}
        >
          INDIAN CUISINE
        </span>
      </div>

      {/* Right Links */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          margin: "0",
          padding: "0",
          alignItems: "center",
        }}
      >
        <li>
          <Link to="/" style={linkStyle("/")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/menu" style={linkStyle("/menu")}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/reservations" style={linkStyle("/reservations")}>
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/events" style={linkStyle("/events")}>
            Events
          </Link>
        </li>
        <li>
          <Link to="/blog" style={linkStyle("/blog")}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/about" style={linkStyle("/about")}>
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
