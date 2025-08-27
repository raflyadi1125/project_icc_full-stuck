import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => setShow(!show);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 5);
      if (window.scrollY > 5) setShow(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollActive = scroll ? "py-4 bg-gray-900 shadow-md" : "py-6";

  return (
    <div
      className={`fixed w-full z-50 transition-all duration-300 ${scrollActive}`}
    >
      <nav className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-extrabold tracking-wide text-white cursor-pointer">
            Logo
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 font-medium text-white">
            <li>
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#layanan"
                className="hover:text-blue-400 transition-colors"
              >
                Layanan
              </a>
            </li>
            <li>
              <a
                href="#social"
                className="hover:text-blue-400 transition-colors"
              >
                Social Media
              </a>
            </li>
          </ul>

          {/* Right Side - Client Button */}
          <div className="hidden md:block">
            <Link
              to="/client"
              className="bg-blue-500 px-5 py-2 rounded-full text-white font-semibold hover:bg-blue-600 transition-all"
            >
              Client
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-3xl text-white md:hidden"
            onClick={handleClick}
            aria-label="Toggle menu"
          >
            <i className="ri-menu-3-line"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {show && (
          <div className="md:hidden bg-gradient-to-t from-gray-800 to-gray-900 mt-4 space-y-4 text-white font-medium">
            <a href="#home" className="block hover:text-blue-400">
              Home
            </a>
            <a href="#about" className="block hover:text-blue-400">
              About
            </a>
            <a href="#layanan" className="block hover:text-blue-400">
              Layanan
            </a>
            <a href="#social" className="block hover:text-blue-400">
              Social Media
            </a>
            <Link
              to="/client"
              className="block bg-blue-500 px-4 py-2 rounded-full text-center font-semibold hover:bg-blue-600 transition-all"
            >
              Client
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
