import React, { useState } from "react";

function Header() {
  return (
    <div className="flex font-poppins justify-between text-xl">
      <div className=" mx-5 my-2 py-3 font-bold flex">classroom</div>

      <div class="flex mx-5 my-2 py-2 bg-ivory shadow-md rounded-full">
        <a href="#" class="text-primary  px-4 py-1">
          dashboard
        </a>
        <a href="#" class="text-primary  px-4 py-1">
          study jam
        </a>
        <a href="#" class="text-primary  px-4 py-1">
          homework
        </a>
      </div>
    </div>
  );
}

export default Header;
