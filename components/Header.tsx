'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { getAssetPath } from '@/lib/config';

export default function Header() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Normalize pathname by removing trailing slash for comparison
  const normalizedPathname = pathname?.endsWith('/') && pathname !== '/'
    ? pathname.slice(0, -1)
    : pathname;

  const isActive = (path: string) => {
    if (path === '/') {
      return normalizedPathname === '/';
    }
    return normalizedPathname === path;
  };

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/service', label: 'Service' },
    { path: '/about-us', label: 'About Us' },
    { path: '/contact-us', label: 'Contact Us' },
  ];

  return (
    <div className="max-w-7xl mx-auto h-full px-4">
      <div className="flex items-center justify-between h-full">
        <div className="w-1/2 md:w-2/5 lg:w-1/2 pl-4">
          <Link href="/">
            <Image
              src={getAssetPath('/logo.png')}
              alt="logo"
              width={200}
              height={60}
              className="cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        {!isMobile ? (
          <div className="w-1/2 md:w-3/5 lg:w-1/2 flex items-center justify-center font-medium text-lg text-[#0e424d]">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-1.5 mx-2 rounded-full cursor-pointer transition-all hover:border-2 hover:border-asl-blue ${
                  isActive(item.path)
                    ? 'bg-asl-blue text-asl-light-blue'
                    : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        ) : (
          /* Mobile Menu */
          <div className="w-1/2 flex items-center justify-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#0e424d]"
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {isMenuOpen && (
              <>
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 z-40"
                  onClick={() => setIsMenuOpen(false)}
                />
                <div className="fixed right-0 top-[130px] bg-white shadow-lg rounded-l-lg z-50 min-w-[200px]">
                  {menuItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-6 py-3 font-medium text-[#0e424d] hover:bg-gray-100 ${
                        isActive(item.path) ? 'bg-[#0e424d] text-white' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
