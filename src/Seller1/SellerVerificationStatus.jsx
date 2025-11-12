import React, { useEffect, useState } from "react";
import { NavLink } from "react-bootstrap";

function SellerVerificationStatus() {
  const [status, setStatus] = useState("pending"); // default status
  const [reason, setReason] = useState("");

  // 🧭 Simulate fetching status from backend
  useEffect(() => {
    // Example: You can fetch actual data from API
    // fetch(`/api/seller/status/${sellerId}`)
    //   .then(res => res.json())
    //   .then(data => { setStatus(data.status); setReason(data.reason); });

    // Simulated status for demo
    const timer = setTimeout(() => {
      // Change this manually to "approved" or "rejected" for testing
      setStatus("pending"); // "approved" | "rejected"
      setReason("PAN card image unclear"); // Only if rejected
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // 🧾 Status UI components
  const getStatusBadge = () => {
    switch (status) {
      case "approved":
        return (
          <div className="flex items-center space-x-2">
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
            <span className="text-green-600 font-semibold">Approved</span>
          </div>
        );
      case "rejected":
        return (
          <div className="flex items-center space-x-2">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span className="text-red-600 font-semibold">Rejected</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center space-x-2">
            <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
            <span className="text-yellow-600 font-semibold">Pending Review</span>
          </div>
        );
    }
  };

  const getMessage = () => {
    if (status === "approved")
      return "🎉 Congratulations! Your seller account has been approved. You can now start listing and selling products.";
    if (status === "rejected")
      return `❌ Your verification was rejected. Reason: ${reason || "Please contact support."}`;
    return "⏳ Your account is currently under review by our verification team. We’ll notify you once it’s complete.";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Seller Verification Status
        </h1>

        {/* Status */}
        <div className="mb-6">{getStatusBadge()}</div>

        {/* Message */}
        <p className="text-gray-700 mb-6">{getMessage()}</p>

        {/* Optional Buttons */}
        {status === "rejected" && (
          <button
            onClick={() => (window.location.href = "/seller/kyc-verification")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Re-upload Documents
          </button>
        )}

        {status === "approved" && (
          <button
            onClick={() => (window.location.href = "/seller/dashboard")}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg"
          ><NavLink href="/seller/dashboard"> Go to Dashboard</NavLink>
           
          </button>
        )}
      </div>

      {/* Info */}
      <p className="text-sm text-gray-500 mt-6 max-w-md">
        Once your documents are verified, you’ll receive an email and SMS
        notification about the final status.
      </p>
    </div>
  );
}

export default SellerVerificationStatus;
