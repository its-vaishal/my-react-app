import React, { useState } from "react";
import { NavLink } from "react-bootstrap";
import Navbar2 from "../Componentes/Navbar2";


function BusinessDetails({ onNext, onBack }) {
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    panNumber: "",
    gstNumber: "",
    registrationFile: null,
    businessCategory: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Basic PAN validation (5 letters + 4 digits + 1 letter)
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (formData.panNumber && !panRegex.test(formData.panNumber.toUpperCase())) {
      alert("Invalid PAN number format");
      return;
    }

    console.log("Business details:", formData);
    if (onNext) onNext(formData); // pass data to parent or next step
  };

  return (
   <>
   <Navbar2 />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          🏢 Business Details (Legal & Company Info)
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Business Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Business / Store Name
            </label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your store name"
            />
          </div>

          {/* Business Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Business Type
            </label>
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select type</option>
              <option>Proprietorship</option>
              <option>Private Limited</option>
              <option>Partnership</option>
              <option>Individual</option>
            </select>
          </div>

          {/* PAN Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              PAN Number
            </label>
            <input
              type="text"
              name="panNumber"
              value={formData.panNumber}
              onChange={handleChange}
              maxLength="10"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 uppercase"
              placeholder="ABCDE1234F"
            />
          </div>

          {/* GST Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              GST Number (optional)
            </label>
            <input
              type="text"
              name="gstNumber"
              value={formData.gstNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 uppercase"
              placeholder="Enter GSTIN (if applicable)"
            />
          </div>

          {/* Business Registration Certificate */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Business Registration Certificate
            </label>
            <input
              type="file"
              name="registrationFile"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Business Category */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Business Category
            </label>
            <select
              name="businessCategory"
              value={formData.businessCategory}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select category</option>
              <option>Electronics</option>
              <option>Grocery</option>
              <option>Clothing</option>
              <option>Home & Kitchen</option>
              <option>Beauty & Health</option>
              <option>Sports</option>
              <option>Others</option>
            </select>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={onBack}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg"
            >
              Back
            </button>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
            ><NavLink href="/seller/bankDetails">Next</NavLink>
              
            </button>
          </div>
        </form>
      </div>
    </div>
   </>
  );
}

export default BusinessDetails;
