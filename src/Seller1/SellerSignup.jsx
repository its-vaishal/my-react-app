import React, { useState } from "react";
import Navbar2 from "../Componentes/Navbar2";
import { NavLink } from "react-bootstrap";

function SellerSignup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Basic form validation
  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    else if (!/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Enter valid 10-digit number";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Seller Basic Info:", formData);
      alert("✅ Signup successful! (Next: OTP/Verification step)");
      // Here you can call API or redirect to next page
    }
  };

  return (
   <>
   <Navbar2 />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        Seller Signup — Basic Information
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md"
      >
        {/* Full Name */}
        <label className="block mb-2 text-gray-700">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded-lg"
          placeholder="Enter your full name"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mb-3">{errors.fullName}</p>
        )}

        {/* Email */}
        <label className="block mb-2 text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded-lg"
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-3">{errors.email}</p>
        )}

        {/* Mobile */}
        <label className="block mb-2 text-gray-700">Mobile Number</label>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded-lg"
          placeholder="Enter 10-digit mobile number"
        />
        {errors.mobile && (
          <p className="text-red-500 text-sm mb-3">{errors.mobile}</p>
        )}

        {/* Password */}
        <label className="block mb-2 text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded-lg"
          placeholder="Create a strong password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mb-3">{errors.password}</p>
        )}

        {/* Confirm Password */}
        <label className="block mb-2 text-gray-700">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded-lg"
          placeholder="Re-enter your password"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mb-3">{errors.confirmPassword}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg w-full mt-3"
        ><NavLink href="/seller/businessDetails"> BusinessDetails</NavLink>
          Create Account
        </button>
      </form>
    </div></>
  );
}

export default SellerSignup;
