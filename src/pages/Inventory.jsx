import React from "react";

const Inventory = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Inventory Management</h2>
      <p>Placeholder for inventory management functionalities.</p>
      <form className="space-y-4">
        <div>
          <label className="block">Item Name:</label>
          <input type="text" className="border p-2 w-full" />
        </div>
        <div>
          <label className="block">Quantity:</label>
          <input type="number" className="border p-2 w-full" />
        </div>
        <div>
          <label className="block">Price:</label>
          <input type="number" className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">Add Item</button>
      </form>
      <h3 className="text-xl mt-6">Inventory List</h3>
      <table className="w-full mt-2 border">
        <thead>
          <tr>
            <th className="border p-2">Item Name</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Sample Item</td>
            <td className="border p-2">10</td>
            <td className="border p-2">$100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;