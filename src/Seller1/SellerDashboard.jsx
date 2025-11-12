import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function SellerDashboard() {
  const [activeTab, setActiveTab] = useState("products");

  const tabs = [
    { id: "products", label: "🛍 Products" },
    { id: "orders", label: "📦 Orders" },
    { id: "earnings", label: "💸 Earnings" },
    { id: "reports", label: "🧾 Reports" },
    { id: "settings", label: "⚙️ Settings" },
    { id: "help", label: "❓ Help Center" },
  ];

  // 📊 Sample data for Reports tab
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [12000, 15000, 13000, 20000, 18000, 22000],
        backgroundColor: "#3b82f6",
      },
    ],
  };

  // 🧩 Tab Components
  const renderContent = () => {
    switch (activeTab) {
      case "products":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">🛍 Products</h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mb-4">
              + Add New Product
            </button>
            <table className="w-full border text-left text-gray-700">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Product</th>
                  <th className="p-2 border">Stock</th>
                  <th className="p-2 border">Price</th>
                  <th className="p-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Samsung Galaxy M15</td>
                  <td className="p-2 border">34</td>
                  <td className="p-2 border">₹14,999</td>
                  <td className="p-2 border">
                    <button className="text-blue-600 mr-2">Edit</button>
                    <button className="text-red-600">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "orders":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">📦 Orders</h2>
            <p className="text-gray-600 mb-4">
              Manage your current and past orders here.
            </p>
            <ul className="space-y-3">
              <li className="p-4 bg-white shadow rounded-lg">
                <strong>#ORD-1021</strong> — Samsung Galaxy M15 (2 qty) —{" "}
                <span className="text-green-600 font-semibold">Delivered</span>
              </li>
              <li className="p-4 bg-white shadow rounded-lg">
                <strong>#ORD-1022</strong> — Boat Airdopes 161 —{" "}
                <span className="text-yellow-600 font-semibold">Pending</span>
              </li>
            </ul>
          </div>
        );

      case "earnings":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">💸 Earnings</h2>
            <div className="bg-white p-4 rounded-lg shadow mb-4">
              <p className="text-gray-600">Total Earnings</p>
              <h3 className="text-3xl font-bold text-green-600">₹1,25,450</h3>
            </div>
            <h4 className="text-lg font-semibold mb-2">Payout History</h4>
            <ul className="space-y-2">
              <li className="bg-gray-100 p-3 rounded-lg">
                05 Nov 2025 — ₹25,000 — <span className="text-green-600">Paid</span>
              </li>
              <li className="bg-gray-100 p-3 rounded-lg">
                01 Nov 2025 — ₹18,000 — <span className="text-yellow-600">Processing</span>
              </li>
            </ul>
          </div>
        );

      case "reports":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">🧾 Sales Reports</h2>
            <div className="bg-white p-4 rounded-lg shadow">
              <Bar data={chartData} />
            </div>
          </div>
        );

      case "settings":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">⚙️ Settings</h2>
            <p className="text-gray-600 mb-4">
              Update your store, address, or bank details.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Store Name</label>
                <input
                  type="text"
                  placeholder="Your Store Name"
                  className="border p-2 rounded w-full"
                />
              </div>
              <div>
                <label className="block text-gray-700">Shop Timings</label>
                <input
                  type="text"
                  placeholder="9 AM - 9 PM"
                  className="border p-2 rounded w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                Save Changes
              </button>
            </form>
          </div>
        );

      case "help":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">❓ Help Center</h2>
            <p className="text-gray-600 mb-4">
              Need support? Contact us via chat or raise a ticket.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
              💬 Chat with Support
            </button>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg ml-3">
              🧾 Create Ticket
            </button>
          </div>
        );

      default:
        return <p>Select a section</p>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-4 border-r">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">Seller Panel</h1>
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                className={`w-full text-left p-2 rounded-lg transition ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
}

export default SellerDashboard;
