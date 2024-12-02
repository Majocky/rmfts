import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <Book className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold text-white">Ruben Mutendi Theological Serminary</span>
            </Link>
            <p className="text-base text-gray-400">
              Equipping leaders with biblical truth and practical ministry skills since 1950.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Quick Links
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/about" className="text-base text-gray-300 hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses" className="text-base text-gray-300 hover:text-white">
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link to="/admissions" className="text-base text-gray-300 hover:text-white">
                      Admissions
                    </Link>
                  </li>
                  <li>
                    <Link to="/events" className="text-base text-gray-300 hover:text-white">
                      Events
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Resources
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/library" className="text-base text-gray-300 hover:text-white">
                      Library
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="text-base text-gray-300 hover:text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="text-base text-gray-300 hover:text-white">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-base text-gray-300 hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Ruben Mutendi Theological Serminary. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}