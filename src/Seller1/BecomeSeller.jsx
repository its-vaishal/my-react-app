import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Navbar2 from "../Componentes/Navbar2";

function BecomeSeller() {
  const navigate = useNavigate();

  const handleStartRegistration = () => {
    navigate("/seller/signup");
  };
 
  return (
   <>
   <Navbar2 />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Sell on <span className="text-blue-600">YourWebsiteName</span>
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-600 mb-6">
        Join our marketplace and grow your business with ease.
      </p>

      {/* Button */}
      <button
        onClick={handleStartRegistration} 
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition duration-200"
      > <NavLink
          to="seller/signup"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition duration-200"
        >
         Start Registration
        </NavLink>
        Start Registration
      </button>
     
    </div>
   </>
  );
}

export default BecomeSeller;
