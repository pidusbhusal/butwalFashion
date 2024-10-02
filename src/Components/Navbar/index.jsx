import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import useAuth from "../../Context/authUserContext";
import { doSignOut } from "../../firebase/auth";
import { Navigate } from "react-router-dom";

function Navbar() {
  const { userLoggedIn, currentUser } = useAuth();

  const { cart } = useContext(CartContext);
  const handleSignOut = async () => {
    await doSignOut().then(Navigate("/LogInForm"));
  };

  return (
    <div className="  w-full py-[1rem]  bg-white drop-shadow">
      <section className=" flex max-w-[75%] items-center justify-between  m-auto ">
        <a href="/" className="logo w-fit">
          <img src="icons/logo.svg" alt="Fsahion Butwal" width={110} />
        </a>
        <div className="flex gap-10">
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

            <p>{userLoggedIn ? currentUser.uid : ""}</p>
          </div>

          {userLoggedIn ? (
            <button
              onClick={handleSignOut}
              className="font-semibold text-gray-700 hover:text-[#D10B3B]"
            >
              Sign Out
            </button>
          ) : (
            <a
              href="/LogInForm"
              className="font-semibold text-gray-700 hover:text-[#D10B3B]"
            >
              Sign In
            </a>
          )}
        </div>
      </section>
    </div>
  );
}

export default Navbar;
