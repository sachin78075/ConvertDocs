import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    main: [
      { name: 'Home', path: '/' },
      { name: 'Converter', path: '/converter' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' },
      { name: 'Support', path: '/support' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms & Conditions', path: '/terms' },
      { name: 'Disclaimer', path: '/disclaimer' },
      { name: 'Cookie Policy', path: '/cookie-policy' },
      { name: 'About Us', path: '/about' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300" data-testid="footer">
      {/* Premium top border */}
      <div className="h-1 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center gap-2 font-bold text-xl text-white"
              data-testid="footer-logo"
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-red-600 to-yellow-500">
                <FileText className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span>ConvertDocs</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Convert any document online – fast, free & secure. No signup required.
            </p>
            <div className="flex gap-2 mt-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-gray-700" />
            </div>
          </div>

          {/* Main Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.main.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-yellow-500 transition-colors"
                    data-testid={`footer-link-${link.name.toLowerCase().replace(/ /g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-yellow-500 transition-colors"
                    data-testid={`footer-legal-link-${link.name.toLowerCase().replace(/ /g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm" data-testid="footer-copyright">
            © {currentYear} ConvertDocs – All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};