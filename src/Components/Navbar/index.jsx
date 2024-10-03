import { useContext, useState, useRef } from "react";
import { CartContext } from "../../Context/cartContext";
import useAuth from "../../Context/authUserContext";
import { doSignOut } from "../../firebase/auth";
import { Navigate, useSearchParams } from "react-router-dom";

function Navbar() {
  const { userLoggedIn, currentUser } = useAuth();
  const [navOpen, setNavOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const handleSignOut = async () => {
    await doSignOut().then(Navigate("/LogInForm"));
  };

  const handleClickOutside = (event) => {
    // Check if the click is outside of the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setNavOpen(false); // Close the dropdown
    }
  };

  const handleToggleNav = () => {
    setNavOpen((prev) => !prev); // Toggle dropdown
  };

  return (
    <div className=" relative z-50 w-full py-[1rem]  bg-white drop-shadow">
      <section className="  flex max-w-[75%] items-center justify-between  m-auto ">
        <a href="/" className="logo w-fit">
          <img src="icons/logo.svg" alt="Fsahion Butwal" width={110} />
        </a>
        <div className="hidden md:flex gap-10 items-center">
          <a
            href="/"
            className="font-semibold text-gray-700 hover:text-[#D10B3B]"
          >
            Home
          </a>

          <div className="flex gap-2 relative">
            {userLoggedIn ? (
              <a
                href="/cart"
                className=" text-gray-700 font-semibold hover:text-[#D10B3B]"
              >
                Cart
              </a>
            ) : (
              <a
                href="/LogInForm"
                className=" text-gray-700 font-semibold hover:text-[#D10B3B]"
              >
                Cart
              </a>
            )}

            {cart.length == 0 ? (
              ""
            ) : (
              <div className="w-5 absolute  bottom-3 left-8 text-white font-bold h-5 rounded-lg bg-red-600">
                <p className="w-fit m-auto text-sm">{cart.length}</p>
              </div>
            )}
          </div>

          {userLoggedIn ? (
            <button
              onClick={handleSignOut}
              className="font-semibold text-gray-700 hover:text-[#D10B3B]"
            >
              Sign Out
            </button>
          ) : (
            <botton className="px-[1rem] py-[0.5rem] bg-black text-white rounded-sm hover">
              <a href="/LogInForm" className="font-semibold text-white ">
                Sign In
              </a>
            </botton>
          )}
        </div>

        {/* mobile menu */}
        <div className="md:hidden ">
          <button onClick={handleToggleNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* drop down menu start here */}

      <div
        className={`md:hidden absolute flex flex-col ${
          navOpen ? "top-full opacity-100 h-auto" : "bottom-full  "
        } border-t-2 border-gray-300 z-50 bg-white w-full pb-sm gap-10 items-center transition-all ease-in-out duration-300`}
      >
        
        <a
          href="/"
          className="font-semibold text-gray-700 w-full text-center border-b-2 py-sm border-gray hover:text-[#D10B3B]"
        >
          Home
        </a>

        <div className="flex gap-2 relative w-full text-center">
          {userLoggedIn ? (
            <a
              href="/cart"
              className=" text-gray-700 font-semibold hover:text-[#D10B3B] border-b-2 py-sm border-gray  w-full"
            >
              Cart
            </a>
          ) : (
            <a
              href="/LogInForm"
              className=" text-gray-700 font-semibold hover:text-[#D10B3B] border-b-2 py-sm border-gray  w-full"
            >
              Cart
            </a>
          )}

          {cart.length == 0 ? (
            ""
          ) : (
            <div className="w-5 absolute  bottom-3 left-8 text-white font-bold h-5 rounded-lg bg-red-600">
              <p className="w-fit m-auto text-sm">{cart.length}</p>
            </div>
          )}
        </div>

        {userLoggedIn ? (
          <button
            onClick={handleSignOut}
            className="font-semibold text-gray-700 hover:text-[#D10B3B]"
          >
            Sign Out
          </button>
        ) : (
          <botton className="px-[2rem] py-[1rem] bg-black text-white rounded-sm hover">
            <a href="/LogInForm" className="font-semibold text-white ">
              Sign In
            </a>
          </botton>
        )}
      </div>
      {/* Attach a click handler to the document */}
      {navOpen && (
        <div
          onClick={handleClickOutside} // Close dropdown on click outside
          className="fixed inset-0 z-40"
        />
      )}
    </div>
  );
}

export default Navbar;
