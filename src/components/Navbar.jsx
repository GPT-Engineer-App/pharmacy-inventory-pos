import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white">
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/inventory" className="mr-4">Inventory Management</Link>
          <Link to="/pos">POS System</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;