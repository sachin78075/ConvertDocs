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
    <footer className="bg-slate-900 text-slate-300" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center gap-2 font-bold text-xl text-white"
              data-testid="footer-logo"
            >
              <FileText className="w-6 h-6 text-accent" strokeWidth={2.5} />
              <span>ConvertDocs</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Convert any document online – fast, free & secure. No signup required.
            </p>
          </div>

          {/* Main Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.main.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-accent transition-colors"
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
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-accent transition-colors"
                    data-testid={`footer-legal-link-${link.name.toLowerCase().replace(/ /g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-sm" data-testid="footer-copyright">
            © {currentYear} ConvertDocs – All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};