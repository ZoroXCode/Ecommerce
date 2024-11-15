import React, { useEffect, useState } from "react";
import pimg from "/images/pexels-veeterzy-39811.jpg";

// Sample products array with a placeholder image for each
const products = [
  {
    name: "Apple iPhone 15",
    category: "Electronics",
    price: "799.99",
    image: "https://via.placeholder.com/300x200?text=Apple+iPhone+15",
  },
  {
    name: "Sony WH-1000XM5 Headphones",
    category: "Accessories",
    price: "348.00",
    image: "https://via.placeholder.com/300x200?text=Sony+WH-1000XM5",
  },
  {
    name: "NVIDIA GeForce RTX 4090",
    category: "Gaming",
    price: "1599.00",
    image: "https://via.placeholder.com/300x200?text=NVIDIA+GeForce+RTX+4090",
  },
  {
    name: "Samsung Galaxy S23",
    category: "Electronics",
    price: "799.99",
    image: "https://via.placeholder.com/300x200?text=Samsung+Galaxy+S23",
  },
  {
    name: "Razer BlackWidow V3",
    category: "Accessories",
    price: "139.99",
    image: "https://via.placeholder.com/300x200?text=Razer+BlackWidow+V3",
  },
  {
    name: "Logitech G Pro X Superlight",
    category: "Gaming",
    price: "149.99",
    image:
      "https://via.placeholder.com/300x200?text=Logitech+G+Pro+X+Superlight",
  },
];

const Store = () => {
  const [productsList, setProductsList] = useState(products);

  return (
    <section className="text-black dark:bg-transparent dark:text-white bg-transparent py-16 pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsList.map((product, index) => (
            <div
              key={index}
              className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#" aria-label={product.name}>
                <img
                  className="rounded-lg w-full h-56 object-cover"
                  src={pimg}
                  alt={product.name}
                />
              </a>
              <div className="flex flex-col p-5 flex-grow">
                <a href="#" className="mb-3">
                  <h5 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {product.name}
                  </h5>
                </a>
                <p className="mb-3 text-lg font-medium text-gray-700 dark:text-gray-400">
                  {product.category}
                </p>
                <p className="text-xl font-semibold text-gray-900 dark:text-gray-400">
                  ${product.price}
                </p>
                <a
                  href="#"
                  className="mt-auto inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Store;
