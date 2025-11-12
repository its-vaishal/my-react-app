import React, { useState } from "react";
import Navbar2 from "../Componentes/Navbar2";                                           
import { NavLink } from "react-bootstrap";

function SellerKYCVerification() {
  const [formData, setFormData] = useState({
    idType: "",
    idNumber: "",
    idFront: null,
    idBack: null,
    selfie: null,
  });

  const [errors, setErrors] = useState({});

  // 👉 Handle text & dropdown input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 👉 Handle file uploads
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  // 👉 Validation rules
  const validate = () => {
    const newErrors = {};

    if (!formData.idType) newErrors.idType = "Please select an ID type.";

    if (!formData.idNumber.trim()) newErrors.idNumber = "ID number is required.";
    else {
      if (formData.idType === "PAN" && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.idNumber))
        newErrors.idNumber = "Invalid PAN format (e.g., ABCDE1234F)";
      if (formData.idType === "Aadhaar" && !/^\d{12}$/.test(formData.idNumber))
        newErrors.idNumber = "Aadhaar must be 12 digits.";
      if (formData.idType === "Voter ID" && !/^[A-Z]{3}[0-9]{7}$/.test(formData.idNumber))
        newErrors.idNumber = "Invalid Voter ID format (e.g., ABC1234567)";
    }

    if (!formData.idFront) newErrors.idFront = "Front side of ID is required.";
    if (!formData.idBack) newErrors.idBack = "Back side of ID is required.";
    if (!formData.selfie) newErrors.selfie = "Selfie with ID is required.";

    return newErrors;
  };

  // 👉 Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("✅ KYC Details Submitted:", formData);
      alert("✅ KYC details submitted successfully!");
      // API call for verification can be added here
    }
  };

  return (
    <>
    <Navbar2/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        🪪 ID & KYC Verification
      </h1>
      <p className="text-gray-600 mb-6 text-center max-w-lg">
        Please upload your valid ID documents and a selfie to verify your identity.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md"
      >
        {/* ID Type */}
        <label className="block mb-2 text-gray-700">Owner ID Type</label>
        <select
          name="idType"
          value={formData.idType}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded-lg"
        >
          <option value="">Select ID Type</option>
          <option value="Aadhaar">Aadhaar</option>
          <option value="PAN">PAN</option>
          <option value="Voter ID">Voter ID</option>
        </select>
        {errors.idType && (
          <p className="text-red-500 text-sm mb-3">{errors.idType}</p>
        )}

        {/* ID Number */}
        <label className="block mb-2 text-gray-700">ID Number</label>
        <input
          type="text"
          name="idNumber"
          value={formData.idNumber.toUpperCase()}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded-lg uppercase"
          placeholder="Enter ID number"
        />
        {errors.idNumber && (
          <p className="text-red-500 text-sm mb-3">{errors.idNumber}</p>
        )}

        {/* ID Front */}
        <label className="block mb-2 text-gray-700">ID Front Photo</label>
        <input
          type="file"
          name="idFront"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full mb-1"
        />
        {errors.idFront && (
          <p className="text-red-500 text-sm mb-3">{errors.idFront}</p>
        )}

        {/* ID Back */}
        <label className="block mb-2 text-gray-700">ID Back Photo</label>
        <input
          type="file"
          name="idBack"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full mb-1"
        />
        {errors.idBack && (
          <p className="text-red-500 text-sm mb-3">{errors.idBack}</p>
        )}

        {/* Selfie */}
        <label className="block mb-2 text-gray-700">Selfie with ID</label>
        <input
          type="file"
          name="selfie"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full mb-1"
        />
        {errors.selfie && (
          <p className="text-red-500 text-sm mb-3">{errors.selfie}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg w-full mt-3"
        ><NavLink href="/seller/product-upload"> Submit KYC</NavLink>
         
        </button>
      </form>
    </div></>
  );
}

export default SellerKYCVerification;
