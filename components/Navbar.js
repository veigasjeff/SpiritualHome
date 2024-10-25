import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar} >
      <div className={styles.logo}>SpiritualHome
     
    
      <div className="flex justify-center mt-4">
        <a
          href="https://www.youtube.com/channel/UCiYD6dTKTk0cRnhCo-3SKzw/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-600 mx-2"
        >
          <FaYoutube className="w-6 h-6" />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-600 mx-2"
        >
          <FaTwitter className="w-6 h-6" />
        </a>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-600 mx-2"
        >
          <FaFacebook className="w-6 h-6" />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-600 mx-2"
        >
          <FaInstagram className="w-6 h-6" />
        </a>
      
      </div>
      </div>
      <div className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <a href="/">Home</a>
        <a href="#">Quotes</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div className={styles.hamburgerMenu} onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
