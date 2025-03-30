import React from "react";
import { Link, useLocation } from "react-router-dom";


const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <nav className="text-sm text-gray-500 pt-2  px-8 text-[15px] ">
      <ul className="flex ">
        <li>
          <Link to="/" className="text-gray/400">
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center capitalize ">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-zinc-800 font-bold">
                  {decodeURIComponent(value)}
                </span>
              ) : (
                <Link to={to} className="text-gray-400">
                  {decodeURIComponent(value)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
      <div className="items-numbers">
        <h1 className="capitalize">
          {pathnames.map((value, index) => {
            const isLast = index === pathnames.length - 1;
            return (
              <div className="pt-3 flex " key={index} >
                <h1 className="text-[16px] gap-2 flex">
                  <span className="font-bold text-zinc-900">
                    {decodeURIComponent(value)} :
                  </span>
                  
                </h1>
              </div>
            );
          })}
        </h1>
      </div>
    </nav>
  );
};

export default Breadcrumb;
