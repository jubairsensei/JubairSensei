import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, ShieldAlert } from 'lucide-react';
import { NAV_ITEMS, BRAND_NAME, LINKS } from '../constants';

// --- Types ---
interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

// --- Components ---

export const CyberButton: React.FC<CyberButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative px-6 py-3 font-mono font-bold uppercase transition-all duration-300 clip-path-slant focus:outline-none focus:ring-2 focus:ring-cyber-green focus:ring-offset-2 focus:ring-offset-cyber-black";
  
  const variants = {
    primary: "bg-cyber-green text-cyber-black hover:bg-white hover:shadow-[0_0_20px_rgba(57,255,20,0.6)]",
    secondary: "bg-cyber-gray text-cyber-green border border-cyber-green hover:bg-cyber-green hover:text-cyber-black",
    outline: "bg-transparent text-gray-400 border border-gray-600 hover:border-cyber-green hover:text-cyber-green",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const SectionHeader: React.FC<{ title: string; subtitle?: string; align?: 'left' | 'center' }> = ({ 
  title, 
  subtitle, 
  align = 'center' 
}) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  return (
    <div className={`mb-12 ${alignClass}`}>
      <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4 relative inline-block">
        <span className="text-cyber-green mr-2">&gt;</span>
        {title}
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-cyber-green/50 skew-x-12"></span>
      </h2>
      {subtitle && <p className="text-gray-400 max-w-2xl mx-auto mt-4">{subtitle}</p>}
    </div>
  );
};

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <div className={`bg-cyber-gray border border-gray-800 p-6 relative group hover:border-cyber-green/50 transition-colors duration-300 ${className}`}>
      <div className="absolute top-0 right-0 p-1">
        <div className="w-2 h-2 bg-gray-800 group-hover:bg-cyber-green transition-colors"></div>
      </div>
      <div className="absolute bottom-0 left-0 p-1">
        <div className="w-2 h-2 bg-gray-800 group-hover:bg-cyber-green transition-colors"></div>
      </div>
      {children}
    </div>
  );
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-cyber-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold font-mono text-white flex items-center gap-2">
              <Terminal className="text-cyber-green w-6 h-6" />
              <span>{BRAND_NAME}</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium font-mono transition-colors ${
                      isActive 
                        ? 'text-cyber-green bg-cyber-green/10' 
                        : 'text-gray-300 hover:text-cyber-green hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cyber-gray border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-cyber-green hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium font-mono"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-gray border-t border-gray-800 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4 font-mono">{BRAND_NAME}</h3>
            <p className="text-gray-400 mb-4 max-w-sm">
              Empowering the next generation of ethical hackers and developers. 
              Join the movement to learn, build, and dominate.
            </p>
            <div className="flex space-x-4">
               {/* Social icons could go here */}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4 font-mono text-cyber-green">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.slice(0, 4).map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-gray-400 hover:text-cyber-green transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4 font-mono text-cyber-green">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-cyber-green">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-cyber-green">Contact</Link></li>
              <li className="text-gray-500 text-sm mt-4">
                <ShieldAlert className="w-4 h-4 inline mr-1" />
                Educational Purpose Only
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm font-mono">
          <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
