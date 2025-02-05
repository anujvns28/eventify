import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-16">
            <div className="text-white cursor-pointer text-3xl font-extrabold tracking-wide">Eventify</div>
            <div className="flex space-x-6">
                <div className="text-white cursor-pointer text-lg hover:text-gray-300 transition duration-300">Home</div>
                <div className="text-white cursor-pointer text-lg hover:text-gray-300 transition duration-300">Events</div>
                <div className="text-white cursor-pointer text-lg hover:text-gray-300 transition duration-300">About</div>
                <div className="text-white cursor-pointer text-lg hover:text-gray-300 transition duration-300">Contact</div>
            </div>
        </div>
        
    </div>

  )
}

export default Navbar
