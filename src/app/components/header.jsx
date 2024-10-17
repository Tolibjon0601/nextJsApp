import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="container max-w-[1360px] mx-auto  flex justify-between pt-4 pb-4 items-center   ">
      <div>
        <img src="/image/header-logo.svg" alt="Logo" />
      </div>
      <ul className="flex gap-2">

        <li>
          <a
            className="hover:bg-blue px-2 py-2 rounded-lg hover:text-white"
            href=""
          >
      electronics
          </a>
        </li>
        <li>
          <a
            className="hover:bg-blue px-2 py-2 rounded-lg hover:text-white"
            href=""
          >
        jewelery
          </a>
        </li>
        <li>
          <a
            className="hover:bg-blue px-2 py-2 rounded-lg hover:text-white"
            href=""
          >
         men's clothing
          </a>
        </li>
        <li>
          <a
            className="hover:bg-blue px-2 py-2 rounded-lg hover:text-white"
            href=""
          >
         women's clothing
          </a>
        </li>
      </ul>
      <ul className="flex gap-2 ">
        <li>
          <Link
            className="hover:bg-blue px-2 py-2 rounded-lg hover:text-white"
            href="/"
          >
            Bosh sahifa{" "}
          </Link>
        </li>
        <li>
          <Link
            className="hover:bg-blue px-2 py-2 rounded-lg hover:text-white"
            href="/xizmatlar"
          >
            Xizmatlar
          </Link>
        </li>
        <li>
          <Link
            className="hover:bg-blue px-2 py-2 rounded-lg hover:text-white"
            href="/portfolio"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <a
            className="hover:bg-blue px-2 py-2 rounded-lg hover:text-white"
            href=""
          >
            Jamoa
          </a>
        </li>
        <li>
          <a
            className="hover:bg-blue px-2 py- rounded-lg hover:text-white"
            href=""
          >
            Blog
          </a>
        </li>
        <li>
          <a
            className="hover:bg-blue px-2 py-1 rounded-lg hover:text-white"
            href=""
          >
            Kontaktlar
          </a>
        </li>
        <li>
          <a className="px-4 py-2 bg-blue rounded-lg text-white" href="">
            +998 90 921 37 11
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
