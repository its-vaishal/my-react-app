import React, { useState } from "react";
import Navbar2 from "../Componentes/Navbar2";
import { NavLink } from "react-bootstrap";

function SellerStoreDetails() {
  const [formData, setFormData] = useState({
    shopName: "",
    address1: "",
    city: "",
    state: "",
    pincode: "",
    latitude: "",
    longitude: "",
    deliveryRadius: "",
    shopTimings: "",
    homeDelivery: false,
    storeImage: null,
    insidePhoto: null,
  });

  const [errors, setErrors] = useState({});

  // Handle text/checkbox change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle file uploads
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  // Auto-detect location using browser
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setFormData({
            ...formData,
            latitude: pos.coords.latitude.toFixed(6),
            longitude: pos.coords.longitude.toFixed(6),
          });
        },
        () => {
          alert("Unable to fetch your location. Please enable GPS.");
        }
      );
    } else {
      alert("Geolocation not supported in this browser.");
    }
  };

  // Validation
  const validate = () => {
    const newErrors = {};
    if (!formData.shopName.trim()) newErrors.shopName = "Shop name is required";
    if (!formData.address1.trim())
      newErrors.address1 = "Address line is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!/^\d{6}$/.test(formData.pincode))
      newErrors.pincode = "Enter a valid 6-digit pincode";
    if (!formData.latitude || !formData.longitude)
      newErrors.location = "Please fetch your location";
    if (!formData.deliveryRadius)
      newErrors.deliveryRadius = "Delivery radius is required";
    if (!formData.storeImage)
      newErrors.storeImage = "Store front image is required";
    return newErrors;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("✅ Store Details Submitted:", formData);
      alert("✅ Store details saved successfully!");
      // API call to backend can be added here
    }
  };

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
    "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
    "Uttarakhand", "West Bengal"
  ];

  return (
   <>
   <Navbar2 />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        🏪 Store Details
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl"
      >
        {/* Shop Name */}
        <label className="block mb-2 text-gray-700">Shop Name</label>
        <input
          type="text"
          name="shopName"
          value={formData.shopName}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded-lg"
          placeholder="Enter your shop name"
        />
        {errors.shopName && (
          <p className="text-red-500 text-sm mb-3">{errors.shopName}</p>
        )}

        {/* Address Line 1 */}
        <label className="block mb-2 text-gray-700">Address Line 1</label>
        <input
          type="text"
          name="address1"
          value={formData.address1}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded-lg"
          placeholder="Street, landmark, etc."
        />
        {errors.address1 && (
          <p className="text-red-500 text-sm mb-3">{errors.address1}</p>
        )}

        {/* City */}
        <label className="block mb-2 text-gray-700">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded-lg"
          placeholder="Enter your city"
        />
        {errors.city && (
          <p className="text-red-500 text-sm mb-3">{errors.city}</p>
        )}

        {/* State */}
        <label className="block mb-2 text-gray-700">State</label>
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded-lg"
        >
          <option value="">Select State</option>
          {states.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.state && (
          <p className="text-red-500 text-sm mb-3">{errors.state}</p>
        )}

        {/* Pincode */}
        <label className="block mb-2 text-gray-700">Pincode</label>
        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded-lg"
          placeholder="6-digit pincode"
        />
        {errors.pincode && (
          <p className="text-red-500 text-sm mb-3">{errors.pincode}</p>
        )}

        {/* Latitude & Longitude */}
        <div className="flex items-center gap-2 mb-3">
          <button
            type="button"
            onClick={handleGetLocation}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Get Location
          </button>
          <p className="text-gray-600 text-sm">
            {formData.latitude && formData.longitude
              ? `📍 ${formData.latitude}, ${formData.longitude}`
              : "Location not fetched"}
          </p>
        </div>
        {errors.location && (
          <p className="text-red-500 text-sm mb-3">{errors.location}</p>
        )}

        {/* Delivery Radius */}
        <label className="block mb-2 text-gray-700">Delivery Radius (km)</label>
        <input
          type="number"
          name="deliveryRadius"
          value={formData.deliveryRadius}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded-lg"
          placeholder="Enter radius in kilometers"
        />
        {errors.deliveryRadius && (
          <p className="text-red-500 text-sm mb-3">{errors.deliveryRadius}</p>
        )}

        {/* Store Image */}
        <label className="block mb-2 text-gray-700">
          Store Image (Front View)
        </label>
        <input
          type="file"
          name="storeImage"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full mb-1"
        />
        {errors.storeImage && (
          <p className="text-red-500 text-sm mb-3">{errors.storeImage}</p>
        )}

        {/* Inside Photo (optional) */}
        <label className="block mb-2 text-gray-700">Inside Photo (Optional)</label>
        <input
          type="file"
          name="insidePhoto"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full mb-4"
        />

        {/* Shop Timings */}
        <label className="block mb-2 text-gray-700">Shop Timings</label>
        <input
          type="text"
          name="shopTimings"
          value={formData.shopTimings}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded-lg"
          placeholder="e.g., 9 AM - 9 PM"
        />

        {/* Home Delivery */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="homeDelivery"
            checked={formData.homeDelivery}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-700">
            Is Home Delivery Available?
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg w-full mt-3"
        ><NavLink href="/seller/kyc-verification">Save Store Details</NavLink>
          
        </button>
      </form>
    </div>
   </>
  );
}

export default SellerStoreDetails;
