import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Book className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">Ruben Mutendi Theological Serminary</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/portal"
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700"
            >
              Student Portal
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-gray-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/portal"
                className="block w-full rounded-md bg-indigo-600 px-4 py-2 text-center text-base font-medium text-white hover:bg-indigo-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Student Portal
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}