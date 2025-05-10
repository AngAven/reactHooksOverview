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
      ? "active-nav-link" 
      : "nav-link";

  const dropdownLinkStyles = ({ isActive }) => 
    isActive 
      ? "active-dropdown-link" 
      : "dropdown-link";

  return (
    <nav ref={navRef} className="navigation">
      <div className="navigation-container">
        {/* Logo/Title */}
        <div className="logo-container">
          <h1 className="site-title">
            <svg xmlns="http://www.w3.org/2000/svg" className="logo-icon" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
            </svg>
            React Hooks Examples
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
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
          <li className="dropdown-item">
            <button 
              onClick={() => toggleDropdown('useState')}
              onKeyDown={(e) => handleKeyDown(e, 'useState')}
              className={`dropdown-button ${activeDropdown === 'useState' ? 'dropdown-button-active' : ''}`}
              aria-expanded={activeDropdown === 'useState'}
              aria-haspopup="true"
              tabIndex="0"
            >
              <span className="dropdown-label">useState</span>
              <span className={`dropdown-icon ${activeDropdown === 'useState' ? 'dropdown-icon-active' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="dropdown-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <ul className={`dropdown-menu ${activeDropdown === 'useState' ? 'dropdown-menu-active' : ''}`}
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
                  to="/use-state/passing-initializer-function"
                  className={dropdownLinkStyles}
                  onClick={() => setActiveDropdown(null)}
                >
                  Passing Initializer Function
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/use-state/passing-initial-state-directly"
                  className={dropdownLinkStyles}
                  onClick={() => setActiveDropdown(null)}
                >
                  Passing Initial State Directly
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/use-state/resetting-state-with-akey"
                  className={dropdownLinkStyles}
                  onClick={() => setActiveDropdown(null)}
                >
                  Resetting State with a key
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/use-state/storing-information-from-previous-renders"
                  className={dropdownLinkStyles}
                  onClick={() => setActiveDropdown(null)}
                >
                  Storing Information from Previous Renders
                </NavLink>
              </li>
            </ul>
          </li>

          {/* useEffect Dropdown */}
          <li className="dropdown-item">
            <button 
              onClick={() => toggleDropdown('useEffect')}
              onKeyDown={(e) => handleKeyDown(e, 'useEffect')}
              className={`dropdown-button ${activeDropdown === 'useEffect' ? 'dropdown-button-active' : ''}`}
              aria-expanded={activeDropdown === 'useEffect'}
              aria-haspopup="true"
              tabIndex="0"
            >
              <span className="dropdown-label">useEffect</span>
              <span className={`dropdown-icon ${activeDropdown === 'useEffect' ? 'dropdown-icon-active' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="dropdown-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <ul className={`dropdown-menu ${activeDropdown === 'useEffect' ? 'dropdown-menu-active' : ''}`}
            >
              <li>
                <NavLink 
                  to="/use-effect/api-request"
                  className={dropdownLinkStyles}
                  onClick={() => setActiveDropdown(null)}
                >
                  API Request
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/use-effect/window-width"
                  className={dropdownLinkStyles}
                  onClick={() => setActiveDropdown(null)}
                >
                  Window Width
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/use-effect/connecting-to-chat-server"
                  className={dropdownLinkStyles}
                  onClick={() => setActiveDropdown(null)}
                >
                  Connecting to a chat server
                </NavLink>
              </li>
            </ul>
          </li>

          {/* useContext Dropdown */}
          <li className="dropdown-item">
            <button 
              onClick={() => toggleDropdown('useContext')}
              onKeyDown={(e) => handleKeyDown(e, 'useContext')}
              className={`dropdown-button ${activeDropdown === 'useContext' ? 'dropdown-button-active' : ''}`}
              aria-expanded={activeDropdown === 'useContext'}
              aria-haspopup="true"
              tabIndex="0"
            >
              <span className="dropdown-label">useContext</span>
              <span className={`dropdown-icon ${activeDropdown === 'useContext' ? 'dropdown-icon-active' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="dropdown-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <ul className={`dropdown-menu ${activeDropdown === 'useContext' ? 'dropdown-menu-active' : ''}`}
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
