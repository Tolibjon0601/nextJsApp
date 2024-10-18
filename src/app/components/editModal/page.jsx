import { request } from "@/services/api";
import React, { useState, useEffect } from "react";

const EditModal = ({ service, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
  });

  useEffect(() => {
    if (service) {
      setFormData({
        title: service.title ,
        price: service.price,
        description: service.description,
      });
    }
  }, [service]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {

    request.put(`/products/${service.id}`, formData).then(() => {
      onClose();
    });
  };

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 h-full w-full overflow-y-auto bg-black/50">
      <div className="relative mx-auto mt-10 max-w-lg">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h5 className="text-xl font-medium text-gray-900 dark:text-gray-200">
              Edit Product
            </h5>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              onClick={onClose}
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Modal body */}
          <div className="p-4 space-y-4">
            <div>
              <label
                htmlFor="productTitle"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                placeholder="Enter product title"
              />
            </div>

            <div>
              <label
                htmlFor="productPrice"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                placeholder="Enter product price"
              />
            </div>

            <div>
              <label
                htmlFor="productDescription"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Description
              </label>
              <textarea
                name="description"
                rows="3"
                value={formData.description}
                onChange={handleInputChange}
                className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                placeholder="Enter product description"
              ></textarea>
            </div>
          </div>


          <div className="flex items-center justify-end p-4 space-x-2 border-t dark:border-gray-600">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-primary-700 uppercase bg-primary-100 rounded shadow-sm hover:bg-primary-200 focus:outline-none focus:ring focus:ring-primary-500 active:bg-primary-300 dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-500"
            >
              Close
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-6 py-2 text-xs font-medium text-white uppercase bg-primary rounded shadow-sm hover:bg-primary-600 focus:bg-primary-700 focus:outline-none focus:ring focus:ring-primary-500 active:bg-primary-800 dark:bg-primary-400 dark:hover:bg-primary-500 dark:focus:bg-primary-600 dark:active:bg-primary-700"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
