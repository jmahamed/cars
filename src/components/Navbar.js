import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-items">
        <a href="./">
          <img src="./AutoCar.png" alt="logo" />
        </a>
        <a href="">
          <li>New Cars</li>
        </a>
        <a href="">
          <li>Used Cars</li>
        </a>
        <a href="">
          <li>About Us</li>
        </a>
        <a href="">
          <li>Contact</li>
        </a>
      </ul>

    <div className="btns">
    <a href="#">
        <button>Find Your Car</button>
      </a>
      <a href="">
        <img src="./profile.png" alt="" />
      </a>
    </div>

    </nav>
  );
};

export default Navbar;
