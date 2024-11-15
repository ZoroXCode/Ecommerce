import React from "react";
import backgroundImage from "/images/pexels-veeterzy-39811.jpg";

function Home() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center select-none"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use URL with template literals
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>{" "}
      {/* Dark overlay for readability */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-2xl text-white">
        {/* E-commerce Heading */}
        <h1 className="text-4xl font-bold mb-4 sm:text-5xl lg:text-6xl">
          Discover the Best Deals Online
        </h1>

        {/* E-commerce description */}
        <p className="text-lg sm:text-xl lg:text-2xl mb-6">
          Shop our exclusive range of products from fashion to electronics at
          unbeatable prices!
        </p>

        {/* CTA Button */}
        <a
          href="/store"
          style={{ borderRadius: "5px" }}
          className="inline-flex items-center px-6 py-3 text-lg font-semibold bg-orange-500 hover:bg-orange-600 transition duration-300 ease-in-out"
        >
          Shop Now
        </a>
      </div>
      {/* Image Section */}
    </div>
  );
}

export default Home;
