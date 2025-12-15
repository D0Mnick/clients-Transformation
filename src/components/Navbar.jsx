import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // make sure lucide-react installed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          {/* <img 
            src="/logo.png" 
            alt="Logo" 
            className="w-10 h-10 object-contain"
          /> */}
       <h1 className="text-xl font-bold">
  <Link to="/" className="hover:text-blue-500 transition">
    Client Transformations
  </Link>
</h1>

        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-6">
          <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400 transition">About</Link></li>
            <li><Link to="/client" className="hover:text-blue-400 transition">Clients</Link></li>
          <li><Link to="/services" className="hover:text-blue-400 transition">Services</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
        </ul>

        {/* HAMBURGER ICON */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
       <ul className="flex flex-col items-center gap-4 mt-4 md:hidden">

          <li><Link to="/" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>About</Link></li>
           <li><Link to="/about" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Clients</Link></li>
          <li><Link to="/services" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
