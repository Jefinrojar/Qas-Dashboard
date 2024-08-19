import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="flex items-center justify-between">

        <Link to="/" className="flex items-center">
          <img src="/images/Logo/Logo.png" alt="Logo" className="h-10 w-auto" />
        </Link>

        <div className="flex space-x-4">
          <Link to="/dashboard" className="text-white hover:text-gray-300">
            Dashboard
          </Link>
        </div>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => alert('you are logged out')}
        >
          Sign Out
        </button>
      </nav>
    </header>
  );
};

export default Header;