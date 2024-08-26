import React from "react";

function Navbar() {
  return (
    <div className="  w-full py-[1rem]  ">
      <section className=" flex max-w-[80%] items-center justify-between  m-auto ">
        <a href="/" className="logo w-fit">
          <img
            src="icons/logo.svg"
            alt="Fsahion Butwal"
            width={150}
            height={1000}
          />
        </a>
        <div className="flex gap-20">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="hover:currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <a href="/" className="font-semibold hover:text-[#D10B3B]">
              Home
            </a>
          </div>

          <a href="/cart" className="font-semibold hover:text-[#D10B3B]">
            Cart
          </a>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
