import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  return (
    <div className="  w-full py-[1rem]  ">
      <section className=" flex max-w-[75%] items-center justify-between  m-auto ">
        <a href="/" className="logo w-fit">
          <img
            src="icons/logo.svg"
            alt="Fsahion Butwal"
            width={150}
            height={1000}
          />
        </a>
        <div className="flex gap-20">
          <a href="/" className="font-semibold hover:text-[#D10B3B]">
            Home
          </a>

          <div className="flex gap-2 relative">
            <a href="/cart" className="font-semibold hover:text-[#D10B3B]">
              Cart
            </a>
            <div className="w-5 absolute  bottom-3 left-8 text-white font-bold h-5 rounded-lg bg-red-600">
              <p className="w-fit m-auto text-sm">{cart.length}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
