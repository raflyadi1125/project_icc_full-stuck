import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Logo</div>

        {/* Desktop Menu */}
        <ul className="text-xl md:flex space-x-6 font-semibold">
          <li>
            <Link to="/" className="hover:text-blue-500">
                Home
            </Link>
          </li>
          <li>
            <Link to="/client" className="hover:text-blue-500">
                Client
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
