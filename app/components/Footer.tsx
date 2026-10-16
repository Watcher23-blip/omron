import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-blue-600">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center sm:flex-row sm:text-left md:px-12">
        <p className="text-sm text-white sm:text-left">
          © 2024 OMRON, All Rights Reserved.
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white">
          <Link
            href="/"
            className="transition-colors hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="privacy-policy"
            className="transition-colors hover:text-blue-600"
          >
            Privacy Policy
          </Link>

          <Link
            href="terms"
            className="transition-colors hover:text-blue-600"
          >
            Terms &amp; Conditions
          </Link>
        </nav>
      </div>
    </footer>
  );
}