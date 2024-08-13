import React from "react";

function Navbar() {
  return (
    <div className="  w-full py-sm ">
      <section className=" flex max-w-[80%] items-center justify-between  m-auto ">
        <div className="logo w-fit">
          <img
            src="icons/logo.svg"
            alt="Fsahion Butwal"
            width={200}
            height={1000}
          />
        </div>
        <div className="flex gap-20">
          <a href="/">Home</a>
          <a href="/cart">Cart</a>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
