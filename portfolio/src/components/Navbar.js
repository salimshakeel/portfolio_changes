import { useState } from "react";
import Link from 'next/link'

function Navbar() {

  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="shadow-md bg-slate-50 flex flex-col items-start md:flex-row ">

      <button
        className="p-2 text-gray-700 rounded-md outline-none absolute right-5 focus:border-gray-400 focus:border md:hidden"
        onClick={() => setNavbar(!navbar)}
      >
        {navbar ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      <h1 className="font-bold text-4xl hover:text-blue-500">
        <Link href="#">Home</Link>
      </h1>

      <div className={`${navbar ? "block" : "hidden"} md:block`}>
        <ul className="flex flex-col items-start md:flex-row md:space-x-10">
          <li className="hover:text-blue-500"><Link href="#projects">Projects</Link></li>
          <li className="hover:text-blue-500"><Link href="#certifications">Certifications</Link></li>
          <li className="hover:text-blue-500"><Link href="#contact">Contact</Link></li>
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;
