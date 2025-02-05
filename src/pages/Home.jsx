import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <section className="bg-cover bg-center h-screen flex items-center justify-center text-center text-white">
        <div className="bg-black bg-opacity-50 p-10 rounded-lg">
            <h1 className="text-5xl font-bold mb-4">Experience Unforgettable Events</h1>
            <p className="text-lg mb-6">Join us to create, manage, and attend amazing events effortlessly.</p>
            <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">Get Started</a>
        </div>
    </section>

    <Footer/>
    </div>
  );
};

export default Home;
