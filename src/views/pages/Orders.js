import React from "react";
import { ReactComponent as WooCommerceLogo } from "assets/images/woo-logo.svg";

const Orders = () => {
  return (
    <div>
      <header className="lg:px-16 px-6 bg-white flex border-b-1 border flex-wrap items-center lg:py-0 py-2">
        <div className="flex-1 flex justify-between items-center">
          <a href="sss">
            <WooCommerceLogo />
          </a>
        </div>

        <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
              <li>
                <a
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                  href="sss"
                >
                  Orders
                </a>
              </li>
              <li>
                <a
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                  href="sss"
                >
                  Shipping
                </a>
              </li>
              <li>
                <a
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                  href="sss"
                >
                  Settings
                </a>
              </li>
            </ul>
          </nav>
          <a
            href="sss"
            className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor"
          >
            <img
              className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400"
              src="https://pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg"
              alt="Andy Leverenz"
            />
          </a>
        </div>
      </header>
      <div className="px-4">
        <h1 className="text-center mt-6 font-bold text-3xl">Orders</h1>
        <table className="w-4/6 mx-auto mt-6 rounded">
          <thead className="bg-teal-400 text-white">
            <tr>
              <th className="px-4 py-2">Order #</th>
              <th className="px-4 py-2">Buyer</th>
              <th className="px-4 py-2">Created Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">#333333</td>
              <td className="border px-4 py-2">Adam</td>
              <td className="border px-4 py-2">12/12/1222</td>
              <td className="border px-4 py-2">Button</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
