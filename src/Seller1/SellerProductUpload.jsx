import React, { useState } from "react";
import { NavLink } from "react-bootstrap";

function SellerProductUpload() {
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    description: "",
    sku: "",
    mrp: "",
    sellingPrice: "",
    stock: "",
    images: [],
  });

  const [errors, setErrors] = useState({});

  // 🧠 Handle text, number, dropdown changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 🖼 Handle multiple file uploads
  const handleFileChange = (e) => {
    setFormData({ ...formData, images: Array.from(e.target.files) });
  };

  // 🧾 Validation before submit
  const validate = () => {
    const newErrors = {};
    if (!formData.productName.trim()) newErrors.productName = "Product name is required.";
    if (!formData.category) newErrors.category = "Please select a category.";
    if (!formData.description.trim()) newErrors.description = "Description is required.";
    if (!formData.sku.trim()) newErrors.sku = "SKU is required.";
    if (!formData.mrp) newErrors.mrp = "Enter MRP.";
    if (!formData.sellingPrice) newErrors.sellingPrice = "Enter selling price.";
    else if (Number(formData.sellingPrice) > Number(formData.mrp))
      newErrors.sellingPrice = "Selling price cannot be higher than MRP.";
    if (!formData.stock) newErrors.stock = "Enter stock quantity.";
    if (formData.images.length === 0) newErrors.images = "Upload at least one product image.";

    return newErrors;
  };

  // 🚀 On Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("✅ Product Uploaded:", formData);
      alert("✅ Product uploaded successfully!");
      // API call to backend can go here
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">📦 Add Your First Product</h1>
      <p className="text-gray-600 mb-6 text-center max-w-lg">
        Upload your first product listing to get started with selling on your marketplace.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg"
      >
        {/* Product Name */}
        <label className="block mb-2 text-gray-700">Product Name</label>
        <input
          type="text"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded-lg"
          placeholder="e.g., Samsung Galaxy M15"
        />
        {errors.productName && <p className="text-red-500 text-sm mb-3">{errors.productName}</p>}

        {/* Category */}
        <label className="block mb-2 text-gray-700">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded-lg"
        >
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Grocery">Grocery</option>
        </select>
        {errors.category && <p className="text-red-500 text-sm mb-3">{errors.category}</p>}

        {/* Description */}
        <label className="block mb-2 text-gray-700">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded-lg"
          rows="3"
          placeholder="Short description of the product"
        />
        {errors.description && <p className="text-red-500 text-sm mb-3">{errors.description}</p>}

        {/* SKU */}
        <label className="block mb-2 text-gray-700">SKU (Unique ID)</label>
        <input
          type="text"
          name="sku"
          value={formData.sku}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded-lg"
          placeholder="e.g., SKU12345"
        />
        {errors.sku && <p className="text-red-500 text-sm mb-3">{errors.sku}</p>}

        {/* MRP */}
        <label className="block mb-2 text-gray-700">MRP (₹)</label>
        <input
          type="number"
          name="mrp"
          value={formData.mrp}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded-lg"
        />
        {errors.mrp && <p className="text-red-500 text-sm mb-3">{errors.mrp}</p>}

        {/* Selling Price */}
        <label className="block mb-2 text-gray-700">Selling Price (₹)</label>
        <input
          type="number"
          name="sellingPrice"
          value={formData.sellingPrice}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded-lg"
        />
        {errors.sellingPrice && <p className="text-red-500 text-sm mb-3">{errors.sellingPrice}</p>}

        {/* Stock */}
        <label className="block mb-2 text-gray-700">Stock Quantity</label>
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          className="w-full mb-1 p-2 border rounded-lg"
          placeholder="e.g., 100"
        />
        {errors.stock && <p className="text-red-500 text-sm mb-3">{errors.stock}</p>}

        {/* Images */}
        <label className="block mb-2 text-gray-700">Product Images</label>
        <input
          type="file"
          name="images"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="w-full mb-1"
        />
        {errors.images && <p className="text-red-500 text-sm mb-3">{errors.images}</p>}

        {/* Preview Selected Images */}
        {formData.images.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mb-4 mt-2">
            {formData.images.map((file, index) => (
              <img
                key={index}
                src={URL.createObjectURL(file)}
                alt="Preview"
                className="h-24 w-24 object-cover rounded-lg border"
              />
            ))}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg w-full"
        ><NavLink href="/seller/review-submit">Upload Product</NavLink>
          
        </button>
      </form>
    </div>
  );
}

export default SellerProductUpload;
