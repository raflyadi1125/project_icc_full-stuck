import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {

  const [scroll, setScroll] = useState (false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        console.log("testing");
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false)
      }
    });
  });

    let scrollActive = scroll ? "py-4 bg-gray-900 shadow" : "py-4"

  return (
    <div className={`navbar fixed w-full transition-all ${scrollActive}`}>
      <nav className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
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
    </div>
  );
};

export default Navbar;
