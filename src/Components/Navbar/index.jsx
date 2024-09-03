import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import { authContext, useAuth } from "../../Context/authUserContext";
import { signOut } from "firebase/auth";

function Navbar() {
  const { userLoggedIn } = useAuth();
  const { cart } = useContext(CartContext);
  const handleSignOut =  async () => {
   await signOut();
  };

  return (
    <div className="  w-full py-[1rem]  bg-white drop-shadow">
      <section className=" flex max-w-[75%] items-center justify-between  m-auto ">
        <a href="/" className="logo w-fit">
          <img
            src="icons/logo.svg"
            alt="Fsahion Butwal"
            width={150}
            height={1000}
          />
        </a>
        <div className="flex gap-10">
          <a
            href="/"
            className="font-semibold text-gray-700 hover:text-[#D10B3B]"
          >
            Home
          </a>

          <div className="flex gap-2 relative">
            <a
              href="/cart"
              className=" text-gray-700 font-semibold hover:text-[#D10B3B]"
            >
              Cart
            </a>
            <div className="w-5 absolute  bottom-3 left-8 text-white font-bold h-5 rounded-lg bg-red-600">
              <p className="w-fit m-auto text-sm">{cart.length}</p>
            </div>
          </div>

          {userLoggedIn ? (
            <button onClick={handleSignOut()}>Sign Out</button>
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
