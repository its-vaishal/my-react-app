import React, { useState } from "react";
import { NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SellerReviewSubmit() {
  const navigate = useNavigate();

  // ⚙️ These would normally come from Context or Local Storage
  // For now, we're using dummy placeholder data for demo purposes
  const sellerData = {
    basicInfo: {
      fullName: "Kamlesh Bagdawat",
      email: "kamlesh@example.com",
      mobile: "9876543210",
    },
    bankDetails: {
      accountHolder: "Kamlesh Bagdawat",
      accountNumber: "XXXXXX1234",
      ifsc: "HDFC0001234",
      bankName: "HDFC Bank",
    },
    storeDetails: {
      shopName: "Kamlesh Electronics",
      city: "Surat",
      state: "Gujarat",
      pincode: "395007",
      deliveryRadius: "10 km",
      homeDelivery: true,
    },
    kyc: {
      idType: "PAN",
      idNumber: "ABCDE1234F",
      verified: true,
    },
    product: {
      name: "Samsung Galaxy M15",
      category: "Electronics",
      price: "₹14,999",
      stock: 50,
    },
  };

  const [agree, setAgree] = useState(false);

  // 🚀 Submit handler
  const handleSubmit = () => {
    if (!agree) {
      alert("⚠️ Please agree to the Terms and Conditions before submitting.");
      return;
    }
    alert("✅ Seller details submitted for verification!");
    navigate("/seller/thank-you");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">✅ Review & Submit</h1>
      <p className="text-gray-600 mb-6 text-center max-w-2xl">
        Please review your details carefully before submitting for verification.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl space-y-6">

        {/* 🔹 Basic Info */}
        <Section
          title="Basic Information"
          data={sellerData.basicInfo}
          onEdit={() => navigate("/seller/signup")}
        />

        {/* 🔹 Bank Details */}
        <Section
          title="Bank Details"
          data={sellerData.bankDetails}
          onEdit={() => navigate("/seller/bank-details")}
        />

        {/* 🔹 Store Details */}
        <Section
          title="Store Details"
          data={sellerData.storeDetails}
          onEdit={() => navigate("/seller/store-details")}
        />

        {/* 🔹 KYC */}
        <Section
          title="ID & KYC Verification"
          data={sellerData.kyc}
          onEdit={() => navigate("/seller/kyc-verification")}
        />

        {/* 🔹 Product */}
        <Section
          title="Product Upload"
          data={sellerData.product}
          onEdit={() => navigate("/seller/product-upload")}
        />

        {/* Terms & Conditions */}
        <div className="flex items-center mt-6">
          <input
            type="checkbox"
            id="terms"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="h-4 w-4 mr-2"
          />
          <label htmlFor="terms" className="text-gray-700 text-sm">
            I agree to the <span className="text-blue-600 cursor-pointer underline">terms and conditions</span>.
          </label>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl w-full mt-4 transition duration-200"
        >
          Submit for Verification
        </button>
      </div>
    </div>
  );
}

// 🔹 Reusable Section Component
function Section({ title, data, onEdit }) {
  return (
    <div className="border rounded-lg p-4 bg-gray-50">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-gray-800 text-lg">{title}</h2>
        <button
          onClick={onEdit}
          className="text-blue-600 text-sm hover:underline"
        > <NavLink href="/seller/verification-status"> Edit</NavLink>
         
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 text-sm">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="capitalize font-medium">{key.replace(/([A-Z])/g, " $1")}</span>
            <span>{String(value)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SellerReviewSubmit;
