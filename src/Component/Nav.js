import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  let total = useSelector((state) => state.totalCart);
  const [gradientStyle, setGradientStyle] = useState({
    backgroundColor: "var(--nav)",
  });

  // Update gradient background on mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const gradientX = (mouseX / window.innerWidth) * 100;
      setGradientStyle({
        backgroundColor: "var(--nav)",
      });
    };

    const navbarSection = document.getElementById("navbar-section");
    navbarSection.addEventListener("mousemove", handleMouseMove);

    return () => {
      navbarSection.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Styles for different elements
  const style = {
    navbarSection: {
      ...gradientStyle,
    },
    nav: {
      backgroundColor: "transparent",
    },
    navHead: {
      fontFamily: "var(--fontStyle)",
      color: "#ffffff",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    buttonContainer: {
      display: "flex",
      alignItems: "center",
      marginLeft: "20px",
    },
    magentaButton: {
      color: "white",
      backgroundColor: "transparent",
      padding: "10px 20px",
      marginLeft: "10px",
      transition: "background-color 0.3s ease",
    },
    addButton: {
      color: "white",
      backgroundColor: "transparent",
      padding: "10px 20px",
      marginLeft: "10px",
      transition: "background-color 0.3s ease",
    },
  };

  // Event handlers for product buttons and hover effects
  const handleProductHover = (e) => {
    e.target.style.backgroundColor = "#ffffff";
    e.target.style.color = "#000000";
  };

  const handleProductLeave = (e) => {
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = "#ffffff";
  };

  const handleAddProductHover = (e) => {
    e.target.style.backgroundColor = "#ffffff";
    e.target.style.color = "#000000";
  };

  const handleAddProductLeave = (e) => {
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = "#ffffff";
  };

  return (
    <div id="navbar-section" style={style.navbarSection}>
      <nav
        className="navbar navbar-expand-lg p-4 align-items-center"
        style={style.nav}
      >
        <div className="container-fluid">
          <div className="d-flex align-items-start">
            <div style={style.buttonContainer}>
              <Link to="/" className="nav-link active text-light">
                <button
                  className="btn"
                  style={style.magentaButton}
                  onMouseEnter={handleProductHover}
                  onMouseLeave={handleProductLeave}
                  onClick={() => navigate("/")}
                >
                  Products
                </button>
              </Link>
              <Link to="/addproducts" className="nav-link active text-light">
                <button
                  className="btn"
                  style={style.addButton}
                  onMouseEnter={handleAddProductHover}
                  onMouseLeave={handleAddProductLeave}
                >
                  Add Product
                </button>
              </Link>
            </div>
            <h1 style={style.navHead}>shopHub</h1>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="d-flex gap-5 position-relative">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png"
                alt="error"
                width={"40rem"}
                onClick={() => navigate("/cart")}
                style={{ cursor: "pointer" }}
              />
              {total ? (
                <p
                  className="bg-white rounded-circle position-absolute d-flex align-items-center justify-content-center"
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    top: "21%",
                    left: "20%",
                  }}
                >
                  {total}
                </p>
              ) : (
                ""
              )}
              <img
                src="https://cdn-icons-png.flaticon.com/512/236/236832.png"
                alt="error"
                width={"40rem"}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
