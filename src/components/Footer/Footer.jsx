import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <section
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
      className="relative py-10 overflow-hidden "
    >
      <div className="relative z-10 px-4 mx-auto max-w-7xl">
        <div className="flex flex-wrap -m-6">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex flex-col justify-between h-full">
              <div className="inline-flex items-center mb-4">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-white">
                  &copy; Copyright 2024 - All rights reserved
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="mb-4 text-xs font-semibold text-white uppercase tracking-px">
                Company
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-white hover:text-gray-700"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-white hover:text-gray-700"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-white hover:text-gray-700"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-white hover:text-gray-700"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="mb-4 text-xs font-semibold text-white uppercase tracking-px hover:text-gray-700">
                Support
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-white hover:text-gray-700"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-white hover:text-gray-700"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-white hover:text-gray-700"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-white hover:text-gray-700"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="mb-4 text-xs font-semibold text-white uppercase tracking-px hover:text-gray-700">
                Legals
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-white hover:text-gray-700"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-white hover:text-gray-700"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-white hover:text-gray-700"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
