import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">Pharmacy Inventory Management and POS System</h1>
        <p className="text-center">
          Welcome to the Pharmacy Inventory Management and POS System. Use the navigation to access different sections.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link to="/inventory" className="text-blue-500">Inventory Management</Link>
          <Link to="/pos" className="text-blue-500">POS System</Link>
        </div>
      </div>
    </div>
  );
};

export default Index;