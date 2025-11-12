import React, { useState } from "react";
import Navbar2 from "../Componentes/Navbar2";
import { NavLink } from "react-bootstrap";

function SellerBankDetails() {
  const [formData, setFormData] = useState({
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
    bankName: "",
    chequePhoto: null,
  });

  const [errors, setErrors] = useState({});

  // 👉 Handle text input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 👉 Handle file input
  const handleFileChange = (e) => {
    setFormData({ ...formData, chequePhoto: e.target.files[0] });
  };

  // 👉 Simple IFSC regex validation
  const validateIFSC = (ifsc) => /^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifsc);

  // 👉 Basic validation
  const validate = () => {
    const newErrors = {};

    if (!formData.accountHolderName.trim())
      newErrors.accountHolderName = "Account holder name is required";

    if (!formData.accountNumber.trim())
      newErrors.accountNumber = "Account number is required";
    else if (!/^\d{9,18}$/.test(formData.accountNumber))
      newErrors.accountNumber = "Enter a valid account number";

    if (!formData.ifscCode.trim()) newErrors.ifscCode = "IFSC code is required";
    else if (!validateIFSC(formData.ifscCode))
      newErrors.ifscCode = "Invalid IFSC format (e.g., SBIN0001234)";

    if (!formData.chequePhoto)
      newErrors.chequePhoto = "Cancelled cheque or passbook photo is required";

    return newErrors;
  };

  // 👉 Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Mask account number before showing or sending
      const maskedAccount =
        formData.accountNumber.slice(0, -4).replace(/\d/g, "X") +
        formData.accountNumber.slice(-4);

      console.log("✅ Bank Details Submitted:", {
        ...formData,
        accountNumber: maskedAccount,
      });

      alert("✅ Bank details submitted successfully!");
      // You can call your backend API here
    }
  };

  return (
   <>
   <Navbar2 />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        Bank Details (For Payouts)
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md"
      >
        {/* Account Holder Name */}
        <label className="block mb-2 text-gray-700">Account Holder Name</label>
        <input
          type="text"
          name="accountHolderName"
          value={formData.accountHolderName}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded-lg"
          placeholder="Enter account holder name"
        />
        {errors.accountHolderName && (
          <p className="text-red-500 text-sm mb-3">{errors.accountHolderName}</p>
        )}

        {/* Account Number */}
        <label className="block mb-2 text-gray-700">Account Number</label>
        <input
          type="password"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded-lg"
          placeholder="Enter your account number"
        />
        {errors.accountNumber && (
          <p className="text-red-500 text-sm mb-3">{errors.accountNumber}</p>
        )}

        {/* IFSC Code */}
        <label className="block mb-2 text-gray-700">IFSC Code</label>
        <input
          type="text"
          name="ifscCode"
          value={formData.ifscCode.toUpperCase()}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded-lg uppercase"
          placeholder="e.g., SBIN0001234"
          maxLength="11"
        />
        {errors.ifscCode && (
          <p className="text-red-500 text-sm mb-3">{errors.ifscCode}</p>
        )}

        {/* Bank Name (Optional) */}
        <label className="block mb-2 text-gray-700">Bank Name (Optional)</label>
        <input
          type="text"
          name="bankName"
          value={formData.bankName}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded-lg"
          placeholder="Auto-fetched from IFSC (optional)"
        />

        {/* Upload Cancelled Cheque */}
        <label className="block mb-2 text-gray-700">
          Cancelled Cheque / Passbook Photo
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full mb-1"
        />
        {errors.chequePhoto && (
          <p className="text-red-500 text-sm mb-3">{errors.chequePhoto}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg w-full mt-3"
        >
          <NavLink href="/seller/storeDetails"> BusinessDetails</NavLink>
          Submit Bank Details
        </button>
      </form>
    </div>
   </>
  );
}

export default SellerBankDetails;
