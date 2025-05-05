import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e, dropdown) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleDropdown(dropdown);
    } else if (e.key === 'Escape' && activeDropdown) {
      setActiveDropdown(null);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Common styles for NavLinks
  const navLinkStyles = ({ isActive }) => 
    isActive 
      ? "font-bold text-indigo-600 px-4 py-3 rounded-md bg-indigo-50 transition-all duration-200 shadow-sm" 
      : "text-gray-600 hover:text-indigo-600 px-4 py-3 rounded-md hover:bg-gray-50 transition-all duration-200";

  const dropdownLinkStyles = ({ isActive }) => 
    isActive 
      ? "block px-5 py-2 text-sm font-bold text-indigo-600 bg-indigo-50 transition-all duration-200" 
      : "block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-all duration-200";

  return (
    <nav ref={navRef} className="bg-white shadow-lg mb-8 p-6 rounded-lg">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Logo/Title */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-bold text-indigo-600">React Hooks Examples</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap gap-3 md:gap-4 justify-center w-full md:w-auto list-none">
          <li>
            <NavLink 
              to="/" 
              className={navLinkStyles}
              end
            >
              Home
            </NavLink>
          </li>

          {/* useState Dropdown */}
          <li className="relative">
            <button 
              onClick={() => toggleDropdown('useState')}
              onKeyDown={(e) => handleKeyDown(e, 'useState')}
              className={`flex items-center text-gray-600 px-4 py-3 cursor-pointer hover:text-indigo-600 transition-all duration-200 rounded-md hover:bg-gray-50 ${activeDropdown === 'useState' ? 'text-indigo-600 bg-gray-50' : ''}`}
              aria-expanded={activeDropdown === 'useState'}
              aria-haspopup="true"
              tabIndex="0"
            >
              useState
              <span 
                className={`ml-1 transition-transform duration-200 ${activeDropdown === 'useState' ? 'transform rotate-180' : ''}`}
              >
                ▼
              </span>
            </button>
            <ul 
              className={`absolute md:left-0 right-0 md:right-auto mt-2 w-48 bg-white rounded-md shadow-lg py-3 z-10 transition-all duration-200 ${activeDropdown === 'useState' ? 'block' : 'hidden'}`}
            >
              <li>
                <NavLink 
                  to="/use-state/counter" 
                  className={dropdownLinkStyles}
                  onClick={() => setActiveDropdown(null)}
                >
                  Counter
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/use-state/form" 
                  className={dropdownLinkStyles}
                  onClick={() => setActiveDropdown(null)}
                >
                  Form Object
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/use-state/initializer"
                  className={dropdownLinkStyles}
                  onClick={() => setActiveDropdown(null)}
                >
                  Initializer
                </NavLink>
              </li>
            </ul>
          </li>

          {/* useEffect Dropdown */}
          <li className="relative">
            <button 
              onClick={() => toggleDropdown('useEffect')}
              onKeyDown={(e) => handleKeyDown(e, 'useEffect')}
              className={`flex items-center text-gray-600 px-4 py-3 cursor-pointer hover:text-indigo-600 transition-all duration-200 rounded-md hover:bg-gray-50 ${activeDropdown === 'useEffect' ? 'text-indigo-600 bg-gray-50' : ''}`}
              aria-expanded={activeDropdown === 'useEffect'}
              aria-haspopup="true"
              tabIndex="0"
            >
              useEffect
              <span 
                className={`ml-1 transition-transform duration-200 ${activeDropdown === 'useEffect' ? 'transform rotate-180' : ''}`}
              >
                ▼
              </span>
            </button>
            <ul 
              className={`absolute md:left-0 right-0 md:right-auto mt-2 w-48 bg-white rounded-md shadow-lg py-3 z-10 transition-all duration-200 ${activeDropdown === 'useEffect' ? 'block' : 'hidden'}`}
            >
              <li>
                <NavLink 
                  to="/use-effect" 
                  className={dropdownLinkStyles}
                  onClick={() => setActiveDropdown(null)}
                >
                  Coming Soon
                </NavLink>
              </li>
            </ul>
          </li>

          {/* useContext Dropdown */}
          <li className="relative">
            <button 
              onClick={() => toggleDropdown('useContext')}
              onKeyDown={(e) => handleKeyDown(e, 'useContext')}
              className={`flex items-center text-gray-600 px-4 py-3 cursor-pointer hover:text-indigo-600 transition-all duration-200 rounded-md hover:bg-gray-50 ${activeDropdown === 'useContext' ? 'text-indigo-600 bg-gray-50' : ''}`}
              aria-expanded={activeDropdown === 'useContext'}
              aria-haspopup="true"
              tabIndex="0"
            >
              useContext
              <span 
                className={`ml-1 transition-transform duration-200 ${activeDropdown === 'useContext' ? 'transform rotate-180' : ''}`}
              >
                ▼
              </span>
            </button>
            <ul 
              className={`absolute md:left-0 right-0 md:right-auto mt-2 w-48 bg-white rounded-md shadow-lg py-3 z-10 transition-all duration-200 ${activeDropdown === 'useContext' ? 'block' : 'hidden'}`}
            >
              <li>
                <NavLink 
                  to="/use-context" 
                  className={dropdownLinkStyles}
                  onClick={() => setActiveDropdown(null)}
                >
                  Coming Soon
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
