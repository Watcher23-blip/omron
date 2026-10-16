'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '#about' },
  { name: 'Work Details', href: '#work' },
  { name: 'FAQs', href: '#faq' },
  { name: 'Terms & Conditions', href: '/terms' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="w-full overflow-hidden border-b border-white/70 bg-gradient-to-r from-[#e8f3fc] via-[#f0efff] to-[#b0e3f3] shadow-sm">
        <div className="flex min-h-[76px] w-full items-center justify-between px-4 sm:px-7 lg:px-12">
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2 sm:gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-lg font-extrabold text-white shadow-md shadow-blue-600/20 transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10">
              O
            </div>

            <span className="text-lg font-extrabold tracking-wide text-blue-700 sm:text-2xl">
              OMROAN
            </span>
          </Link>

          <div className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative whitespace-nowrap py-2 text-sm font-medium transition-colors duration-200 xl:text-base ${
                  index === 0
                    ? 'text-blue-700'
                    : 'text-slate-700 hover:text-blue-700'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-blue-600 transition-all duration-300 ${
                    index === 0 ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/70 bg-white/40 text-slate-800 transition hover:bg-white/70 lg:hidden"
          >
            <span className="text-2xl leading-none">
              {menuOpen ? '×' : '☰'}
            </span>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/60 bg-white/30 px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-white/60 hover:text-blue-700"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}